const { createApp } = Vue;

createApp({

    data() {
        return {
            message: "Hello World, this is vue from CDN!",
        }
    }
    
}).mount('#app');