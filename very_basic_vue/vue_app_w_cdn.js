const { createApp } = Vue;

createApp({

    data() {
        return {
            message: "Hello World, this is vue from CDN!",
        }
    },

    methods: {
        changeMsg(){
            this.message = "Your Click Has Been Noted!";
        }
    }

}).mount('#app');