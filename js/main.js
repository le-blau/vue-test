const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function(event) {
      console.log('clicked');
      let todo = {
        item: this.newItem
      }
      this.todos.push(todo) // オブジェクトを配列に追加
    }
  }
})
app.mount('#app')