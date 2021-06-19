<template>
  <div class="fullscreen bg-pink-4 text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Ups. Aquí sí que no hay nada :(
      </div>

      <img
        alt="Nada"
        src="~assets/Error.jpg"
        style="width: 400px; height: 400px; margin-right: auto; margin-left: auto; margin-top: 10px"
      />
      <br>
      <q-btn
        class="q-mt-xl"
        color="dark"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
