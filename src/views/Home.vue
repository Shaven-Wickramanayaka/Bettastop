<script>
import About from "../components/About.vue";
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    About,
  },
};
</script>

<template>
  <Navbar></Navbar>
  <Hero></Hero>
  <About></About>
</template>
