<script setup>
import { reactive } from 'vue';


const emit = defineEmits(
    ['review-submitted']
)

/*
    reactive is like ref() but
    it allows us to group related
    data into a single variable. 
*/
const review = reactive({
    name: '',
    content: '',
    rating: null,
    recommend: null,
})

// onSubmit() form method
const onSubmit = () => {
    if(review.name === '' || review.content === '' || review.rating === null || review.recommend === null){
        alert("Fill out every box for your kind review!")
        return
    }

    const productReview = {
        name: review.name,
        content: review.content,
        rating: review.rating,
        recommend: review.recommend,
    }
    // use emit() from senting the form data up
    // at the product display page
    // review-submitted = event
    // productReview = payload
    emit('review-submitted', productReview)

    // Clear the form fields
    review.name = ''
    review.content = ''
    review.rating = null
    review.recommend = null
}

</script>

<!-- Template -->
<template>
    <!-- Review Form -->


    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name: </label>
        <input type="text" 
        id="name"
        v-model="review.name"
        >

        <label for="review">Review:</label>
        <textarea 
        id="review"
        v-model="review.content"
        ></textarea>

        <label for="rating">Rating</label>
        <select 
        id="rating"
        v-model.number="review.rating"
        
        >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
    <br>

    <!-- ✅ Recommendation Question -->
    <label>Would you recommend this product?</label><br />
    <input
      type="radio"
      id="rec_yes"
      value="Yes"
      v-model="review.recommend"
    />
    <label for="rec_yes">Yes</label>

    <input
      type="radio"
      id="rec_no"
      value="No"
      v-model="review.recommend"
    />
    <label for="rec_no">No</label>

    <br>

        <input type="submit" value="Submit" class="button">
    </form>

    


</template>