<script setup>
  // Logic, state
  import { ref } from 'vue'

  const product = ref("Socks")
  const p_description = ref("Made With High Quality Cotton For Everyday Use.")
</script>

<template>
  <!-- Skeleton -->
  <div class="product-display">
    <div class="product-container">
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p>{{ p_description }}</p>
      </div>
    </div>
  </div>
</template>
