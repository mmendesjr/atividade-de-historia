function firstSelectImage(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#imagem1__box').setAttribute('src', event.target.result )

	};
	reader.readAsDataURL(selectedFile);
}

function secondSelectImage(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#imagem2__box').setAttribute('src', event.target.result )

	};
	reader.readAsDataURL(selectedFile);
}

function thirdSelectImage(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#imagem3__box').setAttribute('src', event.target.result )

	};
	reader.readAsDataURL(selectedFile);
}

function fourthSelectImage(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#imagem4__box').setAttribute('src', event.target.result )

	};
	reader.readAsDataURL(selectedFile);
}


function fifthSelectImage(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#imagem5__box').setAttribute('src', event.target.result )

	};
	reader.readAsDataURL(selectedFile);
}

function functionPrint(){
	window.print()

}