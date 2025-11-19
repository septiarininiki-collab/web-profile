const navLinks = document.querySelectorAll('#main-nav a');
const tombolSapa = document.getElementById('tombol-sapa');

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' 
            });
        }
    });
});

if (tombolSapa) {
    tombolSapa.addEventListener('click', function() {
        alert('Halo! Selamat datang di web pribadi saya. Silakan jelajahi informasi di bawah ini.');
    });
}

const typedTextElement = document.getElementById('typed-text');
const textToType = "Niki seorang pengembang web yang bersemangat, selalu belajar hal baru dan suka membangun solusi kreatif.";
let charIndex = 0;

function typeWriter() {
    if (typedTextElement && charIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    } else if (document.querySelector('.blinking-cursor')) {
        document.querySelector('.blinking-cursor').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        formStatus.textContent = 'Mengirim pesan...';
        formStatus.className = '';

        setTimeout(() => {
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;

            if (nama && email && pesan) {
                formStatus.textContent = `Terima kasih, ${nama}! Pesan Anda telah terkirim. Saya akan segera merespon.`;
                formStatus.className = 'success';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Mohon lengkapi semua bidang formulir.';
                formStatus.className = 'error';
            }
        }, 1500); 
    });
}