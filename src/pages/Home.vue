<template>
  <q-page class="bg-grey-14" padding>
    <div
      class="col-12 text-center bg-blue-grey-1 shadow-7 rounded-borders"
      rounded
      filled
    >
      <h1 class="text-h4 text-blue-grey-9 q-pa-lg">Bienvenido/a</h1>
    </div>
    <basics></basics>
  </q-page>
</template>

<script>
import basics from "../components/basics";
export default {
  components: {
    basics,
  },
};
</script>

<style></style>
