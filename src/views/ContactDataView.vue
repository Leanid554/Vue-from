<template>
  <div>
    <h2 class="h2-header">Dane Kontaktowe</h2>
    <ContactDataForm @next="goToNextStep" />
    <FormNavigation />
  </div>
</template>

<script>
import ContactDataForm from "../components/ContactDataForm.vue";
import FormNavigation from "../components/FormNavigation.vue";

export default {
  components: {
    ContactDataForm,
    FormNavigation,
  },
  methods: {
    goToNextStep() {
      this.$router.push("/experience");
    },
  },
};
</script>
