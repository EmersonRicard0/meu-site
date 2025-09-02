---
title: Projeto | Monitoramento com Grafana e Zabbix
description: Estudo de caso sobre a implementação de um sistema de monitoramento integrado com Zabbix e Grafana para garantir a alta disponibilidade de redes e ativos.
---

# Projeto: Monitoramento de Rede e Ativos com Grafana e Zabbix

<div class="about-me" style="margin-top: 24px;">
<p>
Este projeto detalha a implementação de uma solução de monitoramento centralizado, utilizando a robustez do Zabbix para a coleta de dados e o poder de visualização do Grafana para a criação de dashboards intuitivos e informativos. O objetivo foi fornecer uma visão completa e em tempo real da saúde da infraestrutura de rede.
</p>
</div>

---

## O Desafio

A empresa necessitava de uma forma proativa de identificar problemas de performance, disponibilidade e segurança em seus servidores e equipamentos de rede. A falta de um sistema unificado resultava num tempo de resposta a incidentes (MTTR) elevado e na dificuldade de analisar tendências históricas.

## A Solução Implementada

A minha abordagem focou-se na integração das duas ferramentas para tirar o melhor de cada uma:

1.  **Coleta de Dados com Zabbix:** Instalei e configurei o Zabbix Server para coletar métricas de dezenas de ativos, incluindo servidores Linux, switches e links de internet. Criei templates personalizados para monitorar serviços específicos.
2.  **Criação de Alertas:** Configurei triggers e ações no Zabbix para enviar alertas automáticos (via email e Telegram) para a equipa técnica sempre que um limite crítico era atingido (ex: alta utilização de CPU, link offline).
3.  **Visualização com Grafana:** Integrei o Grafana com o Zabbix como fonte de dados. Desenvolvi dashboards personalizados que cruzavam informações de diferentes fontes, proporcionando uma visão consolidada e de fácil compreensão para a gestão.
4.  **Documentação:** Documentei todo o processo de instalação, configuração e as métricas monitorizadas para garantir a manutenção e a escalabilidade da solução.

## Tecnologias Utilizadas

* **Monitoramento:** Zabbix 6.0 LTS, Zabbix Agent
* **Visualização:** Grafana
* **Base de Dados:** MySQL
* **Sistema Operativo:** Debian 11
* **Protocolos:** SNMP, ICMP

## Resultados Alcançados

::: tip Resultados Quantificáveis
* **Redução de 40%** no tempo médio de resposta a incidentes (MTTR).
* **Aumento da visibilidade** da saúde da rede, permitindo a identificação de tendências e o planeamento de capacidade.
* **Criação de uma cultura proativa** de monitoramento, antecipando falhas antes que impactassem os utilizadores finais.
:::

<br>

[← Voltar para a página inicial](/)