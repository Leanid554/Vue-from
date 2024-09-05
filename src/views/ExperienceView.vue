<template>
  <div>
    <h2 class="h2-header">Doświadczenie Zawodowe</h2>
    <ExperienceForm @submit="submitForm" />
    <FormNavigation />
  </div>
</template>

<script>
import ExperienceForm from "../components/ExperienceForm.vue";
import FormNavigation from "../components/FormNavigation.vue";
import axios from "axios";

export default {
  components: {
    ExperienceForm,
    FormNavigation,
  },
  methods: {
    async submitForm(formData) {
      try {
        await axios.post("/api/submit", formData);
        alert("Formularz wysłany!");
      } catch (error) {
        console.error("Błąd podczas wysyłania formularza", error);
      }
    },
  },
};
</script>
