<template>
  <div class="flex h-screen">
    <!-- Div izquierda: Logo -->
    <div class="w-1/2 bg-yellow-700 flex items-center justify-center">
      <img src="@/assets/logo.png" alt="Logo Marketplace" class="max-w-xs h-auto rounded-lg shadow-lg" />
    </div>
    <!-- Div derecha: Formulario -->
    <div class="w-1/2 bg-white flex flex-col justify-center items-center p-8">
      <h1 class="text-2xl font-bold text-gray-800">Marketplace</h1>
      <p class="text-gray-600 mt-2">Iniciar sesión</p>
      <form @submit.prevent="handleLogin" class="mt-6 w-3/4">
        <div class="mb-4">
          <label for="username" class="block text-sm text-gray-700">Usuario</label>
          <input type="text" id="username" placeholder="Ingrese su usuario" v-model="form.username"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm text-gray-700">Clave</label>
          <input type="password" id="password" placeholder="Ingrese su clave" v-model="form.password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        </div>
        <button type="submit"
          class="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
          Continuar
        </button>
      </form>
      <p v-if="error" class="text-red-500 text-sm text-center mt-4">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const form = reactive({
  username: "",
  password: "",
});
const error = ref<string | null>(null);

const handleLogin = async () => {
  try {
    await authStore.login(form.username, form.password);
    error.value = null; // Limpia errores previos
    router.push("/dashboard"); // Redirige al componente Dashboard
  } catch {
    error.value = authStore.error;
  }
};
</script>

<style scoped>
/* Personalización adicional */
img {
  object-fit: cover;
  /* Ajusta la imagen para que se vea mejor dentro del contenedor */
}

/* Personalización de fondo y elementos */
.bg-yellow-700 {
  background-color: #D9892D;
}
</style>
