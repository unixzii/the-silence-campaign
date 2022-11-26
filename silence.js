(function () {
    const replacement = '\u{25a0}';
    function replaceText(text) {
        const originalLength = text.length;
        return replacement.repeat(originalLength);
    }

    function silence(elementOrNode) {
        if (elementOrNode instanceof Text) {
            if (elementOrNode.textContent.trim()) {
                elementOrNode.textContent = replaceText(elementOrNode.textContent);
            }
            return;
        }

        if (elementOrNode instanceof HTMLInputElement) {
            elementOrNode.value = replaceText(elementOrNode.value);
        }

        if (elementOrNode instanceof HTMLAnchorElement) {
            elementOrNode.title = replaceText(elementOrNode.title);
        }

        for (const child of elementOrNode.childNodes) {
            silence(child);
        }
    }

    silence(document.body);
})()