import { defineStore } from "pinia";
import axios from "axios";

// Interfaces para Empresas y Productos
interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  value: number;
  image_url: string;
  company_id: number;
}

interface Company {
  id: number;
  name: string;
  description: string;
  products: Product[];
}

// Definir la store de empresas
export const useCompanyStore = defineStore("company", {
  state: () => ({
    companies: [] as Company[], // Lista de empresas
    loading: false, // Estado de carga
    error: null as string | null, // Mensaje de error
  }),
  actions: {
    // Acción para obtener todas las empresas
    async fetchCompanies() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<Company[]>("http://localhost:8000/companies/");
        this.companies = response.data;
        console.log("Empresas cargadas:", this.companies);
      } catch (error) {
        this.error = "Error al cargar las empresas.";
        console.error("Error al cargar empresas:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
