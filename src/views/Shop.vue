<template>
  <Navbar></Navbar>
  <Filters></Filters>
  <ProductGrid></ProductGrid>
</template>
<script>
import Filters from "../components/Filters.vue";
import Navbar from "../components/Navbar.vue";
import ProductGrid from "../components/ProductGrid.vue";

export default {
  name: "Shop",
  components: { Navbar, Filters, ProductGrid },
};
</script>
