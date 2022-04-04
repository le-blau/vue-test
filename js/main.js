const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function(event) {
      // console.log('clicked');
      if(this.newItem === '') return
      let todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo) // オブジェクトを配列に追加
      this.newItem = ''
    }
  }
})
app.mount('#app')