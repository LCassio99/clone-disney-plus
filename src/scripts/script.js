document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const heroHeight = heroSection.clientHeight
    
    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY

        if (currentPosition < heroHeight) {
            hideHeaderElements()
        } else {
            showHeaderElements()
        }
    })

    // Atraction section tabs
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
            hideTabs()
            tab.classList.add('shows__list--is-active')
            activeButtonRemove()
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // faq section, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer)
    }
})

function openCloseAnswer(element) {
    const openClass = 'faq__questions__item--is-open'
    const fatherElement = element.target.parentNode

    fatherElement.classList.toggle(openClass)
}

function activeButtonRemove() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function hideHeaderElements() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function showHeaderElements() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}