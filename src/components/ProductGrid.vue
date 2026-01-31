<script setup>
import { ref, onMounted } from "vue";
const source = ref([]);
onMounted(() => {
  const inventory = [
    {
      item: "Betta",
      description: "jecicnr jrnchcbrurn cjnicnrirjncri",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description: "jecicnr jrnchcbrurn cjnicnrirjncri",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description: "jecicnr jrnchcbrurn cjnicnrirjncri",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description: "jecicnr jrnchcbrurn cjnicnrirjncri",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description: "jecicnr jrnchcbrurn cjnicnrirjncri",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description: "jecicnr jrnchcbrurn cjnicnrirjncri",
      link: "https://placehold.co/400",
    },
  ];
  source.value = inventory;
});
</script>
<template>
  <section class="grid h-fit grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <div v-for="(item, index) in source" :key="index" class="grid-item">
      <img v-bind:src="item.link" alt="" class="h-auto" />
      <h3>{{ item.item }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </section>
</template>
