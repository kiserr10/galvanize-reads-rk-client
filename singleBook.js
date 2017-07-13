$(document).ready(function(){
	console.log('single view');
	let BASE_URL = (window.location.host == '127.0.0.1:8080') ? `http://localhost:3000` : `https://secure-temple-66793.herokuapp.com`
	let url = window.location.href.split('=');
	let id = url[url.length-1];
	console.log(id);

	$.getJSON(`${BASE_URL}/api/v1/books/${id}`).then(function(books){

		const source = $('#books-template').html();
		const template = Handlebars.compile(source);
		const html = template(books);
		$('.single-book').append(html);
	});
});
