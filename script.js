document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const base64Output = document.getElementById('base64-output');
    const encodeBtn = document.getElementById('encode-btn');
    const decodeBtn = document.getElementById('decode-btn');
    const copyTextBtn = document.getElementById('copy-text-btn');
    const copyBase64Btn = document.getElementById('copy-base64-btn');
    const clearBtn = document.getElementById('clear-btn');

    // ENCODE
    encodeBtn.addEventListener('click', () => {
        const plainText = textInput.value;
        if (plainText) {
            try {
                // Handle UTF-8 characters correctly
                const base64String = btoa(unescape(encodeURIComponent(plainText)));
                base64Output.value = base64String;
            } catch (error) {
                alert('An error occurred during encoding.');
                console.error(error);
            }
        }
    });

    // DECODE
    decodeBtn.addEventListener('click', () => {
        const base64String = base64Output.value;
        if (base64String) {
            try {
                // Handle UTF-8 characters correctly
                const plainText = decodeURIComponent(escape(atob(base64String)));
                textInput.value = plainText;
            } catch (error) {
                alert('Error: Invalid Base64 String.');
                console.error(error);
            }
        }
    });

    // CLEAR
    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        base64Output.value = '';
    });

    // COPY TEXT
    copyTextBtn.addEventListener('click', () => {
        if (textInput.value) {
            navigator.clipboard.writeText(textInput.value).then(() => {
                alert('Plain text copied to clipboard!');
            }, () => {
                alert('Failed to copy text.');
            });
        }
    });

    // COPY BASE64
    copyBase64Btn.addEventListener('click', () => {
        if (base64Output.value) {
            navigator.clipboard.writeText(base64Output.value).then(() => {
                alert('Base64 string copied to clipboard!');
            }, () => {
                alert('Failed to copy Base64 string.');
            });
        }
    });
});
