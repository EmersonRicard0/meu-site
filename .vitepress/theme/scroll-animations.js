export function initScrollAnimations() {
  // Opção 1: Selecionar os cards de features na página inicial
  const animatedElements = document.querySelectorAll('.VPHome .VPFeatures .item');

  // Se não encontrar os elementos, não faz nada
  if (animatedElements.length === 0) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Se o elemento estiver visível no ecrã
      if (entry.isIntersecting) {
        // Adiciona a classe 'is-visible' para ativar a animação
        entry.target.classList.add('is-visible');
        // Opcional: para de observar o elemento depois que a animação acontece uma vez
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // A animação começa quando 10% do elemento está visível
  });

  // Para cada elemento que queremos animar, adicionamos a classe inicial e começamos a observá-lo
  animatedElements.forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}