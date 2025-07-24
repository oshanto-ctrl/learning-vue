<!--Src/Components/ProductDispay.vue-->
<!-- Script -->
<script setup>
// Logic, state
import { ref, computed } from "vue";

import greenSocksImage from "@/assets/images/socks_green.jpeg";
import blueSocksImage from "@/assets/images/socks_blue.jpeg";
import ProductDetails from "./ProductDetails.vue";
import ReviewForm from "./ReviewForm.vue";
import ReviewList from "./ReviewList.vue";


// prop intro:
// does user has premium membership
const props = defineProps({
  premium: {
    type: Boolean,
    required: true,
  },
});

// emit
const emit = defineEmits(
  ['add-to-cart', 'remove-from-cart']
)



const product = ref("Socks");
const brand = ref("Vue Mastery");

const p_title = computed(() => {
  return brand.value + " " + product.value;
});

// const image = ref(greenSocksImage)

// const inStock = ref(true)

// const inventory = ref(12)
const onSale = ref(true);

const details = ["50% Cotton", "30% wool", "20% polyester"];

const selectedVariant = ref(0);
const variants = ref([
  { id: 2234, color: "green", image: greenSocksImage, quantity: 52 },
  { id: 2235, color: "blue", image: blueSocksImage, quantity: 0 },
]);
const sizes = ref([
  { id: "s", size: "Small" },
  { id: "m", size: "Medium" },
  { id: "l", size: "Large" },
]);

// cart will be global
//   const cart = ref(0)

const addToCart = () => {
  emit('add-to-cart', variants.value[selectedVariant.value].id)
}
const removeFromCart = () => {
  emit('remove-from-cart', variants.value[selectedVariant.value].id)
}

// UpdateImage() on hover
const updateVariant = (index) => {
  selectedVariant.value = index;
  // console.log(index)
};

const image = computed(() => {
  return variants.value[selectedVariant.value].image;
});

const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0;
});

const saleMessage = computed(() => {
  return `${p_title.value} is on sale!`;
});



// shipping (User preimum or regular)
const shipping = computed(() => {
  if (props.premium) {
    return "Free";
  } else {
    return 2.99;
  }
});



// Add reviews
const reviews = ref([])
const addReview = (review) =>{
  reviews.value.push(review)
}



</script>

<!-- Templtaes -->
<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image" :class="{ 'out-of-stock-img': !inStock }">
        <img :src="image" alt="High Quality Socks" />
      </div>

      <div class="product-info">
        <h1>{{ p_title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <!-- Shipping-->
        <p>Shipping: {{ shipping }}</p>

        <!-- On sale Message -->
        <p v-if="onSale">{{ saleMessage }}</p>

        <!-- Product Details -->
        <!-- using components and props -->
        <ProductDetails :details="details"></ProductDetails>

        <!-- Socks available color list -->
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        ></div>

        <!-- Socks availabel sizes 
            <p>Found your pair in size of: </p>
            <div v-for="size in sizes" :key="sizes.id">
                <span>{{ size.size }}</span>
            </div>
            -->

        <!--
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          -->
        <!-- <p v-show="inStock">In Stock</p> -->

        <!-- Add to cart button -->
        <!--
            v-on is directive
            click => is the event we listen for
            cart += 1 => is the expresion we trigger
            We can pass function inside the event.

            v-on shorthand is @click="addToCart"
          -->
        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart"
        >
          Add to Cart
        </button>

        <!-- Remove from cart 
        <button
          class="button"
          v-if="cart > 0"
          @click="removeFromCart"
          :style="{ color: red }"
        >
          Remove Item
        </button>
        -->

           <button 
           class="button"
           @click="removeFromCart"
           >
           Remove Item
           </button>
          
      </div>
    </div>
    <!-- Review List -->
     <ReviewList v-if="reviews.length > 0" :reviews="reviews"></ReviewList>
    <!-- Review Form -->
     <ReviewForm @review-submitted="addReview"></ReviewForm>

  </div>
</template>
