<script setup>
  // Logic, state
  import { ref } from 'vue'
  import socksImage from './assets/images/socks_green.jpeg'

  const product = ref("Socks")
  const image = ref(socksImage)
  // const inStock = ref(false)
  const inventory = ref(12)
  const onSale = ref(true)

</script>

<template>
  <!-- Skeleton -->
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" alt="High Quality Socks">
      </div>
      
      <div class="product-info">
        <h1>{{ product }}</h1>

        <p v-show="onSale">On Winter Sale!!!</p>
        <!--
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        -->
        <!-- <p v-show="inStock">In Stock</p> -->
        <p v-if="inventory > 20">Available in stock.</p>
        <p v-else-if="inventory <= 20 && inventory > 0">Ending soon! collect yours.</p>
        <p v-else>Sorry, Out of Stock!</p>
      
      </div>
    </div>
  </div>
</template>
