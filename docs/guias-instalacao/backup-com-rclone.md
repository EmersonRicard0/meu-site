::: info
Este manual detalha o processo de instalação do Rclone e a configuração de um script de backup automático para Zabbix e Grafana, garantindo segurança (sem senhas "hardcoded") e confiabilidade.
:::

## 1. Pré-requisitos

Antes de começar, certifique-se de que possui:

* Um servidor Linux (Ubuntu/Debian ou CentOS/RHEL).
* Acesso `sudo` ao servidor.
* Um usuário `zabbix` existente no sistema.
* Uma instalação funcional do Zabbix e do Grafana.
* Conhecimento básico de linha de comando Linux.

## 2. Instalação do Rclone

O Rclone é uma ferramenta de linha de comando para sincronizar ficheiros e diretórios com diversas soluções de armazenamento em nuvem.

### 2.1. Instalação via Script Oficial (Recomendado)

Esta é a forma mais fácil e recomendada para instalar o Rclone.

```bash
sudo -v ; curl [https://rclone.org/install.sh](https://rclone.org/install.sh) | sudo bash
````

### 2.2. Verificação da Instalação

Após a instalação, verifique se o Rclone está a funcionar corretamente:

```bash
rclone version
```

Você deverá ver a versão do Rclone que foi instalada.

## 3\. Configuração do Rclone com a Nuvem

Vamos configurar o Rclone para se conectar ao seu serviço de nuvem (ex: Google Drive). O processo é interativo.

```bash
rclone config
```

Siga os passos no terminal:

1.  **Novo remote:** Digite `n` e pressione Enter.
2.  **Nome:** Dê um nome para a sua conexão (ex: `meudrive`).
3.  **Serviço:** Escolha o número correspondente ao seu serviço de nuvem (ex: Google Drive).
4.  **Configurações Padrão:** Pressione `Enter` para as perguntas sobre `client_id` e `client_secret` para usar os valores padrão.
5.  **Permissões (Scope):** Escolha a opção `1` para acesso total (`Full access`).
6.  **Configuração Automática:** Quando perguntar sobre "auto config", digite `y` e pressione Enter. Uma janela do navegador será aberta para você fazer a autenticação.
    ::: tip Servidor sem Interface Gráfica (GUI)
    Se estiver num servidor apenas com linha de comando, o Rclone fornecerá um link. Copie e cole este link no navegador do seu computador local para autenticar.
    :::
7.  **Team Drive:** Responda `n` à pergunta sobre "team drive", a menos que você esteja a usar um Drive compartilhado.
8.  **Confirmação:** Confirme as configurações com `y` e saia com `q`.

## 4\. Configuração do MySQL para o Usuário Zabbix

Para que o script de backup (`mysqldump`) não precise da senha no comando, criamos um ficheiro de configuração para o usuário `zabbix`.

::: danger Segurança
Este passo é crucial para evitar expor a sua senha do banco de dados nos scripts.
:::

Crie o ficheiro `.my.cnf` e defina as permissões corretas:

```bash
# Cria o ficheiro de configuração
sudo tee /home/zabbix/.my.cnf > /dev/null <<EOF
[client]
user=zabbix
password=SUA_SENHA_AQUI
EOF

# Define o usuário zabbix como proprietário e restringe as permissões
sudo chown zabbix:zabbix /home/zabbix/.my.cnf
sudo chmod 600 /home/zabbix/.my.cnf
```

## 5\. Script de Backup Completo

Este script realiza o backup do banco de dados, das configurações do Zabbix e dos dados do Grafana.

### 5.1. Crie o Ficheiro do Script

```bash
sudo touch /home/zabbix/backup_rclone.sh
```

### 5.2. Conteúdo do Script

Copie e cole o conteúdo abaixo para dentro do ficheiro `/home/zabbix/backup_rclone.sh`.

```sh
#!/bin/bash

# --- CONFIGURAÇÕES ---
REMOTE_NAME="meudrive" # Nome do remote configurado no passo 3
DESTINO="$REMOTE_NAME:BackupServidores/$(hostname)/$(date +%Y-%m-%d)"
RCLONE_CONF="/home/zabbix/.config/rclone/rclone.conf"
LOG="/home/zabbix/backup_rclone.log"
DB_BACKUP="/tmp/zabbix_db_backup_$(date +%s).sql.gz"

