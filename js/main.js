const app = Vue.createApp({
  data: () => ({
    message: 'hello'
  }),
  methods: {
    clickHandler: function(event) {
      // 文字列を反転
      this.message = this.message.split('').reverse().join('')
    }
  }
})
app.mount('#app')