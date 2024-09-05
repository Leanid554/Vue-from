<template>
  <div>
    <h1>Wielokrokowy formularz</h1>
    <component
      :is="currentStepComponent"
      @next="nextStep"
      @prev="prevStep"
      @submit="submitForm"
    />
    <div>
      <button v-if="currentStep > 1" @click="prevStep">Wstecz</button>
      <button v-if="currentStep < steps.length" @click="nextStep">Dalej</button>
      <button v-if="currentStep === steps.length" @click="submitForm">
        Wyślij
      </button>
    </div>
  </div>
</template>

<script>
import BasicDataForm from "./BasicDataForm.vue";
import ContactDataForm from "./ContactDataForm.vue";
import ExperienceForm from "./ExperienceForm.vue";

export default {
  data() {
    return {
      currentStep: 1,
      formData: {
        firstName: "",
        lastName: "",
        dob: "",
        phone: "",
        email: "",
        experiences: [{ company: "", position: "", from: "", to: "" }],
      },
      steps: [
        { component: BasicDataForm, name: "Dane Podstawowe" },
        { component: ContactDataForm, name: "Dane Kontaktowe" },
        { component: ExperienceForm, name: "Doświadczenie" },
      ],
    };
  },
  computed: {
    currentStepComponent() {
      return this.steps[this.currentStep - 1].component;
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    submitForm() {
      console.log("Zebrane dane:", this.formData);
      alert("Formularz został wysłany!");
    },
  },
};
</script>
