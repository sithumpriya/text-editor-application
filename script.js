const textarea = document.getElementById("textarea");

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

// Text alignment for the entire document
function left() {
    textarea.style.textAlign = "left";
}

function center() {
    textarea.style.textAlign = "center";
}

function right() {
    textarea.style.textAlign = "right";
}

function justify() {
    textarea.style.textAlign = "justify";
}

// Undo and Redo
function undo() {
    document.execCommand('undo', true, null);
}

function redo() {
    document.execCommand('redo', true, null);
}