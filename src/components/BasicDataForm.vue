<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="firstName">Imię:</label>
      <input
        class="form-field"
        v-model="form.firstName"
        type="text"
        id="firstName"
        required
      />
    </div>
    <div class="form-group">
      <label for="lastName">Nazwisko:</label>
      <input
        class="form-field"
        v-model="form.lastName"
        type="text"
        id="lastName"
        required
      />
    </div>
    <div class="form-group">
      <label for="dob">Data urodzenia:</label>
      <input
        class="form-field"
        v-model="form.dob"
        type="date"
        id="dob"
        :max="today"
        required
      />
    </div>
    <button class="button-dalej" type="submit">Dalej</button>
    <hr />
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        dob: "",
      },
      today: new Date().toISOString().split("T")[0],
    };
  },
  methods: {
    submitForm() {
      // walidacja
      this.$emit("next", this.form);
    },
  },
};
</script>
