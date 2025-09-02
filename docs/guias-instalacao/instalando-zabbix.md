# Guia de Instalação do Zabbix 7.4 LTS no Ubuntu 24.04

::: info
Este manual detalha o processo completo para instalar e configurar o Zabbix Server, o Frontend e o Agent na versão 7.4 LTS, utilizando Apache e MySQL no sistema operativo Ubuntu 24.04.
:::

## 1. Tornar-se Utilizador Root

Para executar os comandos de instalação, inicie uma sessão de shell com privilégios de root.

```bash
sudo -s
2. Instalar o Repositório Zabbix
Primeiro, adicione o repositório oficial do Zabbix para ter acesso aos pacotes de instalação.
```

## Descarregar o pacote de configuração do repositório
wget [https://repo.zabbix.com/zabbix/7.4/release/ubuntu/pool/main/z/zabbix-release/zabbix-release_latest_7.4+ubuntu24.04_all.deb](https://repo.zabbix.com/zabbix/7.4/release/ubuntu/pool/main/z/zabbix-release/zabbix-release_latest_7.4+ubuntu24.04_all.deb)

# Instalar o pacote .deb
```bash
dpkg -i zabbix-release_latest_7.4+ubuntu24.04_all.deb
```

# Atualizar a lista de pacotes do sistema
```bash
apt update
```

## 3. Instalar os Componentes do Zabbix
Instale o Zabbix Server, o Frontend (interface web), o Agent e os scripts SQL para MySQL.

```bash
apt install zabbix-server-mysql zabbix-frontend-php zabbix-apache-conf zabbix-sql-scripts zabbix-agent
```
## 4. Criar e Popular a Base de Dados

::: tip Pré-requisito
Certifique-se de que o seu servidor de base de dados MySQL está instalado e em execução antes de continuar.
:::

Aceda ao MySQL como utilizador root (ser-lhe-á pedida a sua senha de root do MySQL):

```bash
mysql -uroot -p
```

Execute os seguintes comandos SQL para criar a base de dados, o utilizador e atribuir as permissões.
::: danger Segurança
Substitua 'password' por uma senha forte e segura para o utilizador zabbix da base de dados.
:::
```bash
SQL

create database zabbix character set utf8mb4 collate utf8mb4_bin;
create user zabbix@localhost identified by 'password';
grant all privileges on zabbix.* to zabbix@localhost;
set global log_bin_trust_function_creators = 1;
quit;
```

Importe o schema inicial do Zabbix. O sistema irá pedir a senha do utilizador zabbix que você acabou de criar.
```bash
zcat /usr/share/zabbix/sql-scripts/mysql/server.sql.gz | mysql --default-character-set=utf8mb4 -uzabbix -p zabbix
```
Desative a opção log_bin_trust_function_creators por segurança, agora que a importação está concluída.

```bash
mysql -uroot -p
SQL
set global log_bin_trust_function_creators = 0;
quit;
```

## 5. Configurar a Base de Dados para o Servidor Zabbix
Edite o ficheiro de configuração do Zabbix para que ele saiba como se conectar à base de dados.

Abra o ficheiro de configuração:

```bash
nano /etc/zabbix/zabbix_server.conf
```
Procure pela linha DBPassword= e adicione a senha que você criou no passo anterior.

Snippet de código
```bash
DBPassword=password
```
Salve e feche o ficheiro.

## 6. Iniciar os Serviços do Zabbix
Inicie os processos do Zabbix Server, Agent e Apache, e habilite-os para que arranquem automaticamente com o sistema.

```bash
systemctl restart zabbix-server zabbix-agent apache2
systemctl enable zabbix-server zabbix-agent apache2
```
## 7. Aceder à Interface Web do Zabbix

Parabéns! A instalação está concluída. Agora pode aceder à interface web do Zabbix para finalizar a configuração.

Abra o seu navegador e aceda ao seguinte endereço, substituindo ip_do_seu_servidor pelo IP real da sua máquina:
http://ip_do_seu_servidor/zabbix