const noUrlLink = document.querySelectorAll('.no-url-link');

noUrlLink.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        alert('The URL will be updated soon!')
    })
})