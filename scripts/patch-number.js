
const MANUAL = {
    version: "7.39e",
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".version").forEach(tag => {
        tag.textContent = MANUAL.version;
    });
});
