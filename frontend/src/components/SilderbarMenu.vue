<template>
  <div class="flex h-screen bg-gray-200">
    <div @mouseover="expandSidebar" @mouseleave="collapseSidebar"
      :class="['transition-all duration-300 h-full flex flex-col', { 'w-64': isExpanded, 'w-20': !isExpanded }]"
      class="bg-[#D9892D] text-white">
      <!-- Espacio adicional en la parte superior para el primer icono -->
      <div class="mt-10 flex-grow">
        <ul class="flex flex-col space-y-4">
          <li v-for="item in menuItems" :key="item.name" class="flex items-center px-6 hover:bg-[#C67A26]">
            <router-link :to="item.path" class="flex items-center w-full">
              <font-awesome-icon :icon="item.icon" class="w-6 h-6" />
              <span v-if="isExpanded" class="ml-4">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <router-link to="/configuraciones" class="flex items-center h-12 px-6 hover:bg-[#C67A26]">
          <font-awesome-icon icon="cog" class="w-6 h-6" />
          <span v-if="isExpanded" class="ml-4">Configuraciones</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SidebarMenu',
  setup() {
    const isExpanded = ref(false);
    const menuItems = [
      { name: 'Home', icon: 'home', path: '/' },
      { name: 'Empresas', icon: 'search', path: '/buscar' },
      { name: 'Buscar Clientes', icon: 'balance-scale', path: '/matriz-legal' },
    ];

    const expandSidebar = () => {
      isExpanded.value = true;
    };

    const collapseSidebar = () => {
      isExpanded.value = false;
    };

    return {
      isExpanded,
      menuItems,
      expandSidebar,
      collapseSidebar,
    };
  },
});
</script>

<style scoped>
/* Tamaño del ícono */
.w-6.h-6 {
  font-size: 1.5rem;
}

/* Espacio superior adicional */
.mt-10 {
  margin-top: 5.5rem;
}

/* Asegura que el sidebar ocupe toda la altura de la pantalla */
.bg-gray-200 {
  height: 100vh;
  overflow: hidden;
}
</style>
