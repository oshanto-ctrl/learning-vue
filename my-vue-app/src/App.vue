<script setup>
// Logic, state
// Components
import { ref } from "vue";

import ProductDisplay from "./components/ProductDisplay.vue";
const cart = ref([]);
const premium = ref(false); // is user a premium member: prop intro

const addToCart = (id) => {
  cart.value.push(id)
}

const handleCartRemove = (id) => {
  if(cart.value.length > 0){
    cart.value.pop(id);
  }else{
    alert("Your cart is epmty.")
  }
}

// const handleCartRemover = () => {
//   if (cart.value > 0) {
//     removeFromCart();
//   } else {
//     alert("Your cart is empty");
//   }
// };


</script>

<template>
  <!-- Skeleton -->
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart.length }})</div>
  <!-- ProductDisplay Template -->
  <ProductDisplay 
  :premium="premium" 
  @add-to-cart="addToCart"
  @remove-from-cart="handleCartRemove"
  ></ProductDisplay>
</template>
