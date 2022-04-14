const panels = document.querySelectorAll('.panel');

Array.prototype.slice.call(panels).map(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

const removeActiveClasses = () => {
    Array.prototype.slice.call(panels).map (panel => {
        panel.classList.remove('active')
    })
}