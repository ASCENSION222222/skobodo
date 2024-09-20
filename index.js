// Функція для відкриття модального вікна
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Додаємо обробник події на клік для іконки кошика
document.getElementById("cartIcon").addEventListener("click", openModal);
