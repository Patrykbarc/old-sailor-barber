const hamburger = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.mobile_nav__closeBtn')
const mobileNav = document.querySelector('.mobile_nav')

const navItems = mobileNav.querySelectorAll('li')

const navToggler = () => {
	mobileNav.classList.toggle('hidden')
}

hamburger.addEventListener('click', navToggler)
closeBtn.addEventListener('click', navToggler)

mobileNav.addEventListener('click', () => {
	navItems.forEach(() => {
		mobileNav.classList.add('hidden')
	})
})
