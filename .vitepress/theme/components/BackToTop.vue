<template>
  <button 
    v-if="isVisible" 
    @click="scrollToTop" 
    class="back-to-top"
    :class="{ visible: isVisible }"
    aria-label="Voltar ao topo"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 400
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 6px 25px rgba(52, 152, 219, 0.35);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(1.5rem) scale(0.9);
  z-index: 1000;
}

.back-to-top:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 10px 35px rgba(52, 152, 219, 0.45);
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 2rem;
    right: 1.5rem;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.1rem;
  }
}
</style>