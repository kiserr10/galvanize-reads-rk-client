$(document).ready(function(){
	dropDown();
	let BASE_URL = (window.location.host == '127.0.0.1:8080') ? `http://localhost:3000` : `https://secure-temple-66793.herokuapp.com`
	$.getJSON(`${BASE_URL}/api/v1/books`).then(function(books){

		const source = $('#books-template').html();
		const template = Handlebars.compile(source);
		const html = template({books});
		$('#book-list-items').append(html);

		$(document).on('click', '#delete-button', function(){
			let bookId = $(this).data('book');
			console.log(bookId);
			return   $.ajax({
				url: `${BASE_URL}/api/v1/books/${bookId}`,
				type: 'DELETE',
			}).then(function(result){
				console.log(result);
				window.location = '/books';
			});
		});

		$('main').on('click', '#edit-button', function(event){
			event.preventDefault();
			let bookId = $(this).data('book');
			console.log(bookId);
			window.location = `/editBook.html?id=${bookId}`;
		});




	});
});


function dropDown(){
	$('select').material_select();
}