# --- ORIGENS ZABBIX ---
ORIGEM_CONFIG="/etc/zabbix"
ORIGEM_SCRIPTS="/usr/lib/zabbix/alertscripts"
ORIGEM_MIBS="/usr/share/snmp/mibs"

# --- ORIGENS GRAFANA ---
GRAFANA_DB="/var/lib/grafana/grafana.db"
GRAFANA_CONF="/etc/grafana"
GRAFANA_DESTINO="$DESTINO/grafana"
GRAFANA_TMP_DIR="/tmp/grafana_backup_$(date +%s)"

# --- INÍCIO DO SCRIPT ---
echo "========== INÍCIO DO BACKUP: $(date '+%d/%m/%Y %H:%M:%S') ==========" > "$LOG"

# 1. Backup do Banco de Dados Zabbix
echo "🔄 Gerando backup do banco de dados Zabbix..." >> "$LOG"
mysqldump zabbix | gzip > "$DB_BACKUP" 2>> "$LOG"
if [ $? -ne 0 ]; then
    echo "❌ Erro ao gerar dump do banco de dados! Abortando." >> "$LOG"
    exit 1
fi
echo "📦 Enviando dump do banco..." >> "$LOG"
rclone copy "$DB_BACKUP" "$DESTINO/db" --log-file="$LOG" --config "$RCLONE_CONF"

# 2. Backup dos Ficheiros de Configuração Zabbix
echo "📁 Enviando configurações do Zabbix..." >> "$LOG"
rclone sync "$ORIGEM_CONFIG" "$DESTINO/config" --log-file="$LOG" --config "$RCLONE_CONF"

# 3. Backup do Grafana
echo "🔄 Iniciando backup do Grafana..." >> "$LOG"
mkdir -p "$GRAFANA_TMP_DIR"
cp "$GRAFANA_DB" "$GRAFANA_TMP_DIR/"
cp -r "$GRAFANA_CONF" "$GRAFANA_TMP_DIR/"

echo "📦 Enviando backup do Grafana..." >> "$LOG"
rclone copy "$GRAFANA_TMP_DIR" "$GRAFANA_DESTINO" --log-file="$LOG" --config "$RCLONE_CONF"

# --- LIMPEZA ---
echo "🧹 Limpando ficheiros temporários..." >> "$LOG"
rm -f "$DB_BACKUP"
rm -rf "$GRAFANA_TMP_DIR"

echo "✅ Backup finalizado com sucesso: $(date '+%d/%m/%Y %H:%M:%S')" >> "$LOG"
echo "========== FIM DO BACKUP ==========" >> "$LOG"
```

## 6\. Tornar o Script Executável

Defina as permissões corretas para que o script possa ser executado.

```bash
sudo chmod +x /home/zabbix/backup_rclone.sh
sudo chown zabbix:zabbix /home/zabbix/backup_rclone.sh
```

## 7\. Teste e Monitoramento

Antes de agendar, é crucial testar o script.

Execute o script como o usuário `zabbix`:

```bash
sudo -u zabbix /home/zabbix/backup_rclone.sh
```

Monitore o log em tempo real (num outro terminal):

```bash
tail -f /home/zabbix/backup_rclone.log
```

Após a execução, verifique o seu serviço na nuvem para confirmar que as pastas e ficheiros de backup foram criados.

## 8\. Agendamento do Backup com Cron

Para automatizar o backup, agende-o usando o `cron`.

Edite a `crontab` do usuário `zabbix`:

```bash
sudo -u zabbix crontab -e
```

::: tip Dica sobre o Editor
Se for a primeira vez, o sistema pode pedir para escolher um editor. Escolha `nano` para facilitar.
:::

Adicione a seguinte linha para executar o backup todos os dias à 01:00 da manhã, e salve o ficheiro:

```
0 1 * * * /home/zabbix/backup_rclone.sh
```

```
```