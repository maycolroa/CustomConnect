import { defineStore } from "pinia";
import axios from "axios";

interface User {
  id: number;
  username: string;
}

interface AxiosErrorResponse {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null, // Información del usuario logueado
    error: null as string | null, // Mensaje de error
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await axios.post<User>("http://localhost:8000/auth/login", {
          username,
          password,
        });
        this.user = response.data; // Guardamos la información del usuario en el estado
        this.error = null; // Reseteamos el error
      } catch (error: unknown) {
        // Verificar si el error tiene la estructura esperada
        const axiosError = error as AxiosErrorResponse;
        if (axiosError.response?.data?.detail) {
          this.error = axiosError.response.data.detail;
        } else {
          this.error = "Error desconocido al iniciar sesión";
        }
      }
    },
    logout() {
      this.user = null; // Limpiamos la información del usuario al cerrar sesión
      this.error = null; // Limpiamos cualquier mensaje de error
    },
  },
});
