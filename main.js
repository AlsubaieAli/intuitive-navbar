const navList = document.querySelectorAll('.nav-li');

navList.forEach(e => e.addEventListener('click', setActive))


function setActive(){
  navList.forEach(e => e.classList.remove('active'));
  this.classList.add('active');
}