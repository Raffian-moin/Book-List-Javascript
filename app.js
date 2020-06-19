function Book(title,author,isbn){
	this.title=title;
	this.author=author;
	this.isbn=isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book){
	const list = document.getElementById('book-list');

	const row = document.createElement('tr');

	row.innerHTML=`
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href="#" class="delete"></a></td>
	`

	list.appendChild(row);
}

UI.prototype.clearInput = function(){
	document.getElementById('title').value = '';
	document.getElementById('author').value ='';
	document.getElementById('isbn').value = '';
}

UI.prototype.showAlert=function(message,className){
	const div=document.createElement('div');

	div.className=`alert ${className}`;

	div.appendChild(document.createTextNode(message));

	const container=document.querySelector('.container');

	const form=document.getElementById('id-form');

	container.insertBefore(div,form);

	setTimeout(function(){
		document.querySelector('.alert').remove()
	},1000)
}


document.getElementById('id-form').addEventListener('submit',function(e){
	const title=document.getElementById('title').value;
	const author=document.getElementById('author').value;
	const isbn=document.getElementById('isbn').value;

	const ui = new UI();


	if( title === ''|| author === ''|| isbn === ''){
		ui.showAlert('please insert the fileds','error');
	}else{
		const book = new Book(title,author,isbn);

	// const ui = new UI();

		ui.addBookToList(book)

		ui.showAlert('book added!','success');

		ui.clearInput();
	}

	

	e.preventDefault();
})