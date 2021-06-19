<template>
  <q-page class="bg-grey-14" padding>
    <div
      class="col-12 text-center bg-blue-grey-1 shadow-7 rounded-borders"
      rounded
      filled
    >
      <h3 class="text-h4 text-blue-grey-9 q-pa-lg">Formulario de Contacto</h3>
    </div>
    <div class="q-pa-md bg-pink-2 text-dark rounded-borders shadow-7" style="max-width: 100%; height: 600px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="nombre"
          label="Su Nombre *"
          hint="Nombre y Apellido"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) ||
              'Por favor, escriba su Nombre Completo',
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="edad"
          label="Su Edad *"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Por favor, escriba su edad',
            (val) =>
              (val > 0 && val < 100) || 'Por favor, escriba su edad real',
          ]"
        />

        <q-toggle v-model="aceptar" label="Acepto los términos y condiciones" />

        <div>
          <q-btn label="Submit" type="submit" color="dark" />

          <!-- Alerta pop up: INICIO -->
          <q-dialog v-model="dialog">
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="new_releases" color="red" text-color="white" />
                <span class="q-mt-md col-12">Estimado(a): {{ nombre }}</span>
                <span class="q-mt-md col-12"
                  >Debes aceptar los términos y condiciones</span
                >
              </q-card-section>

              <!-- Notice v-close-popup -->
              <q-card-actions align="right">
                <q-btn flat label="Aceptar" color="dark" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
          <!-- Alerta pop up: FIN -->

          <q-btn
            label="Reset"
            type="reset"
            color="dark"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      edad: "",
      aceptar: false,
      dialog: false,
      nodialog: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.aceptar !== true) {
        this.dialog = true;
        this.nodialog = false;
      } else {
        this.dialog = false;
        this.nodialog = true;
        alert("Su mensaje fue enviado");
      }
    },
    onReset() {
      this.nombre = "";
      this.edad = "";
      this.aceptar = false;
      this.dialog = false;
      this.nodialog = false;
    },
  },
};
</script>

<style></style>
