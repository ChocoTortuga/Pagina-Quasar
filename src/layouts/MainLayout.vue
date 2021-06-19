<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-pink-11 text-white" height-hint="98">
      <q-toolbar>

        <q-toolbar-title class="text-h4 text-center"> Una página de Quasar </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      class="bg-dark"
    >
      <q-list class="q-pa-md text-white">

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/"
            title="Home"
            color="pink-11"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="home" />
          <div>Home</div>
          </q-btn>
        </div>

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/tabla"
            color="pink-11"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="dashboard" />
          <div>Tabla</div>
          </q-btn>
        </div>

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/form"
            class="q-btn"
            color="pink-11"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="call" />
          <div>Contacto</div>
          </q-btn>
        </div>

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/nada"
            class="q-btn"
            color="pink-11"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="outlet" />
          <div>Aquí no hay nada</div>
          </q-btn>
        </div>
      </q-list>
    </q-drawer>

    <q-footer class="bg-dark text-white text-center">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle1">
          <q-avatar>
          </q-avatar>
          Copyright 2021
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Vanessa Godoy",
    caption: "Animadora digital",
    icon: "extension",
    link: "https://vimeo.com/504597696",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style></style>
