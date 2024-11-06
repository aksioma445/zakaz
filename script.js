// Ініціалізація Telegram WebApp
window.Telegram.WebApp.init();

// Завантаження інформації користувача з API Telegram
window.onload = function() {
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        document.getElementById("username").textContent = user.username;
        document.getElementById("user-id").textContent = `ID: ${user.id}`;
    } else {
        document.getElementById("username").textContent = "Unknown User";
        document.getElementById("user-id").textContent = "ID: N/A";
    }
}

// Функція для переходу в Telegram канал
function openChannel() {
    window.Telegram.WebApp.openLink('https://t.me/yourchannel');
}

// Функція для показу контактів підтримки
function showSupport() {
    alert('Для підтримки звертайтесь до: support@example.com');
}

// Функція для відкриття профілю (якщо потрібно)
function openProfile() {
    alert('Тут може бути доступ до налаштувань профілю.');
}
