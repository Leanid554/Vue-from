<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="phone">Telefon:</label>
      <input
        class="form-field"
        v-model="form.phone"
        type="text"
        id="phone"
        required
        pattern="^\+?\d{9,15}$"
      />
    </div>
    <div class="form-group">
      <label for="email">E-mail:</label>
      <input
        class="form-field"
        v-model="form.email"
        type="email"
        id="email"
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
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("next", this.form);
    },
  },
};
</script>
