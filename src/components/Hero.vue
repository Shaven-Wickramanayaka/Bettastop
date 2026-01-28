<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const images = [
  [
    "/src/assets/Home/carosal.jpeg",
    "/src/assets/Home/carosal.jpeg",
    "/src/assets/Home/carosal.jpeg",
  ],
  [
    "/src/assets/Home/carosal.jpeg",
    "/src/assets/Home/carosal.jpeg",
    "/src/assets/Home/carosal.jpeg",
  ],
  [
    "/src/assets/Home/carosal.jpeg",
    "/src/assets/Home/carosal.jpeg",
    "/src/assets/Home/carosal.jpeg",
  ],
];

const ribbonRefs = ref([]);

onMounted(() => {
  ribbonRefs.value.forEach((ribbon) => {
    const track = ribbon.querySelector(".ribbon-track");
    const trackHeight = track.scrollHeight / 2;
    gsap.to(track, {
      y: -trackHeight,
      duration: 10 + gsap.utils.random(1, 5) * 7,
      ease: "none",
      repeat: -1,
    });
  });
});
</script>

<template>
  <section class="flex gap-7 justify-center w-full overflow-hidden h-screen">
    <h1
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-difference text-white font-extrabold text-9xl"
    >
      BettaStop
    </h1>
    <div
      v-for="(imgs, index) in images"
      :key="index"
      class="ribbon"
      :ref="(el) => (ribbonRefs[index] = el)"
    >
      <div class="ribbon-track flex flex-col">
        <img
          v-for="(img, i) in [...imgs, ...imgs]"
          :key="i"
          :src="img"
          class="w-full object-cover h-90 py-3"
        />
      </div>
    </div>
  </section>
</template>
