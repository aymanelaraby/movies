const app = {
    init: function(formSelector){
      this.max = 0

      document
         .querySelector(formSelector)
         .addEventListener('submit', ev =>{
            ev.preventDefault()
            this.handleSubmit
         })
      
    },

    handleSubmit: function(ev) {
        
        const f = ev.target
        const movie = {
            rank: ++this.max,
            name: f.movieName.value,
        }
        f.reset()
    },
}

app.init(#movieForm)