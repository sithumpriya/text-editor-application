function bold() {
    document.execCommand('bold', true, null);
}

function underline() {
    document.execCommand('underline', true, null);
}

function italic() {
    document.execCommand('italic', true, null);
}

function color(value) {
    document.execCommand('foreColor', true, value);
}