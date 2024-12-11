<template>
  <div class="h-screen flex flex-col">
    <!-- Header Menu -->
    <MenuHeader />

    <!-- Contenedor Principal -->
    <div class="flex flex-grow overflow-hidden">
      <!-- Sidebar Menu -->
      <SilderbarManu />

      <!-- Contenido Principal -->
      <div class="flex-grow p-8 bg-gray-100 overflow-auto">
        <!-- Título del Dashboard -->
        <h1 class="text-2xl font-bold mb-4">Empresas y sus Productos</h1>
        <p class="mb-8">este es buscar clientes.</p>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuHeader from "../components/MenuHeader.vue";
import SilderbarManu from "../components/SilderbarMenu.vue";

</script>

<style scoped>
/* Estilo para garantizar que el contenido sea scrollable si es necesario */
.overflow-auto {
  overflow-y: auto;
}

/* Asegúrate de que el contenido esté bien organizado */
.bg-gray-100 {
  display: flex;
  flex-direction: column;
}
</style>
