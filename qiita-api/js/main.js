const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: '',
    message: ''
  }),
  watch: {
    // keywordが変わるごとに実行される
    keyword: function(newKeyword, oldKeyword) {
      this.message = '入力を待っています'
      this.debouncedGetAnswer()
    }
  },
  mounted: function() {
    // 1000ms入力を待ってから実行
    // https://lodash.com/docs#debounce
		this.debouncedGetAnswer = _.debounce(this.getResult, 1000)
  },
  methods: {
    getResult: function() {
      if(this.keyword === '') {
        console.log('入力が空です');
        this.items = null
        return
      }

      this.message = 'Loading...'
      const vm = this
      const params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
           .then(function(response){
             vm.items = response.data
           })
           .catch(function(error){
             vm.message = 'Error: ' + error
           })
           .finally(function(){
             vm.message = ''
           })
    }
  }
})
app.mount('#app')