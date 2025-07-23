<script setup>
defineProps({
  details: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul>
    <li v-for="(detail, index) in details" :key="index">
      {{ detail }}
    </li>
  </ul>
</template>
