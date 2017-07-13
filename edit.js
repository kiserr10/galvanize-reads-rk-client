$(document).ready(function(){

});
let BASE_URL = (window.location.host == '127.0.0.1:8080') ? `http://localhost:3000` : `https://secure-temple-66793.herokuapp.com`

$(document).on('click', '#edit-button', function(){
	let bookId = $(this).data('book');
	window.location = '/books/editBook'
});

// $(document).on('click', '#edit-button', function(){
// 	let bookId = $(this).data('book');
// 	console.log(bookId);
// 	return   $.ajax({
// 		url: `${BASE_URL}/api/v1/books/${bookId}`,
// 		type: 'PUT',
// 	}).then(function(result){
// 		console.log(result);
// 		window.location = '/books';
// 	});
// });
