<template>
  <!-- toogle div -->
  <div>
    <button @click="toggleCollapse" id="done-list-toggle">
      {{ collapsed ? "Show Your Done List" : "Hide Done List" }}
    </button>

    <div 
      id="done-list"
      :aria-hidden="collapsed ? 'true' : 'false'"
      >
      <h2>Done List</h2>

      <ul>
        <li v-for="(todo, index) in doneTodos" :key="index">
          <span v-html="todo.content"></span>
          <!-- Undo and remove button -->
          <div class="done-btn-group">
            <button class="undo-btn" @click="undoTodo(todo)">Undo</button>
            <button class="remove-btn" @click="removeDone(index)">Remove</button>
          </div>
        </li>
      </ul>

      <h4 
        v-if="doneTodos.length === 0">
        Pick and Do Something Fills Up This List
      </h4>
    </div>
  </div>
</template>

<script setup>
// Import ref, watch, defineProps, defineEmits from vue
import { ref } from "vue";

const props = defineProps({
  doneTodos: Array,
});

const emit = defineEmits(["undo-todo", "remove-done"]);

// Originally list will be collapsed
const collapsed = ref(true);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};

const undoTodo = (todo) => {
  emit("undo-todo", todo);
};

const removeDone = (index) => {
  emit("remove-done", index);
};
</script>
