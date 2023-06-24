const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".menu-btnn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }




    const btn = document.querySelector('.read-more-btn')
    const text = document.querySelector('.card_read-more')
    const cardHolder = document.querySelector('.card-holder')

    cardHolder.addEventListener('click', e=>{
	const current = e.target
	const isReadMoreBtn = current.className.includes('read-more-btn')
	if (!isReadMoreBtn)
		return
	const currentText = e.target.parentNode.querySelector('.card_read-more')
	currentText.classList.toggle('card_read-more--open')
	current.textContent = current.textContent.includes('Read More...') ? 'Read Less' : 'Read More...'
});



const btn2 = document.querySelector('.read-more-btn2')
const text2 = document.querySelector('.card_read-more2')
const cardHolder2 = document.querySelector('.card-holder2')

cardHolder2.addEventListener('click', e=>{
const current = e.target
const isReadMoreBtn2 = current.className.includes('read-more-btn2')
if (!isReadMoreBtn2)
return
const currentText = e.target.parentNode.querySelector('.card_read-more2')
currentText.classList.toggle('card_read-more2--open')
current.textContent = current.textContent.includes('Read More...') ? 'Read Less' : 'Read More...'
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzN1ITL9WXu25RwCbUuqsqVEQkxIyFI93qjAbsXDcTO23Hzy9IyEb86WJNhidkIcbQD/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thank You For Subscribing!"
      setTimeout(function(){
   msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});

const navLinkEls = document.querySelectorAll('.navLink');
const activePage = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  const navLinkPathname=new URL(navLinkEl.href).pathname;

  if((activePage === navLinkPathname) || (activePage === '/index.html' && navLinkPathname === '/')){
    navLinkEl.classList.add('active');
  }
})

const btn3 = document.querySelector('.read-more-btn3')
const text3 = document.querySelector('.card_read-more3')
const cardHolder3 = document.querySelector('.card-holder3')

cardHolder3.addEventListener('click', e=>{
const current = e.target
const isReadMoreBtn3 = current.className.includes('read-more-btn3')
if (!isReadMoreBtn3)
return
const currentText = e.target.parentNode.querySelector('.card_read-more3')
currentText.classList.toggle('card_read-more3--open')
current.textContent = current.textContent.includes('Read More...') ? 'Read Less' : 'Read More...'
});