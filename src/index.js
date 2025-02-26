import "../src/style.css";

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
