<template>
  <q-page>
    <div class="row">
      <div class="col-12 text-center bg-grey-1 shadow-7 rounded-borders">
        <h5 class="text-blue-gray-9">Es una página sencilla, sin muchas pretensiones</h5>
      </div>
      <div class="text-center col-6 q-mt-lg" style="width: 100%">
        <q-card class="my-card bg-pink-3 text-white">
          <q-card-section>
            <div class="text-h5">{{ texto }}</div>
          </q-card-section>

          <q-card-section>
            <q-input
              rounded
              filled
              class="text-subtitle"
              @keyup.enter="alertTxt"
              v-model="texto2"
              style="width: 70%; margin-right: auto; margin-left: auto;"
            >
              <template v-slot:prepend>
              </template>
            </q-input>
            <q-btn @click="BorrarTxt" round class="q-btn--fab q-mt-md bg-dark">
              <q-icon name="file_upload" />
            </q-btn>
            <div>
              <h4 class="text-subtitle q-mt-md-md">
                {{ texto2 }}
              </h4>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn id="1" flat>Botón 1</q-btn>
            <q-btn id="2" flat>Botón 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "basics",
  data() {
    return {
      llave: "",
      texto: "Escribe lo que quieras subir a la nube",
      texto2: "",
    };
  },
  methods: {
    BorrarTxt() {
      this.texto2 = "";
    },
    /*
    PressKey(e) {
      console.log(e);

      if (e.keyCode == 27) {
        this.BorrarTxt();
      } else if (e.keyCode == 13) {
        this.alertTxt();
      }
    },
    */
    alertTxt() {
      alert("Datos Obtenidos: " + this.texto2);
    },
  },
};
</script>

<style></style>
