const app = Vue.createApp({
  data: () => ({
    newItem: ''
  }),
  methods: {
    addItem: function(event) {
      console.log('clicked');
    }
  }
})
app.mount('#app')