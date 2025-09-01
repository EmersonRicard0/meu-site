# Instalação do Zabbix 6.0 LTS no Debian 11

Este guia detalha o processo de instalação do Zabbix Server, Frontend e Agent na versão 6.0 LTS sobre o sistema operacional Debian 11.

## Pré-requisitos
- Um servidor com Debian 11 (Bullseye) instalado.
- Acesso root ou um usuário com privilégios sudo.
- Banco de dados (MySQL/PostgreSQL) e servidor web (Apache/Nginx) pré-instalados.

## Passo 1: Adicionar o Repositório Zabbix

Primeiro, precisamos adicionar o repositório oficial do Zabbix para instalar os pacotes.

```bash
# Baixar o pacote de configuração do repositório
wget [https://repo.zabbix.com/zabbix/6.0/debian/pool/main/z/zabbix-release/zabbix-release_6.0-4+debian11_all.deb](https://repo.zabbix.com/zabbix/6.0/debian/pool/main/z/zabbix-release/zabbix-release_6.0-4+debian11_all.deb)

# Instalar o pacote
sudo dpkg -i zabbix-release_6.0-4+debian11_all.deb

# Atualizar a lista de pacotes
sudo apt update