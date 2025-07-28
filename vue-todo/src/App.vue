<!-- Template -->
<template>

  <div>
    <!-- Center: ToDo & Done List -->
    <main>

      <ClockWidget/>

      <h1>Yours' ToDo</h1>
      <form @submit.prevent="addTodo()">
        <label>New Todo</label>
        <input 
          type="text"
          name="newTodo"
          autocomplete="off"
          autocorrect="on"
          v-model="newTodo"
        >
        <button>Add ToDo</button>
      </form>
      <h2>ToDo Bucket</h2>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span :class="{done: todo.done }">{{ todo.content }}</span>
          <div>
            <button @click="markDone(index)">Done</button>
            <button @click="removeTodo(index)">Remove</button>
          </div>
        </li>
      </ul>
      <h4 v-if="todos.length === 0">Pick Something To Do...</h4>

      <DoneList
        :doneTodos="doneTodos"
        @undo-todo="undoTodo"
        @remove-done="removeDone"
      />
    </main>

  
  </div>
 
</template>


<!-- Script -->
<script setup>

import { ref } from 'vue'

import DoneList from './components/DoneList.vue';
import ClockWidget from './components/ClockWidget.vue';


const newTodo = ref('')
const defaultTodoData = [{
  done: false,
  content: "Start with Bismillah."
}]

// Load todos and doneTodos from local storage
const todos = ref(JSON.parse(localStorage.getItem('todos')) || defaultTodoData)
const doneTodos = ref(JSON.parse(localStorage.getItem('doneTodos')) || [])


// Function to insert new todos
const addTodo = () => {
  if(newTodo.value){
    todos.value.push({
      done:false,
      content: newTodo.value
    })
    newTodo.value = '' // Clear the input field
  }
  // invoke saveData() function here
  saveData()
}

// doneTodo() function: Marked done after completing tod
// Set the false value to true
const doneTodo = (todo) => {
  todo.done = !(todo.done)
  // invoke saveData() function here
  saveData()
}

// removeTodo() function: remove an existing todo from list
// use splice() and index then save data
const removeTodo = (index) =>{
  todos.value.splice(index, 1)
  saveData()
}

// saveData() function:
// stringify the todos.value
// then save in local storage

const saveData = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
  localStorage.setItem('doneTodos', JSON.stringify(doneTodos.value))
}

// Mark todo as done and to doneTodos
const markDone = (index) => {
  const todo = todos.value.splice(index, 1)[0]
  todo.done = true
  doneTodos.value.push(todo)
  // Save the Data
  saveData()
}

const undoTodo = (todo) =>{
  const index = doneTodos.value.indexOf(todo)
  if(index !== -1){
    doneTodos.value.splice(index, 1)
    todo.done = false
    todos.value.push(todo)
    saveData()
  }
}

const removeDone = (index) => {
  doneTodos.value.splice(index, 1)
  saveData()
}

</script>
