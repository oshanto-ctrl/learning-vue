<!-- Template -->
<template>

<!-- Heading -->
<h1>Yours' ToDo</h1>

<!-- Input Form for todos -->
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

<!-- ToDo List -->
<h2>ToDo Bucket</h2>
<ul>
  <li
    v-for="(todo, index) in todos"
    :key="index"
  >

  <span
    :class="{done: todo.done }"
    @click="doneTodo(todo)"
  >
  {{ todo.content }}
  </span>
  <button @click="removeTodo(index)">Remove</button>

  </li>
</ul>

<!-- Indicate Empty List -->
 <h4
 v-if="todos.length === 0"
 >Pick Something To Do...</h4>


</template>


<!-- Script -->
<script setup>

import { ref } from 'vue'

const newTodo = ref('')
const defaultTodoData = [{
  done: false,
  content: "Start with Bismillah."
}]

const todosData = JSON.parse(localStorage.getItem('todos')) || defaultTodoData;

// Set up todos list
const todos = ref(todosData)

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
  SaveData()
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
  const storageData = JSON.stringify(todos.value);
  localStorage.setItem('todos', storageData);
}

</script>
