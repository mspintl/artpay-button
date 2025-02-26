const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';
document.head.appendChild(link);


(function () {
    function createArtPayButton() {
        const targetSelector = "[data-artpay-button]";
        const targetElement = document.querySelector(targetSelector);

        if (!targetElement) {
            console.warn("ArtPay: Nessun elemento target trovato per il bottone.");
            return;
        }

        const button = document.createElement("button");
        button.className = "artpay-button";
        button.innerHTML = `Paga con ArtPay`;

        button.style.backgroundColor = '#241C3A'
        button.style.color = "white";
        button.style.border = "none";
        button.style.padding = "8px 24px";
        button.style.textAlign = "center";
        button.style.fontSize = "18px";
        button.style.cursor = "pointer";
        button.style.width = "100%";
        button.style.borderRadius = "16px";
        button.style.fontFamily = "Inter";
        button.style.transition = "background-color 0.3s ease";

        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = '#30264E';
        })

        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '#241C3A';
        })

        button.addEventListener("click", function () {
            const event = new CustomEvent("artpay:click", {
                detail: { message: "Bottone ArtPay cliccato", timestamp: Date.now() },
            });
            document.dispatchEvent(event);
        });

        targetElement.appendChild(button);
    }

    document.addEventListener("DOMContentLoaded", createArtPayButton);
})();
