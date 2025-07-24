<script setup>

defineProps({
    reviews: {
        type: Array,
        required: true,
    }
})


</script>


<template>
    <div class="review-container">
        <h3>Reviews: </h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                <span>{{ review.name }} gave {{ review.rating }} stars.</span>
                    <span v-if="review.recommend === 'Yes'"> (Recommended this product ✅)</span>
    <span v-else> (Did not recommend ❌)</span>
                <br>
                <span>{{ review.content }}</span>
            </li>
        </ul>
    </div>
</template>