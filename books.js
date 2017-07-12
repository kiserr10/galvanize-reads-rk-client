$(document).ready(function(){
	dropDown();
	// let BASE_URL = (window.location.hostname == 'localhost') ? `http://localhost:3000`: `https://secure-temple-66793.herokuapp.com/api/v1/books`
	$.getJSON('http://localhost:3000/api/v1/books').then(function(books){

		const source = $('#books-template').html();
		const template = Handlebars.compile(source)
		const html = template({books});
		$('#book-list-items').append(html);
	});
});

function dropDown(){
	$('select').material_select();
}
