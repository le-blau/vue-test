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
        isDone: false     // なぜこの記述だけでT/Fが切り替わるのか？
      }
      this.todos.push(todo) // オブジェクトを配列に追加
      this.newItem = ''
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1)
    }
  }
})
app.mount('#app')