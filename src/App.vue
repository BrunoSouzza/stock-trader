<template>
  <v-app>
    <Header />
    <v-context>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-context>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style></style>
