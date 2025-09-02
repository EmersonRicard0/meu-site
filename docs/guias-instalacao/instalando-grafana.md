
# Instalar a partir do repositório APT

Se você instalar a partir do repositório APT, o Grafana será atualizado automaticamente quando você executar o `apt-get update`.

## Versões disponíveis

| Versão Grafana | Pacote | Repositório |
|----------------|---------|-------------|
| Grafana Enterprise | `grafana-enterprise` | `https://apt.grafana.com stable main` |
| Grafana Enterprise (Beta) | `grafana-enterprise` | `https://apt.grafana.com beta main` |
| Grafana OSS | `grafana` | `https://apt.grafana.com stable main` |
| Grafana OSS (Beta) | `grafana` | `https://apt.grafana.com beta main` |

::: tip Observação
O Grafana Enterprise é a edição recomendada e padrão. Está disponível gratuitamente e inclui todos os recursos da edição OSS. Você também pode atualizar para o conjunto completo de recursos Enterprise, que oferece suporte a plugins Enterprise.
:::

## Etapas de instalação

### 1. Instalar pacotes pré-requisitos

```bash
sudo apt-get install -y apt-transport-https software-properties-common wget
```
## 2. Importar a chave GPG
```bash
sudo mkdir -p /etc/apt/keyrings/
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
```
## 3. Adicionar repositório
Para versões estáveis:
```bash
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```
Para versões beta:
```bash
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com beta main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```
## 4. Atualizar lista de pacotes
```bash
sudo apt-get update
```
## 5. Instalar Grafana
Para instalar o Grafana OSS:
# Installs the latest OSS release:
```bash
sudo apt-get install grafana
```
Para instalar o Grafana Enterprise:

# Installs the latest Enterprise release:
```bash
sudo apt-get install grafana-enterprise
```