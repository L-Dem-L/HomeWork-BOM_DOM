const editableDiv = document.getElementById("editable-div");

window.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "e" || e.key === "E")) {
        e.preventDefault();
        const textarea = document.createElement("textarea");
        textarea.value = editableDiv.innerText;
        editableDiv.replaceWith(textarea);
        textarea.focus();
    }

    if (e.ctrlKey && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        const div = document.createElement("div");
        div.innerText = e.target.value;
        e.target.replaceWith(div);
    }
});
