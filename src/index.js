const loadFont = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';
    document.head.appendChild(link);
}


const createArtPayButton = () => {
    const targetSelector = "[data-artpay-button]";
    const targetElement = document.querySelector(targetSelector);

    if (!targetElement) {
        console.warn("ArtPay: Nessun elemento target trovato per il bottone.");
        return;
    }

    Object.assign(targetElement.style, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        maxWidth: '375px',
        position: 'relative'
    });

    const button = document.createElement("button");
    button.className = "artpay-button";
    button.innerHTML = getArtPayLogo();

    Object.assign(button.style, {
        backgroundColor: '#241C3A',
        color: "white",
        border: "none",
        padding: "8px 24px",
        fontSize: "18px",
        fontWeight: "500",
        cursor: "pointer",
        width: "100%",
        borderRadius: "45px",
        fontFamily: "Inter",
        transition: "background-color 0.3s ease",
        maxWidth: "375px",
        minWidth: "150px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
    });

    button.addEventListener('mouseover', () => button.style.backgroundColor = '#30264E');
    button.addEventListener('mouseout', () => button.style.backgroundColor = '#241C3A');

    targetElement.appendChild(button);

    const iconTooltip = document.createElement("span");

    Object.assign(iconTooltip.style, {
        fontFamily: "Inter",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: "white",
        backgroundColor: "#3E4EEC",
        maxWidth: "46px",
        maxHeight: "46px",
        minWidth: "46px",
        minHeight: "46px",
        fontSize: "18px",
        borderRadius: "100%",
        cursor: 'pointer'
    });

    iconTooltip.innerHTML = "?";

    targetElement.appendChild(iconTooltip);

    const tooltip = document.createElement("p");

    Object.assign(tooltip.style, {
        maxWidth: "150px",
        color: "white",
        fontSize: "14px",
        fontFamily: "Inter",
        padding: '12px',
        backgroundColor: "#3E4EEC",
        position: "absolute",
        borderRadius: "8px",
        right: "0",
        top: "0",
        transform: "translateY(-150%)",
        opacity: "0",
        transition: "opacity 0.3s ease, transform 0.3s ease"
    });

    tooltip.innerHTML = 'Lorem ipsum dolor sit amet, consectetur.';
    targetElement.appendChild(tooltip);

    const arrow = document.createElement("span");

    Object.assign(arrow.style, {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        right: "0",
        transform: "translateX(-100%)",
        width: "0",
        height: "0",
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderTop: "8px solid #3E4EEC",
    });

    tooltip.appendChild(arrow);


    iconTooltip.addEventListener("mouseenter", () => { tooltip.style.opacity = "1";});
    iconTooltip.addEventListener("mouseleave", () => {tooltip.style.opacity = "0";});

    iconTooltip.addEventListener("touchstart", () => { tooltip.style.opacity = "1";});
    iconTooltip.addEventListener("touchend", () => { tooltip.style.opacity = "0";});
}



function getArtPayLogo() {
    return `<svg width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="77.1611" y="29.6987" width="77.1611" height="29.6987" rx="8" transform="rotate(-180 77.1611 29.6987)" fill="#3F55E9"/>
                            <g>
                                <path d="M7.4939 17.6394C7.4939 15.6657 8.61444 14.4998 10.7255 14.2074L14.9909 13.6023V12.9299C14.9909 11.9653 14.3624 11.3829 12.9926 11.3829C11.7127 11.3829 10.9043 11.8766 10.7927 12.8628H7.82876C8.00865 10.3955 10.0514 9.00543 13.0598 9.00543C16.0681 9.00543 18.0209 10.5525 18.0209 12.9754V20.8699H15.1253L15.0126 19.0977C14.3169 20.3535 12.9698 21.1611 11.263 21.1611C8.92871 21.1601 7.4939 19.6801 7.4939 17.6394ZM14.9909 16.6304V15.7112L11.8482 16.1378C10.8826 16.272 10.3885 16.6758 10.3885 17.4835C10.3885 18.2911 11.0614 18.8064 12.2069 18.8064C13.7338 18.8064 14.9909 17.9089 14.9909 16.6314V16.6304Z" fill="white"/>
                                <path d="M19.3367 20.8691V9.29582H22.3678L22.435 11.539C22.9963 10.1489 24.3444 9.09445 26.0513 9.09445V11.8898C23.963 11.8898 22.4805 13.2442 22.4805 15.2849V20.8691H19.3378H19.3367Z" fill="white"/>
                                <path d="M46.7616 17.6394C46.7616 15.6657 48.0187 14.4998 50.1297 14.2074L54.3952 13.6023V12.9299C54.3952 11.9653 53.7666 11.3829 52.3968 11.3829C51.117 11.3829 50.3085 11.8766 50.1969 12.8628H47.233C47.4129 10.3955 49.4557 9.00543 52.464 9.00543C55.4723 9.00543 57.4252 10.5525 57.4252 12.9754V20.8699H54.5295L54.4168 19.0977C53.7211 20.3535 52.3741 21.1611 50.6672 21.1611C48.3319 21.1611 46.7605 19.6812 46.7605 17.6394H46.7616ZM54.3952 16.6304V15.7112L51.2524 16.1378C50.2869 16.272 49.7938 16.6758 49.7938 17.4835C49.7938 18.2911 50.4667 18.8064 51.6122 18.8064C53.1391 18.8064 54.3962 17.9089 54.3962 16.6314L54.3952 16.6304Z" fill="white"/>
                                <path d="M30.2191 17.2585V11.8898H33.2275V9.29689H30.2191V6.93893H27.0764V17.527C27.0764 19.9045 28.4007 21.1603 31.1847 21.1603C31.8577 21.1603 32.7333 21.0477 33.273 20.8691V18.4689C32.9587 18.5587 32.4418 18.693 31.8815 18.693C30.6689 18.693 30.2202 18.2664 30.2202 17.2574L30.2191 17.2585Z" fill="white"/>
                                <path d="M37.5048 24.6818V19.2319C38.1334 20.308 39.3905 21.1611 41.0301 21.1611C44.1512 21.1611 46.0585 18.6495 46.0585 15.2175V14.9263C46.0585 11.5171 44.1956 9.00543 41.0973 9.00543C39.2117 9.00543 37.9091 10.0372 37.3705 11.0689L37.2805 9.29666H34.3394V24.6829H37.5048V24.6818ZM37.3921 14.9252C37.3921 12.6604 38.3577 11.4034 40.1306 11.4034C41.9036 11.4034 42.8691 12.6593 42.8691 14.9252V15.2165C42.8691 17.4813 41.9263 18.7371 40.1306 18.7371C38.335 18.7371 37.3921 17.4813 37.3921 15.2165V14.9252Z" fill="white"/>
                                <path d="M60.4389 24.7027L61.8683 20.7597L57.4685 9.29907H60.7911L63.5296 17.3733L66.1793 9.29907H69.3892L64.5191 22.2354C63.9642 23.7099 62.5554 24.6908 60.9775 24.6994L60.4389 24.7027Z" fill="white"/>
                            </g>
                        <defs>
                        <clipPath id="clip0_4_37">
                            <rect width="61.8954" height="17.7637" fill="white" transform="translate(7.4939 6.93893)"/>
                        </clipPath>
                        </defs>
                    </svg> `;
}


(function () {
    loadFont();
    createArtPayButton();
})();
