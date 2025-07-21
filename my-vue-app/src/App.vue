<script setup>
  // Logic, state
  import { ref } from 'vue'
  import socksImage from './assets/images/socks_green.jpeg'

  const product = ref("Socks")
  const image = ref(socksImage)
  // const inStock = ref(false)
  const inventory = ref(12)
  const onSale = ref(true)
  const details = ref(['50% Cotton', '30% wool', '20% polyester'])
  const variants = ref([
    { id: 2234, color: 'green'},
    { id: 2235, color: 'blue'},
  ])
  const sizes = ref([
    {id: 's', size: 'Small'},
    {id: 'm', size: 'Medium'},
    {id: 'l', size: 'Large'}
  ])

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
        <!-- Product Details -->
         <ul>
            <li v-for="detail in details">{{ detail }}</li>
         </ul>
         <!-- Socks available color list -->
         <div v-for="variant in variants" :key="variant.id">
            {{ variant.color }}
         </div>
         <!-- Socks availabel sizes -->
          <p>Found your pair in size of: </p>
          <div v-for="size in sizes" :key="sizes.id">
              <span>{{ size.size }}</span>
          </div>
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
