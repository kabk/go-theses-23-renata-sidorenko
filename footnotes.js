function getFootnoteContent(index) {
    const id = "fn:" + index;
    const fn = document.getElementById(id);
    return fn.innerHTML.trim();
};

function footnotePopup(showIndex, showCloseBtn) {
    const popupWrapper = document.querySelector("#popup-wrapper");


    if (showIndex === undefined) {
        showIndex = false;
    }

    if (showCloseBtn === undefined) {
        showCloseBtn = false;
    }


    const popupContent = popupWrapper.appendChild(document.createElement("div"));
    popupContent.id = "popup-content";

    let popupIndex = null;
    if (showIndex) {
        popupIndex = popupWrapper.insertBefore(document.createElement("div"), popupContent);
        popupIndex.id = "popup-index";
    }

    // let popupCloseButton = null;
    // if (showCloseBtn) {
    //     popupCloseButton = popupWrapper.appendChild(document.createElement("div"));
    //     popupCloseButton.innerHTML = "[x]";
    //     popupCloseButton.id = "popup-close";
    // }

    const fnRefs = document.querySelectorAll("sup[id^='fnref:']");
    fnRefs.forEach(function(fnRef) {
        fnRef.addEventListener("click", handler("refs", fnRef));
    });

    window.addEventListener("scroll", handler("close"));

    if (showCloseBtn) {
        popupCloseButton.addEventListener("click", handler("close"));
    }

    function handler(type, node) {
        return function(event) {
            if (type === "close") {
                popupWrapper.style.display = "none";
            }

            if (type === "refs") {
                event.preventDefault();

                const index = node.id.substring(6);

                if (showIndex) {
                    popupIndex.innerHTML = index + ".";
                }

                popupContent.innerHTML = getFootnoteContent(index);
                popupWrapper.style.display = "flex";
            }
        };
    };
};

footnotePopup(true, true);
