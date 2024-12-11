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
        <p class="mb-8">Aquí puedes gestionar las empresas y ver sus productos.</p>

        <!-- Indicador de Carga -->
        <div v-if="loading" class="text-center text-gray-500">Cargando empresas...</div>

        <!-- Mensaje de Error -->
        <div v-if="error" class="text-center text-red-500">{{ error }}</div>

        <!-- Lista de Empresas -->
        <div v-if="!loading && !error" class="space-y-6">
          <div v-for="company in companies" :key="company.id" class="bg-white shadow-md rounded-lg p-4">
            <!-- Información de la Empresa -->
            <h2 class="text-xl font-bold text-gray-800">{{ company.name }}</h2>
            <p class="text-gray-600 mb-4">{{ company.description }}</p>

            <!-- Productos de la Empresa -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="product in company.products" :key="product.id"
                class="bg-gray-50 shadow-sm rounded-md p-3 hover:shadow-md">
                <img :src="product.image_url" alt="Producto" class="w-full h-32 object-cover rounded-md mb-2" />
                <h3 class="text-md font-semibold">{{ product.name }}</h3>
                <p class="text-sm text-gray-600">Tamaño: {{ product.size }}</p>
                <p class="text-sm text-gray-800 font-bold">Precio: ${{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mensaje si no hay empresas -->
        <div v-else-if="!loading && companies.length === 0" class="text-center text-gray-500">
          No hay empresas para mostrar.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuHeader from "../components/MenuHeader.vue";
import SilderbarManu from "../components/SilderbarMenu.vue";
import { onMounted } from "vue";
import { useCompanyStore } from "../stores/companyStore";

// Usar la store de empresas
const companyStore = useCompanyStore();
const { companies, loading, error, fetchCompanies } = companyStore;

// Llama al servicio al montar el componente
onMounted(() => {
  fetchCompanies();
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
