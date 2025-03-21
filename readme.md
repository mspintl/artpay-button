# ArtPay Button

Questo script consente di integrare un pulsante per i pagamenti con ArtPay su qualsiasi sito web.  
Il pulsante viene generato automaticamente all'interno di un `<div>` con l'attributo `data-artpay-button`.

## Installazione

Per utilizzare il pulsante, è necessario includere il seguente script nel proprio sito web, preferibilmente prima della chiusura del tag `<body>`:

```html
<script src="https://cdn.jsdelivr.net/gh/mspintl/artpay-button/dist/pay-button.js"></script>
```

## Utilizzo
Inserire un ```<div> ``` con l'attributo ```data-artpay-button``` nel punto in cui si desidera visualizzare il pulsante:

```html
<div data-artpay-button></div>
```
Lo script genererà automaticamente il pulsante all'interno di questo elemento e applicherà lo stile predefinito.

## Aggiunta di un'azione al click
Il pulsante non ha un'azione predefinita al clic per garantire flessibilità.
È possibile selezionarlo e aggiungere manualmente un event listener in due modi:

1. Utilizzando l'attributo data-artpay-button
2. Selezionandolo con la classe .artpay-button

### Esempio di implementazione

```html

<script>
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // Selezione tramite il contenitore data-artpay-button
        const buttonContainer = document.querySelector("[data-artpay-button]");
        if (buttonContainer) {
            const button = buttonContainer.querySelector(".artpay-button");
            if (button) {
                button.addEventListener("click", () => {
                    fetch("call_php.asp")
                        .then(response => response.text())
                        .then(data => console.log("Risultato:", data))
                        .catch(error => console.error("Errore:", error));
                });
            }
        }

        // Selezione diretta tramite la classe del pulsante
        const directButton = document.querySelector(".artpay-button");
        if (directButton) {
            directButton.addEventListener("click", () => {
                fetch("call_php.asp")
                    .then(response => response.text())
                    .then(data => console.log("Risultato:", data))
                    .catch(error => console.error("Errore:", error));
            });
        }
    }, 100);
});
</script>

```

### Esempio completo

```html

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ArtPay Button Demo</title>
</head>
<body>

    <h2>Pagamento con ArtPay</h2>
    <div data-artpay-button></div>

    <script src="https://cdn.jsdelivr.net/gh/mspintl/artpay-button/dist/pay-button.js"></script>

    <script>
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            const button = document.querySelector(".artpay-button");
            if (button) {
                button.addEventListener("click", () => {
                    fetch("call_php.asp")
                        .then(response => response.text())
                        .then(data => console.log("Risultato:", data))
                        .catch(error => console.error("Errore:", error));
                });
            }
        }, 100);
    });
    </script>

</body>
</html>

```
