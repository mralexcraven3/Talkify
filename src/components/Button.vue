<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background: #00c1f9;
  color: white;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: 100px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button:active {
  box-shadow: 0.1em 0.1em 0.2em rgba(0, 193, 249, 1);
}
</style>