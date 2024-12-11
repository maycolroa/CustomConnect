import { defineStore } from "pinia";
import axios from "axios";

// Interfaz para representar un producto
interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  value: number;
  image_url: string;
  company_id: number;
}

// Interfaz para manejar errores de Axios
interface AxiosErrorResponse {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

// Definir la store de productos
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[], // Lista de productos
    error: null as string | null, // Mensaje de error
    loading: false, // Estado de carga
  }),
  actions: {
    // Acción para obtener todos los productos
    async fetchProducts() {
      this.loading = true; // Activamos el estado de carga
      this.error = null; // Reiniciamos el error
      try {
        const response = await axios.get<Product[]>("http://localhost:8000/products/");
        console.log("Respuesta del servicio:", response.data); // Log de la respuesta del servicio
        this.products = response.data; // Guardamos los productos en el estado
      } catch (error: unknown) {
        // Manejar errores
        const axiosError = error as AxiosErrorResponse;
        if (axiosError.response?.data?.detail) {
          this.error = axiosError.response.data.detail;
        } else {
          this.error = "Error desconocido al cargar los productos";
        }
        console.error("Error al cargar los productos:", error); // Log del error
      } finally {
        this.loading = false; // Desactivamos el estado de carga
      }
    },
    // Acción para limpiar el estado
    clearState() {
      this.products = [];
      this.error = null;
      this.loading = false;
    },
  },
});
