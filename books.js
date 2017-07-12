$(document).ready(function(){
    $.getJSON("http://localhost:3000/api/v1/books").then(function(books){
			console.log(books);

		  const source = $('#books-template').html()
		  const template = Handlebars.compile(source)
		  const html = template({
		    books
		  })
		  $('#book-list-items').append(html)

	})
})
