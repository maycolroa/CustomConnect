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
        <h1 class="text-2xl font-bold mb-4">Bienvenido al Dashboard</h1>
        <p class="mb-8">Aquí puedes gestionar tus datos y ver la lista de productos.</p>

        <!-- Indicador de Carga -->
        <div v-if="loading" class="text-center text-gray-500">Cargando productos...</div>

        <!-- Mensaje de Error -->
        <div v-if="error" class="text-center text-red-500">{{ error }}</div>

        <!-- Grid de Productos -->
        <div v-if="!loading && !error && products.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="product in products" :key="product.id"
            class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
            <!-- Imagen del Producto -->
            <img :src="product.image_url" alt="Producto" class="w-full h-40 object-cover rounded-md mb-4" />
            <!-- Información del Producto -->
            <h2 class="text-lg font-bold">{{ product.name }}</h2>
            <p class="text-gray-600">Tamaño: {{ product.size }}</p>
            <p class="text-gray-800 font-semibold">Precio: ${{ product.price }}</p>
            <p class="text-gray-600">Valor: {{ product.value }}</p>
          </div>
        </div>

        <!-- Mensaje si no hay productos -->
        <div v-else-if="!loading && products.length === 0" class="text-center text-gray-500">
          No hay productos para mostrar.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import MenuHeader from "../components/MenuHeader.vue";
import SilderbarManu from "../components/SilderbarMenu.vue";
import { useProductStore } from "../stores/productStore";

// Usar la store de productos
const productStore = useProductStore();
const { products, loading, error, fetchProducts } = productStore;

// Computed para garantizar la reactividad
const reactiveProducts = computed(() => products);

// Llama a la acción para cargar productos al montar el componente
onMounted(() => {
  console.log("Fetching products...");
  fetchProducts().then(() => {
    console.log("Productos cargados:", reactiveProducts.value);
  });
});
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
