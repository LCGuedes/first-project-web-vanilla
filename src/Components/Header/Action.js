/*=======MENU SHOW Y HIDDEN==========*/

document.addEventListener('DOMContentLoaded', function(){

  
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

})
