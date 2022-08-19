
 
const container = document.getElementById('movie-container')
const searchButton = document.getElementById("search-button")
const userInput = document.getElementById("site-search")
 
const newMoviesDataSet = movieDetails.map(movieItem => {
   const matchedMovie = movies.find(movie => movie.title === movieItem.title && movie.year === parseInt(movieItem.release_date))
   let newMoiveSet = { ...structuredClone(movieItem), ...structuredClone(matchedMovie) }
   return newMoiveSet
})
console.log(`Movie Details:`, movieDetails)
console.log(`Movies:`, movies)
console.log(`New Movie Data Set:`, newMoviesDataSet)
const renderMovies = function (array) {
   container.innerHTML = ""
   for (let index = 0; index < array.length; index += 1) {
       let movieBlock = document.createElement("div")
       movieBlock.id = 'movie-Block'
       movieBlock.innerHTML =
           `<img src = ${array[index].imageUrl} width = 225 >`
           + `<h3> ${array[index].title}</h3>`
           + `<p><strong>Cast:</strong><em> ${array[index].cast}</em></p>`
           + `<p><strong>Year:</strong><em> ${array[index].year}</em></p>`
       container.append(movieBlock)
 
 
 
       movieBlock.style.display = "flex"
       movieBlock.style.margin = "10px 5px"
       movieBlock.style.padding = "5px 40px "
       movieBlock.style.flexDirection = "column"
       movieBlock.style.alignItems = "center"
       movieBlock.style.flexBasis = "250px"
       movieBlock.style.border = "1px solid"
      
      
   }
};
renderMovies(newMoviesDataSet)
function helperFunction(array, target) {
   if (array === undefined) {
       return false
   }
   for (let item of array) {
       if (item.toLowerCase().includes(target.toLowerCase())) {
           return true
       }
   }
   return false
}
 
const searchMovies = event => {
   event.preventDefault()
 
   let search = userInput.value.toLowerCase()
   const searchFilter =
       newMoviesDataSet.filter(movie => movie.title.toLowerCase().indexOf(search) > -1 || helperFunction(movie.cast, search))
  
   renderMovies(searchFilter)
}
 
searchButton.addEventListener('click', searchMovies)