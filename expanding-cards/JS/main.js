const getCards = document.querySelectorAll('.card');

function removeActiveClasses() {
    getCards.forEach(card => {
        card.classList.remove('active')
    })
}

getCards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})