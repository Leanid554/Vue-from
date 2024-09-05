<template>
  <div class="pt">
    <button
      class="button-dalej button-bottom"
      @click="$router.push('/basic-data')"
    >
      Dane podstawowe
    </button>
    <button class="button-dalej" @click="$router.push('/contact-data')">
      Dane kontaktowe
    </button>
    <button
      class="button-dalej margin-top"
      @click="$router.push('/experience')"
    >
      Doświadczenie
    </button>
  </div>
</template>
