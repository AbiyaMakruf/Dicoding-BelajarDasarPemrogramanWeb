const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        alert('Anda akan diarahkan ke ' + this.textContent);
        const terimaKasih = document.querySelector('.terima-kasih');
        terimaKasih.style.display = 'block';
        terimaKasih.textContent = 'Terima kasih sudah mengunjungi website ini. Semoga harimu menyenangkan!';
    });
});