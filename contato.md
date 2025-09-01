<style>
/* Adicione esta regra para remover a linha do cabeçalho APENAS nesta página */
.no-header-line .VPNavBar {
  border-bottom: 0;
}

/* Estilos para a nova seção de contato (o código que você forneceu) */
.contact-hero {
  text-align: center;
  padding: 48px 24px;
}
.contact-hero .name {
  color: var(--vp-c-brand-1);
  font-size: 24px;
  font-weight: 700;
}
.contact-hero .tagline {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin: 12px auto 32px;
  max-width: 500px;
}
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
.contact-button {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}
.contact-button.brand {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.contact-button.brand:hover {
  background-color: var(--vp-c-brand-2);
  color: #fff;
  border-color: var(--vp-c-brand-2);
}
.contact-button.alt {
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-1);
}
.contact-button,
.contact-button:hover,
.contact-button:focus {
  text-decoration: none !important;
  text-decoration-color: transparent;
}
</style>

<div class="contact-hero">
  <p class="name">Vamos Conversar</p>
  <p class="tagline">Estou sempre aberto a novas oportunidades e colaborações. Escolha o método de sua preferência abaixo ou me envie uma mensagem direta.</p>
  
  <div class="contact-actions">
    <a href="mailto:silvaemerson797@gmail.com" class="contact-button brand">Enviar um Email</a>
    <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119/" target="_blank" class="contact-button alt"> LinkedIn</a>
    <a href="https://wa.me/5585992933087" target="_blank" class="contact-button alt"> WhatsApp</a>
  </div>
</div>

---

## Envie uma Mensagem Direta

<style>
  .form-container { padding: 20px; border-radius: 8px; background-color: var(--vp-c-bg-soft); max-width: 688px; margin: 0 auto; }
  .form-group { margin-bottom: 16px; }
  .form-group label { display: block; margin-bottom: 6px; font-weight: 500; }
  .form-group input, .form-group textarea { width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background-color: var(--vp-c-bg); font-size: 1rem; color: var(--vp-c-text-1); }
  .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--vp-c-brand-1); }
  .submit-btn { width: 100%; padding: 10px 20px; border-radius: 8px; border: none; background-color: var(--vp-c-brand-1); color: white; font-weight: 600; cursor: pointer; transition: background-color 0.2s; }
  .submit-btn:hover { background-color: var(--vp-c-brand-2); }
</style>

<div class="form-container">
  <form
    action="https://formspree.io/f/xpwjlyjd"
    method="POST"
  >
    <div class="form-group">
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Seu Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="message">Mensagem:</label>
      <textarea id="message" name="message" rows="6" required></textarea>
    </div>
    <button type="submit" class="submit-btn">Enviar</button>
  </form>
</div>