<template>
  <div class="login-container">
    <div class="login-card">
      <img src="@/assets/logo.png" alt="Logo Marketplace" class="login-logo" />
      <h1>Marketplace</h1>
      <p>Iniciar sesión</p>
      <form @submit.prevent="handleLogin">
        <label for="username">Usuario</label>
        <input type="text" id="username" placeholder="Ingrese su usuario" v-model="form.username" />
        <label for="password">Clave</label>
        <input type="password" id="password" placeholder="Ingrese su clave" v-model="form.password" />
        <button type="submit">Continuar</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
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
/* Aquí van los estilos CSS */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
}

.h1 {
  background-color: #1a1a1a;
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.login-logo {
  max-width: 100px;
  margin-bottom: 1rem;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 1rem;
}
</style>
