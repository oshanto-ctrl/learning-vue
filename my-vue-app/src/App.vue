<script setup>
  // Logic, state
  import { ref } from 'vue'
  import greenSocksImage from './assets/images/socks_green.jpeg'
  import blueSocksImage from './assets/images/socks_blue.jpeg'
  
  const product = ref("Socks")
  const image = ref(greenSocksImage)
  const inStock = ref(false)
  const inventory = ref(12)
  const onSale = ref(true)
  const details = ref(['50% Cotton', '30% wool', '20% polyester'])
  const variants = ref([
    { id: 2234, color: 'green', image: greenSocksImage},
    { id: 2235, color: 'blue', image: blueSocksImage},
  ])
  const sizes = ref([
    {id: 's', size: 'Small'},
    {id: 'm', size: 'Medium'},
    {id: 'l', size: 'Large'}
  ])

  const cart = ref(0)
  const addToCart = () => cart.value+=1
  const removeFromCart = () => cart.value-=1
  
  const handleCartRemover = () => {
    if(cart.value > 0){
      removeFromCart()
    }else{
      alert("Your cart is empty")
    }
  }
  
  
  // UpdateImage() on hover
  const updateImage = (variantImage) => {
    image.value = variantImage
  }
</script>

<template>
  <!-- Skeleton -->
   <div class="nav-bar"></div>
    <div class="cart">Cart({{ cart }})</div>
    <div class="product-display">
      <div class="product-container">
        <div class="product-image"
          :class="{'out-of-stock-img': !inStock}"
        >
          <img :src="image" alt="High Quality Socks">
        </div>
        
        <div class="product-info">
          <h1>{{ product }}</h1>
          <!-- Product Details -->
          <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <!-- Socks available color list -->
          <div 
            v-for="variant in variants" 
            :key="variant.id"
            @mouseover="updateImage(variant.image)"
            class="color-circle"
            :style="{ backgroundColor: variant.color}"
            >
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
            
          <!-- Add to cart button -->
          <!--
            v-on is directive
            click => is the event we listen for
            cart += 1 => is the expresion we trigger
            We can pass function inside the event.

            v-on shorthand is @click="addToCart"
          -->
          <button class="button"
            :class="{ disabledButton: !inStock}"
            v-on:click="addToCart"
            :disabled="!inStock"
          >Add to Cart</button>
          
          <!-- Remove from cart -->
           <button class="button"
           v-if="cart > 0"
           @click="removeFromCart"
           :style="{ color: red}"
           >Remove Item
           </button>
           <!-- 
           <button class="button"
           @click="handleCartRemover"
           >
           Remove from Cart
           </button>
          -->
        </div>
      </div>
    </div>
</template>
