const app = Vue.createApp({
  data: () => ({
    message: 'hello <span style="color: red;">vue</span>'
  })
})
app.mount('#app')