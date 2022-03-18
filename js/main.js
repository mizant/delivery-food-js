'use strict';




// 1 день
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const clouseAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out')
const input = document.querySelector('#login')
const cardsRestaurants = document.querySelector ('.cards-restaurants')
const containerPromo = document.querySelector('.container-promo') 
const restaurants = document.querySelector('.restaurants')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.logo')
const cardsMenu = document.querySelector('.cards-menu')



function toggleModal() {
  modal.classList.toggle("is-open");
}



let login = localStorage.getItem('gloDelivery');

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}


function validName (str) {
  const regName = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
                  
  return regName.test(str);
}

console.log(validName('Max'))



function autorized() {
  function logOut() {
    login = '';
    localStorage.removeItem('gloDelivery')
    buttonAuth.style.display = ''
    userName.style.display = ''
    buttonOut.style.display = ''
    buttonOut.removeEventListener('click', logOut)
    checkAuth();

  }

  console.log ('авторизован');
  
  userName.textContent = login
  buttonAuth.style.display = 'none'
  userName.style.display = 'inline'
  buttonOut.style.display = 'block'

  buttonOut.addEventListener('click', logOut)
}

function notAuthorized() {

  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;
    
    checkName(login);

    localStorage.setItem('gloDelivery', login);


    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    clouseAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();
  
  
}
buttonAuth.addEventListener('click', toggleModalAuth);
clouseAuth.addEventListener('click', toggleModalAuth);
logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
if (login) {
  autorized();
} else {
  notAuthorized();
}
}

checkAuth();

function checkName() {
  if (!login) {
    alert ('введите имя!')
    modalAuth.classList.remove('is-open');
    input.style.borderColor = 'red';
  } else 
  input.style.borderColor = 'black';
  return
}


// конец первого урока
// доделал предупреждение, если не ввели имя




function createCardRestaurant() {
  const card = `
      <a class="card card-restaurant">
                <img src="img/tanuki/preview.jpg" alt="image" class="card-image"/>
                <div class="card-text">
                  <div class="card-heading">
                    <h3 class="card-title">Тануки</h3>
                    <span class="card-tag tag">60 мин</span>
                  </div>
                  <!-- /.card-heading -->
                  <div class="card-info">
                    <div class="rating">
                      4.5
                    </div>
                    <div class="price">От 1 200 ₽</div>
                    <div class="category">Суши, роллы</div>
                  </div>
                </div>
              </a>
              `;

              cardsRestaurants.insertAdjacentHTML('beforeend', card);
    }

createCardRestaurant()
createCardRestaurant()
createCardRestaurant()

function createCardGood() {
  const card = document.createElement('div');
  card.className = 'card';

  card.insertAdjacentHTML('beforeend', `
						<img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Пицца Классика</h3>
							</div>
							
							<div class="card-info">
								<div class="ingredients">Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями,
									грибы.
								</div>
							</div>
						
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">510 ₽</strong>
							</div>
						</div>
  `);
  cardsMenu.insertAdjacentElement('beforeend', card);

}





function openGoods(event) {
  const target = event.target;

  if (login) {
    const restaurant = target.closest('.card-restaurant');
    if (restaurant) {
      cardsMenu.textContent = '';
      containerPromo.classList.add('hide')
      restaurants.classList.add('hide')
      menu.classList.remove('hide')
  
    createCardGood()
    createCardGood()
    createCardGood()
    }
  } else {
    toggleModalAuth()
  }

}






cardsRestaurants.addEventListener('click', openGoods);
logo.addEventListener('click', function(){
  containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
})


  
cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);


// конец второго урока



// slider


new Swiper ('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: true, 
  grabCursor: true,
})