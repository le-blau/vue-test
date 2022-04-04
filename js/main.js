const app = Vue.createApp({
  data: () => ({

  }),
  methods: {
    addItem: function(event) {
      console.log('clicked');
    }
  }
})
app.mount('#app')