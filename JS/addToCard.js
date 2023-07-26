// description of article
let sqte = document.querySelector(".qte-nb");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let addToCart = document.querySelector(".buy");
let sprixUnitaire = document.querySelector(".prix-unitaire");
//for cart
let sNotif = document.querySelector(".notification");
let sqteCart = document.querySelector(".qteCart");
let sarticalPrice = document.querySelector(".article-price");
let sfinalPrice = document.querySelector(".final-price");
let swraperCart = document.querySelector(".wrraper-cart");
let sEmpty = document.querySelector(".empty");

//quanity
let qte = parseInt(sqte.innerHTML);

// handle the quanity

const increament = () => {
  qte++;
  sqte.innerHTML = qte;
};

const decreament = () => {
  if (qte > 0) {
    qte--;
    sqte.innerHTML = qte;
  } else {
    qte = 0;
  }
};

plus.onClick = increament;
minus.onClick = decreament;

const addToCartOperation = () => {
  if (qte > 0) {
    sNotif.style.display = "flex";
    sEmpty.classList.remove("show-empty");
    sEmpty.classList.add("hide-empty");
    swraperCart.classList.remove("hide-wrraper-cart");
    swraperCart.classList.add("show-wrraper-cart");
    sNotif.innerHTML = qte;
    sqteCart.innerHTML = qte;
    sarticalPrice.innerHTML = prixUnitaire;
    finalPrice = prixUnitaire * qte;
    sfinalPrice.innerHTML = finalPrice;
  } else {
    sNotif.style.display = "none";
    swraperCart.classList.remove(".show-wrraper-cart");
    swraperCart.classList.add("hide-wrraper-cart");
    sEmpty.classList.remove("hide-empty");
    sEmpty.classList.add("show-empty");
  }
};

// notification
let notif = parseInt(sNotif.innerHTML);

// cart  notification
let qteCart = parseInt(sqteCart.innerHTML);

// prix unitaire
let prixUnitaire = parseFloat(sprixUnitaire.innerHTML);

// article prix
let articalPrice = parseFloat(sarticalPrice.innerHTML);

// quantité *  prix unitaire
let finalPrice = parseFloat(sfinalPrice.innerHTML);

// pop up
function toggle() {
  let popUp = document.querySelector(".pop-up");
  let blur = document.getElementById("blur");

  if (popUp.classList.contains("toggle")) {
    popUp.classList.remove("toggle");
    blur.classList.remove("active");
  } else {
    popUp.classList.add("toggle");
    blur.classList.add("active");
  }
}

// function for Sliding with thumbnails in main page and in the pop-up
function changeIt(lien) {
  document.querySelector(".changed img").src = lien;
}
