const buttonCounter = {
  template: '<div><span>カウント：</span><button @click="countUp">{{ count }}</button></div>',
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function(event) {
      this.count++
    }
  }
}

const app = Vue.createApp({
  data: () => ({

  }),
  components: {
    'button-counter': buttonCounter
  }
})
app.mount('#app')