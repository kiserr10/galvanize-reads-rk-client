$(document).ready(function(){
	dropDown();
	submitBookForm();
	let BASE_URL = (window.location.hostname == 'localhost') ? `http://localhost:3000`: `https://secure-temple-66793.herokuapp.com`

	const BOOKS_ENDPOINT = BASE_URL + `/api/v1/books`;

	console.log(BOOKS_ENDPOINT);


//Add Book
function submitBookForm() {
	$('.create-book').on('click', function(){
		event.preventDefault();
		let title = $('#book-title').val();
		let genre = $('#book-genre').val();
		let coverImg = $('#book-cover-url').val();
		let description = $('#book-description').val();
		let bookObject = {
			'title': title,
			'genre': genre,
			'cover': coverImg,
			'description': description,
		};
		console.log(bookObject);

		$.post(BOOKS_ENDPOINT, bookObject, function(result){
			let book_id = result[0].id;
			window.location.href = `./books.html?id=${book_id}`;
		});
	});
}



function dropDown(){
	$('select').material_select();
}

});
