<template>
  <form @submit.prevent="submitForm">
    <div v-for="(experience, index) in form.experiences" :key="index">
      <div class="form-group">
        <label for="company">Firma:</label>
        <input
          class="form-field"
          v-model="experience.company"
          type="text"
          required
        />
      </div>
      <div class="form-group">
        <label for="position">Stanowisko:</label>
        <input
          class="form-field"
          v-model="experience.position"
          type="text"
          required
        />
      </div>
      <div class="form-group">
        <label for="from">Data od:</label>
        <input
          class="form-field"
          v-model="experience.from"
          type="date"
          required
          @change="validateDates(index)"
        />
      </div>
      <div class="form-group">
        <label for="to">Data do:</label>
        <input
          class="form-field"
          v-model="experience.to"
          type="date"
          @change="validateDates(index)"
        />

        <button
          class="button-delete"
          type="button"
          @click="removeExperience(index)"
        >
          Usuń
        </button>
      </div>
    </div>
    <button
      class="button-dalej button-bottom"
      type="button"
      @click="addExperience"
    >
      Dodaj Doświadczenie
    </button>
    <button class="button-dalej button-bottom" type="submit">Wyślij</button>
    <hr />
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        experiences: [{ company: "", position: "", from: "", to: "" }],
      },
    };
  },
  methods: {
    addExperience() {
      this.form.experiences.push({
        company: "",
        position: "",
        from: "",
        to: "",
      });
    },
    removeExperience(index) {
      this.form.experiences.splice(index, 1);
    },
    validateDates(index) {
      const experience = this.form.experiences[index];
      if (experience.from && experience.to && experience.from > experience.to) {
        alert('Data "od" nie może być późniejsza niż data "do".');
      }
    },
    submitForm() {
      this.$emit("submit", this.form);
    },
  },
};
</script>
