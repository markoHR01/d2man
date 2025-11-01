
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.ability-notes-toggle button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const noteGroupId = button.getAttribute('data-target');
            const noteGroup = document.getElementById(noteGroupId);

            noteGroup.classList.toggle('visible');
        });
    });
});
