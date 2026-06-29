const selected = document.querySelector('.selected-option');
const dropdownList = document.querySelector('.dropdown-list');
const items = document.querySelectorAll('.dropdown-item');

// open/close on click
selected.addEventListener('click', () => {
    dropdownList.classList.toggle('open');
});

// select an item
items.forEach(item => {
    item.addEventListener('click', () => {
        selected.textContent = item.textContent;
        selected.style.color = 'white';
        dropdownList.classList.remove('open');
    });
});

// close when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
        dropdownList.classList.remove('open');
    }
});

// document.getElementById("hamburger").addEventListener('click', () => {
//     document.getElementById('mobile-menu').classList.add('active');
// });

// document.getElementById('close-button').addEventListener('click', () => {
//     document.getElementById('mobole-menu').classList.remove('active');
// })

// document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
//     link.addEventListener('click', () => {
//         document.getElementById('mobile-menu').classList.remove('active');
//     })
// })
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('active');
});

document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
});

document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});

document.querySelector('nav button').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});