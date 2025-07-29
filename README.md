# This repository hold the Excercise/Projects while learning vuejs 3 with composition API.


* [Vue-Todo-Composition API](#-vue-todo-application-project)

# vue-todo-application-project
>A simple ToDo application using Vue 3 Composition API.
As a practice follwoing the fine codebase of
[burakgur's Todo App with Vue 3 Composition API](https://github.com/BurakGur/vue3-composition-api-todo-app)
>
>Learning vuejs 3 from [vue-mastery-youtube-video](https://youtu.be/s9URD3PefTk?si=m0F6FiL-yF4scsnR)


### Demo


### Customization Added
* Animated 'Add ToDo' Button  
* Added 'Done' button and logic
* Done List
    - A task marked as done appears in 'Done List' from 'ToDo Bucket'
    - You can 'Undo' the 'Done' todo that will append to 'ToDo Bucket'
    - 'Done List' has 'Remove' button to remove todo from list as the 'ToDo Bucket'
    - 'Done List' doesn't appear is hidden and appears only when you click to toggle it.
    - Each 'Done' task is marked with greenish and <del>todo</del> that means it's completed.
* Clock Widget
    - A component for clock widget that tells us the follwings:
        - Customize message upon the current time [Good Morning, Good Afternoon, Good Evening]
        - Time in 24-Hour format
        - DD/MM/YYYY Format Date
        - Current weekday
        - Current timezone
        - The hour

### Download the project folder
> https://github.com/oshanto-ctrl/learning-vue/tree/master/vue-todo

### Project Initialization
```sh
npm init vue folder-name
```

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```
