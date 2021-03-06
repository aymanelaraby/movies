const app = {
    init(formSelector){
      this.movies = []
      this.max = 0
      this.list = document.querySelector(selectors.listSelector)

      document
         .querySelector(selectors.formSelector)
         .addEventListener('submit', ev =>{
            ev.preventDefault()
            this.handleSubmit
         })
      
    },

    renderListItem(movie){
        const item = document.createElement('li')
        item.dataset.id = movie.id
        item.textContent = movie.name
        return item 
    },

    handleSubmit(ev) {
        
        const f = ev.target
        const movie = {
            rank: ++this.max,
            name: f.movieName.value,
        }

        this.movies.unshift(movie)

        const item = this.renderListItem(movie)
        this.list.insertbefore(item, this.list.firstElementChild)
        f.reset()
    },
}

app.init({
    formSelector :'#movieForm',
    listSelector : '#movieList',
})