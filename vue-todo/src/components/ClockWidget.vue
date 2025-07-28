<!-- filepath: d:\learning_vue\vue-todo\src\components\ClockWidget.vue -->
<template>
  <div class="clock-widget">
    <div class="greeting">{{ greeting }}</div>
    <div class="time">{{ time }}</div>
    <div class="date">{{ date }}</div>
    <div class="details">
      <span>{{ dayOfWeek }}</span> | 
      <span>{{ timezone }}</span> | 
      <span>{{ ampm }}</span> | 
      <span>{{ hourFormat }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('')
const date = ref('')
const dayOfWeek = ref('')
const timezone = ref('')
const ampm = ref('')
const hourFormat = ref('')
const greeting = ref('')

function updateClock() {
  const now = new Date()
  const hours = now.getHours()
  const mins = now.getMinutes().toString().padStart(2, '0')
  const secs = now.getSeconds().toString().padStart(2, '0')
  time.value = `${hours.toString().padStart(2, '0')}:${mins}:${secs}`
  date.value = now.toLocaleDateString()
  dayOfWeek.value = now.toLocaleDateString(undefined, { weekday: 'long' })
  timezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone
  ampm.value = hours >= 12 ? 'PM' : 'AM'
  hourFormat.value = hours < 10 ? `0${hours}` : hours
  greeting.value = hours < 12 ? 'Good Morning' : (hours < 18 ? 'Good Afternoon' : 'Good Evening')
}

let interval
onMounted(() => {
  updateClock()
  interval = setInterval(updateClock, 1000)
})
onUnmounted(() => clearInterval(interval))
</script>