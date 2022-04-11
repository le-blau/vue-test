const app = Vue.createApp({
  data: () => ({
    message: 'hello'
  }),
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    }
  }
})
app.mount('#app')