/*=======MENU SHOW Y HIDDEN==========*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
  
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })


  /*========REMOVE MENU MOBILE EM CLICK=========*/
  
  const navLink = document.querySelectorAll('.nav_link')

  function linkAction () {
    navMenu.classList.remove('show-menu')
  }

  navLink.forEach(n => n.addEventListener('click', linkAction))

  /*============================Hidden Skills===========================*/
  
const skillsContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills_content skills_close'
  }

  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
}
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
});

/*===========Qualification tabs====================*/ 

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
tab.addEventListener('click', () => {
const target = document.querySelector(tab.dataset.target)

tabContents.forEach(tabContent => {
  tabContent.classList.remove('qualification_active')
})
target.classList.add('qualification_active')

tabs.forEach(tab => {
    tab.classList.remove('qualification_active')
})
tab.classList.add('qualification_active')
})
})



