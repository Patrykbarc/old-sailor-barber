const hamburger = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.mobile_nav__closeBtn')
const mobileNav = document.querySelector('.mobile_nav')
const homeBtn = document.querySelector('.home')
const body = document.querySelector('body')
const hero = document.querySelector('.hero')

const navItems = mobileNav.querySelectorAll('li')

const navToggler = () => {
	mobileNav.classList.toggle('hidden')
	body.classList.toggle('scroll')
}

mobileNav.addEventListener('click', () => {
	navItems.forEach(() => {
		mobileNav.classList.add('hidden')
		body.classList.remove('scroll')
	})
})

const hideHome = () => {
	if (window.scrollY >= 500 && window.innerWidth <= 992) {
		homeBtn.style.display = 'block'
	} else {
		homeBtn.style.display = 'none'
	}
}

hamburger.addEventListener('click', navToggler)
closeBtn.addEventListener('click', navToggler)
window.addEventListener('DOMContentLoaded', hideHome)
