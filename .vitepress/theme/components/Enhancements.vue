<script setup>
// 1. Definindo os props que nosso componente pode receber.
// Usamos `defineProps` para declarar quais "parâmetros" o componente aceita.
// Adicionamos valores padrão (`default`) para que ele funcione mesmo se não passarmos nada.
defineProps({
  title: {
    type: String,
    default: 'Vamos Trabalhar Juntos?'
  },
  text: {
    type: String,
    default: 'Estou sempre aberto a novas oportunidades e colaborações. Entre em contato para conversarmos.'
  },
  buttonText: {
    type: String,
    default: 'Fale Comigo'
  },
  buttonLink: {
    type: String,
    default: '/contato' // Link padrão para a página de contato
  }
})
</script>

<template>
  <div class="call-to-action">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <a :href="buttonLink" class="cta-button">{{ buttonText }}</a>
  </div>
</template>

<style scoped>
/* 3. Estilos melhorados para o nosso Call to Action. */
.call-to-action {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand-3);
  padding: 24px;
  margin: 32px 0;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.call-to-action:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--vp-c-brand-2);
}

.call-to-action h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-top: 0;
  margin-bottom: 12px;
  border: none; /* Remove a linha padrão do h3 do VitePress */
  padding: 0;
}

.call-to-action p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin-top: 0;
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  background-image: var(--gradient-premium);
  color: white;
  padding: 10px 24px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}
</style>