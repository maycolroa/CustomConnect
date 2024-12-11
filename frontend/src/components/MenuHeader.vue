<template>
  <header class="flex items-center justify-between h-14 p-6 bg-white sm:h-16 md:px-6 lg:px-8">
    <!-- Imagen a la izquierda -->
    <div>
      <img src="@/assets/logoecci.png" alt="Logo ECCI" class="h-8" />
    </div>

    <!-- Imagen a la derecha -->
    <div>
      <img src="@/assets/logoblanco.png" alt="Logo Blanco" class="h-8" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderMenu',
});
</script>

<style scoped>
/* Estilos específicos del header */
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>
