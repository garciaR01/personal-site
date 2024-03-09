/* PORTFOLIO RYAN GARCIA */


console.log('Just a little test.');




function openModal(title, description, images) {
    var modal = document.getElementById('myModal');
    var modalTitle = document.getElementById('modal-title');
    var modalDescription = document.getElementById('modal-description');
    var modalImages = document.getElementById('modal-images');

    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalImages.innerHTML = '';

    images.forEach(function(imageUrl) {
        var img = document.createElement('img');
        img.src = imageUrl;
        img.style.maxWidth = '100%';
        img.style.marginBottom = '10px';
        modalImages.appendChild(img);
    });

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};