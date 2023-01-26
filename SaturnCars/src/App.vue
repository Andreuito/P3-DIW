<script setup>
import { RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Header />
  <!--<RouterLink to="/">Home</RouterLink>-->
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
  <Footer />
</template>

