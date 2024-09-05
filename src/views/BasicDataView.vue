<template>
  <div>
    <h2 class="h2-header">Dane Podstawowe</h2>
    <BasicDataForm @next="goToNextStep" />
    <FormNavigation />
  </div>
</template>

<script>
import BasicDataForm from "../components/BasicDataForm.vue";
import FormNavigation from "../components/FormNavigation.vue";

export default {
  components: {
    BasicDataForm,
    FormNavigation,
  },
  methods: {
    goToNextStep() {
      this.$router.push("/contact-data");
    },
  },
};
</script>
