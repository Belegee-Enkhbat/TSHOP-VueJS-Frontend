<template>
  <section id="app">
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
  </section>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import TheFooter from './components/nav/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>