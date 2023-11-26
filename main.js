createAdmin();
var clickLogin = document.getElementById("button_login");
var userModal = document.getElementById("user_modal");
var loginModal = document.getElementById("login_modal");
var loginWrapper = document.getElementById("login_wrapper");
var clickSignUp = document.getElementById("sign_up_button");
var signUpModal = document.getElementById("sign_up_modal");
var signUpWrapper = document.getElementById("sign_up_wrapper");
var clickProduct = document.querySelector(".product");
var clickCloseProductInfo = document.querySelector(".close_detail");

var time_now = document.getElementById('time-now');
setInterval(showTimeNow,1000);

function showMenu(){
  var menuList = ['G-SHOCK','ROLEX','VACHERON','OMEGA'];
  var ul = document.querySelector('.bot_header_menu');
  var li = '<li><a href="index.html"><img src="IMG/logo.png" alt="logo_web"></a></li>';
  var li='<li><a href="index.html">TRANG CHỦ</a></li>';
  for(var i=0;i<menuList.length;i++){
    li += '<li><a href="index.html?'+menuList[i]+'&0">'+menuList[i]+'</a></li>';
    ul.innerHTML= li;
  }
}

function showTimeNow() {
    let date = new Date();
    let date_year = date.getFullYear();
    let date_month = date.getMonth() + 1;
    let date_day = date.getDate();
    let date_hour = date.getHours();
    let date_minute = date.getMinutes();
    let date_second = date.getSeconds();
    if(date_second < 10) {
          date_second = date_second.toString();
          date_second = 0 + date_second
    } else {
          date_second = date_second.toString();
    }
    let timeNowTemp = `${date_hour} : ${date_minute} : ${date_second}`;
    time_now.innerHTML = timeNowTemp;
}

function showform() {
  userModal.style.display = "block";
}
function showlogin() {
  signUpModal.style.display = "none";
  signUpWrapper.style.display = "none";
  loginModal.style.display = "block";
  loginWrapper.style.display = "block";
}
function showsignup() {
  loginModal.style.display = "none";
  loginWrapper.style.display = "none";
  signUpModal.style.display = "block";
  signUpWrapper.style.display = "block";
}
function closeUser() {
  userModal.style.display = "none";
}
function closesignup() {
  signUpModal.style.display = "none";
  signUpWrapper.style.display = "none";
}
function closelogin() {
  loginModal.style.display = "none";
  loginWrapper.style.display = "none";
}
// function closeProductInfo(){
//             productInfo.style.display = 'none';
// }
function createProduct() {
  if (localStorage.getItem("product") == null) {
    var productArray = [
      {productID: 100,img: "IMG/100.jpg",name: "Nam GA-700-1ADR",price: 2114000,brand: "G-SHOCK",},
      {productID: 101,img: "IMG/101.jpg",name: "Nam GA-800-1ADR",price: 990000,brand: "G-SHOCK",},
      {productID: 102,img: "IMG/103.jpg",name: "Nam GA-2100GB-1ADR ",price: 3533000,brand: "G-SHOCK",},
      {productID: 103,img: "IMG/104.jpg",name: "Nam GA-2100SB-1ADR ",price: 3316000,brand: "G-SHOCK",},
      {productID: 104,img: "IMG/105.jpg",name: "Forgotten Future Nam DW-5600FF-8DR",price: 2764000,brand: "G-SHOCK",},
      {productID: 105,img: "IMG/106.jpg",name: "Forgotten Future Nam GA-700FF-8ADR  ",price: 3178000,brand: "G-SHOCK",},
      {productID: 106,img: "IMG/107.jpg",name: "Forgotten Future  Nam GA-2200FF-8ADR",price: 4224000,brand: "G-SHOCK",},
      {productID: 108,img: "IMG/108.jpg",name: "Nữ GMA-S2100BA-4ADR",price: 2902000,brand: "G-SHOCK",},
      {productID: 109,img: "IMG/109.jpg",name: "Nam GA-2100-1A1DR",price: 2902000,brand: "G-SHOCK",},
      {productID: 110,img: "IMG/110.jpg",name: "Nam GW-A1100R-4ADR ",price: 16680000,brand: "G-SHOCK",},
      {productID: 111,img: "IMG/111.webp",name: "Cosmograph Daytona",price: 1937733000,brand: "ROLEX",},
      {productID: 112,img: "IMG/112.webp",name: "Lady-Datejust",price: 407394000,brand: "ROLEX",},
      {productID: 113,img: "IMG/113.webp",name: "RETROGRADE DAY-DATE",price: 1280000000, brand: "VACHERON", },
      { productID: 114,img: "IMG/114.webp",name: "DUAL TIME", price: 1260000000,brand: "VACHERON",},
      {productID: 115, img: "IMG/115.webp",name: "TRIPLE CALENDRIER 1942",price: 625000000, brand: "VACHERON",},
      {productID: 116,img: "IMG/116.webp",name: "QUARTZ",price: 850000000,brand: "VACHERON", },
      {productID: 117,img: "IMG/117.webp", name: "GMT-Master II",price: 410005500,brand: "ROLEX",},
      { productID: 118,img: "IMG/118.webp",name: "Sky-Dweller",price: 1062880500,brand: "ROLEX",},
      {productID: 119,img: "IMG/119.webp",name: "Day-Date 40",price: 1577346000,brand: "ROLEX",},
      {productID: 120,img: "IMG/120.webp",name: "Datejust 36",price: 221977500,brand: "ROLEX",},
      {productID: 121,img: "IMG/121.webp",name: "Air-King",price: 185416500,brand: "ROLEX",},
      {productID: 122,img: "IMG/122.webp",name: "Rolex Deapsea",price: 360387000,brand: "ROLEX",},
      {productID: 123,img: "IMG/123.webp",name: "OVERSEAS CHRONOGRAPH",price: 925000000,brand: "VACHERON",},
      {productID: 124,img: "IMG/124.webp",name: "Day-Date 36",price: 1462400000,brand: "ROLEX",},
      {productID: 125,img: "IMG/125.webp",name: "Oyster Perpetual 31",price: 141021000,brand: "ROLEX",},
      {productID: 126,img: "IMG/126.webp",name: "Datejust 31",price: 396498000,brand: "ROLEX",},
      {productID: 127,img: "IMG/127.webp",name: "RETROGRADE DAY-DATE",price: 1600000000,brand: "VACHERON",},
      {productID: 128,img: "IMG/128.jpg",name: "Nam GM-5600-1DR",price: 4352000,brand: "G-SHOCK",},
      {productID: 129,img: "IMG/129.jpg",name: "GNam GM-2100-1ADR ",price: 5803000,brand: "G-SHOCK",},
      {productID: 130,img: "IMG/130.webp",name: "Explorer 36",price: 292488000,brand: "ROLEX",},
      {productID: 131,img: "IMG/131.webp",name: "AMERICAN 1921",price: 865000000,brand: "VACHERON",},
      {productID: 132,img: "IMG/132.webp",name: "OVERSEAS SELF-WINDING",price: 1570000000,brand: "VACHERON",},
      {productID: 133,img: "IMG/133.webp",name: "SELF-WINDING",price: 329000000,brand: "VACHERON",},
      {productID: 134,img: "IMG/134.webp",name: "OVERSEAS SELF-WINDING",price: 1140000000,brand: "VACHERON",},
      {productID: 135,img: "IMG/135.webp",name: "MOON PHASE",price: 2120000000,brand: "VACHERON",},
      {productID: 136,img: "IMG/136.webp",name: "DUAL TIME",price: 800000000,brand: "VACHERON",},
      {productID: 137,img: "IMG/137.webp",name: "CO‑AXIAL MASTER CHRONOMETER",price: 147200000,brand: "OMEGA",},
      {productID: 138,img: "IMG/138.webp",name: "AQUA TERRA 150M",price: 368000000,brand: "OMEGA",},
      {productID: 139,img: "IMG/139.webp",name: "BULLHEAD ",price: 2256000000,brand: "OMEGA",},
      {productID: 140,img: "IMG/140.webp",name: "CO‑AXIAL MASTER CHRONOMETER",price: 190350000,brand: "OMEGA",},
      {productID: 141,img: "IMG/141.webp",name: "DARK SIDE OF THE MOON",price: 251450000,brand: "OMEGA",},
      {productID: 142,img: "IMG/142.webp",name: "DARK SIDE OF THE MOON",price: 175075000,brand: "OMEGA",},
      {productID: 143,img: "IMG/143.webp",name: "PLANET OCEAN 600M",price: 166850000,brand: "OMEGA",},
      {productID: 144,img: "IMG/144.webp",name: "PLOPROF 1200M",price: 296100000,brand: "OMEGA",},
      {productID: 145,img: "IMG/145.webp",name: "PRESTIGE",price: 116325000,brand: "OMEGA",},
      {productID: 146,img: "IMG/146.webp",name: "RACING ",price: 150400000,brand: "OMEGA",},
      {productID: 147,img: "IMG/148.webp",name: "TOURBILLON",price: 4551950000,brand: "OMEGA",},
      {productID: 148,img: "IMG/101.jpg",name: "Nam GA-700-1ADR",price: 2114000,brand: "G-SHOCK",},
      {productID: 149,img: "IMG/101.jpg",name: "Nam GA-700-1ADR",price: 2114000,brand: "G-SHOCK",},
    ];
    localStorage.setItem("product", JSON.stringify(productArray));
  }
}
var content = document.getElementById("content");
var PageProduct = document.getElementById("page_product");
function scrollToTop() {
  window.scroll({
    top: 230,
    left: 0,
    behavior: "smooth", // Điều này làm cho cuộn mượt hơn
  });
}
function showListPageProductStranger() {
  let numberOfPageProduct = divideProductPage("product").length; //? = 4
  let PageProductTemp = "";
  for (let i = 0; i < numberOfPageProduct; i++) {
    PageProductTemp +=
      '<button class="page_number" onclick="showProductStranger(' +
      i +
      '),scrollToTop()">' +
      (i + 1) +
      "</button>";
  }
  PageProduct.innerHTML = PageProductTemp;
}
function showProductStranger(i) {
  showListPageProductStranger();
  pageOfProduct = divideProductPage("product");
  let contentTemp = "";
  for (let j = 0; j < pageOfProduct[i].length; j++) {
    // onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')" sau id="product"
    contentTemp +=
      '<div class="product" onclick="productDetail(' +
      pageOfProduct[i][j].productID +
      ')" ><img src="' +
      pageOfProduct[i][j].img +
      '" alt="" class="product_img"><p class="product_name">' +
      pageOfProduct[i][j].name +
      '</p><p class="product_price">' +
      currency(pageOfProduct[i][j].price) +
      "</p></div>";
  }
  content.innerHTML = contentTemp;
}
function showProductStranger(i) {
  showListPageProductStranger();
  pageOfProduct = divideProductPage("product");
  let contentTemp = "";
  for (let j = 0; j < pageOfProduct[i].length; j++) {
    // onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')" sau id="product"
    contentTemp +=
      '<div class="product" onclick="productDetail(' +
      pageOfProduct[i][j].productID +
      ')" ><img src="' +
      pageOfProduct[i][j].img +
      '" alt="" class="product_img"><p class="product_name">' +
      pageOfProduct[i][j].name +
      '</p><p class="product_price">' +
      currency(pageOfProduct[i][j].price) +
      "</p></div>";
  }
  content.innerHTML = contentTemp;
}

function showProduct(){
  var url = document.location.href;
  var temp = url.split("?");
  var s='';
  let productArray = JSON.parse(localStorage.getItem('product'));

  if(temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0){
    if(temp[1]=='' || temp[1]==undefined){
      temp = 'all&0';
    }

    else{
      temp = temp[1];
    }

  var temp2 = temp.split("&");
  var vitri = temp2[1];
  var sotrang=0,dem=0;
  for(var i=0; i<productArray.length;i++) {
    s+='<div class="product" onclick="productDetail(' +
        productArray[i].productID +
        ')" ><img src="' +
        productArray[i].img +
        '" alt="" class="product_img"><p class="product_name">' +
        productArray[i].name +
        '</p><p class="product_price">' +
        currency(productArray[i].price) +
        "</p></div>";
        dem++;
    if(dem==12)
        break;
  }
  sotrang=Math.ceil(productArray.length/12);
  var lienket='';
  for(var i = 1;i<=sotrang;i++){
    vitri=(i-1)*12;
    var a = '<a>' + i + '</a>';
    lienket+='<button class="page_number" onclick="showProductStranger(' 
    + i + '),scrollToTop()">' + a +
    '</button>';
  }
  document.getElementById('page_product').innerHTML=lienket;
    // console.log("Calling showProductStranger(0)");
    // showProductStranger(1);
  }

  else if(url && url.includes("?")) {
  temp = temp[1];
  var temp2 = temp.split("&");
  var brand = temp2[0];
  var vitri = temp2[1];
  var sotrang=0,dem=0;
  var arrtempt=[];
  for(var i=0; i<productArray.length;i++){
    if(brand==productArray[i].brand)
      arrtempt.push(productArray[i]);
  }
  for(var i=vitri;i<arrtempt.length;i++){
    s+='<div class="product" onclick="productDetail(' +
        arrtempt[i].productID +
        ')" ><img src="' +
        arrtempt[i].img +
        '" alt="" class="product_img"><p class="product_name">' +
        arrtempt[i].name +
        '</p><p class="product_price">' +
        currency(arrtempt[i].price) +
        "</p></div>";
        dem++;
    if(dem==12)
      break;
  }
  sotrang=Math.ceil(arrtempt.length/12);
  var lienket = '';
for (var i = 1; i <= sotrang; i++) {
  
    vitri = (i - 1) * 12;
    var a = "index.html?" + brand + '&' + vitri;
    lienket += '<button class="page_number" onclick="navigateTo(\'' + a + '\')">' + i + '</button>';
}
document.getElementById('page_product').innerHTML = lienket;
  }
  
  document.getElementById('content').innerHTML=s;
}

function navigateTo(href) {
  window.location.href = href;
}

function productDetail(productID) {
  var productDetail = document.getElementById("product_detail");
  var productInfo = document.getElementById("infomation");
  productDetail.style.display = "block";
  productInfo.style.display = "block";

  let productArray = JSON.parse(localStorage.getItem("product"));
  let selectedProduct = productArray.find(product => product.productID === productID);

  // Check if the selected product is found
  if (selectedProduct) {
    productDetail.innerHTML =
      `<div id="infomation">
         <button class="close_detail" onclick="closeProductDetail()" type="button">&times;</button>
         <div class="left_info">
           <img class="img_in_info" src="${selectedProduct.img}" alt="">
         </div>
         <div class="right_info">
           <h2 class="product_name">${selectedProduct.name}</h2>
           <h4 class="product_price">Giá : ${currency(selectedProduct.price)}</h4>
           <h4>Số lượng : </h4>
           <button class="quantity_crease" onclick="quantitydown()">-</button>
           <input id="quantity" type="text" value="1">
           <button class="quantity_decrease" onclick="quantityup()">+</button>
           <button id="add_cart" onclick="cartAdd(${selectedProduct.productID})">Thêm vào giỏ hàng</button>
         </div>
       </div>`;
  } else {
    // Handle the case where the product is not found (you may show an alert or handle it in a way that makes sense for your application)
    console.log("Product ID:", productID);
  }
}
function closeProductDetail() {
  document.getElementById("product_detail").style.display = "none";
  document.getElementById("infomation").style.display = "none";
}


// Vũ
function quantityup() {
  var quantityInput = document.getElementById('quantity');
  var currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}

function quantitydown() {
  var quantityInput = document.getElementById('quantity');
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
  }
}
function currency(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " VND";
}

// function createSlideShowArray() {
//     if(localStorage.getItem('slideshow') == null) {
//           let slideShowArray = [
//                 {slideShowID : 0, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/UZjHB4GICYEIQIyhKajpuhHIieB6Wg9HyFg4nFy9.gif"},
//                 {slideShowID : 1, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/mKNNluCvJOMKjIDUzdJBDq0LKuI939qK9zJC6atr.gif"},
//                 {slideShowID : 2, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/9BJItFvQLCmOZaR3tYCj2hcuBpuMhlwgZ2a65R9N.gif"},
//                 {slideShowID : 3, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/ol989p3XImck4WQpKLC8YBbl11jaZ0x5OOz8U067.gif"},
//                 {slideShowID : 4, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/2PJHQer21QRAADNGJwonlV41gmCUUxTzIFKOv5ZV.gif"},
//           ];
//           localStorage.setItem('slideshow',JSON.stringify(slideShowArray));
//     }
// }
// var index = 0;
// var countDown;
// moveSlideShow();

// function moveSlideShow() {
//     let slideShow = document.getElementById('slideShow-img');
//     let slideShowArray = JSON.parse(localStorage.getItem('slideshow'));

//     let numSlides = slideShowArray.length;
//     if(index >= numSlides) {
//           index = 0;
//     } else if(index < 0) {
//           index = numSlides - 1;
//     }
//     slideShow.style.display = 'block';
//     slideShow.innerHTML = '<img src="'+slideShowArray[index].img+'" alt="">';
//     countDown = setTimeout(function() {
//           moveSlideShowAfter();
//     },2000)
// }
// function moveSlideShowBefore() {
//     clearTimeout(countDown);
//     index--;
//     moveSlideShow(index);
// }
// function moveSlideShowAfter() {
//     clearTimeout(countDown);
//     index++;
//     moveSlideShow(index);
// }

function divideProductPage(keyName) {
  let pageOfProduct = [];
  let productArray = JSON.parse(localStorage.getItem(keyName));
  let pageOfProductTemp = [];
  let dem = 0;
  for (let i = 0; i < productArray.length; i++) {
    pageOfProductTemp.push(productArray[i]);
    dem++;
    if (dem == 12) {
      pageOfProduct.push(pageOfProductTemp);
      pageOfProductTemp = [];
      dem = 0;
    }
  }
  pageOfProduct.push(pageOfProductTemp); //? thêm những sản phẩm còn dư khi tạo trang (VD: 26sp : 12 = 2 dư 2)
  /* console.log(pageOfProduct); */
  return pageOfProduct;
}
function showbill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s='<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){
				document.getElementById('bill').style.display = 'block';
				s+='<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+
					'<div>'+currency(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div>'+billArray[i].status+'</div>'+
				'</div>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}

/* USER */

/* validation */

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var specialCharsForEmail = "<>!#$%^&*()_+[]{}?:;|'\"\\,/~`-=";
function checkForSpecialChar(string){
  for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
              return true;
        }
  }
  return false;
}
function checkForSpecialCharForEmail(string){
  for(i = 0; i < specialCharsForEmail.length;i++){
        if(string.indexOf(specialCharsForEmail[i]) > -1){
              return true;
        }
  }
  return false;
}
function createAdmin(){
	if(localStorage.getItem('user')===null){
		var userArray = [];
		var user = {username: 'admin', 
    password: 'admin', 
    fullname: 'Nguyễn Minh Phát', 
    address: '273 An Dương Vương, P3, Quận 5, TPHCM', 
    datesignup: '23-11-1999'};
		userArray.push(user);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
  

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sign_up_wrapper').addEventListener('submit', signup);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('login_wrapper').addEventListener('submit', login);
});
 
function signup(e) {
  e.preventDefault();
  var flag = true;
  var fullname = document.getElementById('name-sign-up');
  var fullname_error = document.getElementById('name-sign-up-error');
  var username = document.getElementById('username-sign-up');
  var username_error = document.getElementById('username-sign-up-error');
  var email = document.getElementById('email-sigup');
  var email_error = document.getElementById('email-sign-up-error');
  var password = document.getElementById('password-sign-up');
  var password_error = document.getElementById('password-sign-up-error');
  var repassword = document.getElementById('confirm_password-sign-up');
  var repassword_error = document.getElementById('password2-sign-up-error');
  if (fullname.value == '' || fullname.value.length < 7 || checkForSpecialChar(fullname.value) == true) {
        fullname_error.style.display = 'block';   
        flag = false;
  } else {
        fullname_error.style.display = 'none';
  }
  if (username.value == '' || username.value.length < 5 || checkForSpecialChar(username.value) == true) {
        username_error.style.display = 'block';   
        flag = false;
  } else {
        username_error.style.display = 'none';
  }
  if (email.value == '' || email.value.length < 10 || checkForSpecialCharForEmail(email.value) == true) {
        email_error.style.display = 'block';    
        flag = false;
  } else {
        email_error.style.display = 'none';   
  }
  if (password.value == '' || password.value.length < 6) {
        password_error.style.display = 'block';    
        flag = false;
  } else {
        password_error.style.display = 'none';   
  }
  if(repassword.value != password.value || repassword.value == '') {
        repassword_error.style.display = 'block'; 
        flag = false;
  } else {
        repassword_error.style.display = 'none';  
  }
  if(flag==false){
		return false;
	}
  var d = new Date();
	var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var user = {
    fullname: fullname.value, 
    username: username.value, 
    password: password.value, 
    email: email.value, 
    datesignup: datesignup};
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(user.username==userArray[i].username){
			username_error.style.display = 'block';
			username_error.innerHTML = 'Tên đăng nhập đã có người sử dụng';
			username.focus();
			return false;
		}

	}

	userArray.push(user);
	localStorage.setItem('user',JSON.stringify(userArray));
	customAlert('Bạn đã đăng ký thành công!','success');
	showlogin();
}

function login(e) {
  e.preventDefault();
  var username = document.getElementById('usernameLogin').value;
  var username_error = document.getElementById('username-login-error');
  var password = document.getElementById('passwordLogin').value;
  var password_error = document.getElementById('password-login-error');
  var flag = true;
  if (username == '' || username.length < 4 || checkForSpecialChar(username) == true) {
    username_error.style.display = 'block';
    flag = false;

  } else {
        username_error.style.display = 'none';
  }
  if (password == '' || password.length < 4) {
    password_error.style.display = 'block';
    flag = false;
  } else {
        password_error.style.display = 'none';
  }
  if(flag==false){
		return false;
	}
  var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				closeUser();
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				window.location.reload(true);
				return true;
			}
		}
	}
	password_error.style.display = 'block';
	password_error.innerHTML = 'Sai thông tin đăng nhập';
	return false;
}


/* Đăng xuất */
function logout(url){
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	location.href=url;
}
function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin'){
      //onClick="location.href=\'cart.html\'"
      //onClick="location.href=\'cart.html\'"
			s = '<li><button onClick="window.location.href=\'AdminPage/index.html\'"><i class="fa-solid fa-sliders"></i></button></li>'+ //Admin
				'<li><button style="margin-right: 300px;">'+'<p>Xin chào<\p>'+user.fullname+'</button></li>'+'<li><button id="btnlogout" onClick="logout(\'index.html\')"><i class="fa-solid fa-right-from-bracket"></i></button></li>'+
				'<li><button onClick="goToCartPage()"><i class="fa-solid fa-cart-shopping"></i></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}else{
			s = '<li><button style="margin-right: 300px">'+'<p>Xin chào<\p>'+user.fullname+'</button></li>'+'<li><button id="btnlogout" onClick="logout(\'index.html\')"><i class="fa-solid fa-right-from-bracket"></i></button></li>'+
				'<li><button onClick="goToCartPage()"><i class="fa-solid fa-cart-shopping"></i></button></li>'+
				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
		}
		document.querySelector('#header .top_header ul.right').innerHTML = s;
	}
}
// function checklogin2(){
// 	if(localStorage.getItem('userlogin')){
// 		var user = JSON.parse(localStorage.getItem('userlogin'));
// 		var s='';
// 		if(user.username=='admin'){
// 			s = '<li><button onClick="window.location.href=\'../admin/product.html\'"><img src="../images/icon/settings.svg"></button></li>'+
// 				'<li><button>'+'<p>Xin chào<\p>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'../index.html\')">LOGOUT</button></li>'+
// 				'<li><button onClick="location.href=\'../cart.html\'"><img src="../images/icon/carticon.svg"></button></li>'+
// 				'<li><button onClick="showSearch()"><img src="../images/icon/searchicon.svg"></button></li>';
// 		}else{
// 			s = '<li><button style="margin-right: 100px">'+'<p>Xin chào<\p>'+user.fullname+'</button><button id="btnlogout" style="font-size:16px; background-color:red;" onClick="logout(\'../index.html\')">LOGOUT</button></li>'+
// 				'<li><button onClick="location.href=\'../cart.html\'"><i class="fa-solid fa-cart-shopping"></i></button></li>'+
// 				'<li><button onClick="showSearch()"><i class="fas fa-search"></i></button></li>';
// 		}
// 		document.querySelector('#header .top_header ul.right').innerHTML = s;
// 	}
// }
function customAlert(message,type) {
	if (type=='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type=='warning') {
		document.getElementById("customalert").style.backgroundColor = '#102242';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 3500);
}



//VuChau
//Thêm sản phẩm vào giỏ hàng
function cartAdd(productID) {
  // kiểm tra người dùng đăng nhập hay chưa
  if (!localStorage.getItem('userlogin')) {
    alert('Vui lòng đăng nhập hoặc đăng ký để thêm sản phẩm vào giỏ hàng.');
    return;
  }

  let productArray = JSON.parse(localStorage.getItem('product')) || [];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // chọn sản phẩm trong productArray
  let selectedProduct = productArray.find(product => product.productID === productID);
  
  if (selectedProduct) {
    //Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    let existingProduct = cart.find(item => item.productID === selectedProduct.productID);
    if (existingProduct) {
    // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      existingProduct.quantity = parseInt(document.getElementById('quantity').value);
    } else {
    // Nếu sản phẩm không có trong giỏ hàng thì thêm sản phẩm
      selectedProduct.quantity = parseInt(document.getElementById('quantity').value);
      cart.push(selectedProduct);
    }

    // Cập nhật giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart));
    // óng 
    closeProductDetail();
  }
}

//Hàm này hiển thị thông tin giỏ hàng.
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItems = document.getElementById('cart-items');
  let totalItems = document.getElementById('total-items');
  let totalPrice = document.getElementById('total-price');
  // Xóa tất cả các phần tử con trong bảng hiển thị giỏ hàng
  while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
  }
  let itemCount = 0;
  let total = 0;

  // Duyệt qua danh sách sản phẩm trong giỏ hàng và hiển thị trên giao diện
  for (let i = 0; i < cart.length; i++) {
      let product = cart[i];
      let row = document.createElement('tr');

      // Tạo các ô cho từng thông tin sản phẩm
      let imgCell = document.createElement('td');
      imgCell.innerHTML = `<img src="${product.img}" alt="${product.name}" width="100">`;

      let nameCell = document.createElement('td');
      nameCell.textContent = product.name;

      let priceCell = document.createElement('td');
      priceCell.textContent = formatCurrency(product.price);

      let quantityCell = document.createElement('td');
      // Tạo nút tăng và nút giảm số lượng
      let decreaseButton = document.createElement('button');
      decreaseButton.textContent = '-';
      decreaseButton.onclick = () => {
          return decreaseQuantity(i);
      };

      let quantitySpan = document.createElement('span');
      quantitySpan.textContent = product.quantity;

      let increaseButton = document.createElement('button');
      increaseButton.textContent = '+';
      increaseButton.onclick = () => {
          return increaseQuantity(i);
      };
      // cài đặt css cho nút tăng giảm số lượng trong bảng
      decreaseButton.style.backgroundColor = '#143163';
      decreaseButton.style.color = '#fff'; 
      decreaseButton.style.border = 'none'; 
      decreaseButton.style.margin  = '10px'; 
      decreaseButton.style.cursor = 'pointer';
      decreaseButton.style.width = '20px';

      quantityCell.appendChild(decreaseButton);
      quantityCell.appendChild(quantitySpan);
      quantityCell.appendChild(increaseButton);
      increaseButton.style.backgroundColor = '#143163';
      increaseButton.style.color = '#fff';
      increaseButton.style.border = 'none';
      increaseButton.style.margin = '10px';
      increaseButton.style.cursor = 'pointer';
      increaseButton.style.width = '20px';

      let removeCell = document.createElement('td');
      let removeButton = document.createElement('button');
      removeButton.textContent = 'Xóa';
      removeButton.onclick = () => removeFromCart(i);
      removeCell.appendChild(removeButton);

      itemCount += product.quantity;
      total += product.price * product.quantity;

      // Thêm các ô vào hàng
      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(quantityCell);
      row.appendChild(removeCell);

      // Thêm hàng vào bảng
      cartItems.appendChild(row);
  }
  totalItems.textContent = itemCount;
  totalPrice.textContent = formatCurrency(total);
}

document.addEventListener('DOMContentLoaded', function () {
  displayCart();
});

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  // Lấy danh sách sản phẩm trong giỏ hàng từ localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (index >= 0 && index < cart.length) {
     // Xóa sản phẩm khỏi giỏ hàng tại vị trí index
      cart.splice(index, 1);
      // Cập nhật lại giỏ hàng
      localStorage.setItem('cart', JSON.stringify(cart));
      // cập nhập lại giao diện hiển thị của giỏ hàng
      displayCart(); 
  }
}

// Hàm tăng số lượng sản phẩm
function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity++;
  // Cập nhật lại giỏ hàng
  localStorage.setItem('cart', JSON.stringify(cart));
  // cập nhập lại giao diện
  displayCart();
}

// Hàm giảm số lượng sản phẩm
function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Giảm số lượng của sản phẩm tại chỉ mục index
  if (cart[index].quantity > 1) {
      cart[index].quantity--;
  }
  // Cập nhật lại giỏ hàng
  localStorage.setItem('cart', JSON.stringify(cart));
  // Gọi lại hàm hiển thị giỏ hàng
  displayCart();
}

// Hàm này được gọi khi người dùng muốn thanh toán và đặt hàng.
function checkout() {
  let user = JSON.parse(localStorage.getItem('userlogin'));
  if (!user) {
    alert('Bạn cần đăng nhập để đặt hàng.');
    return;
  }

  //Khi người dùng thanh toán và đặt hàng, mã sử dụng tên người dùng để tạo một khóa duy nhất cho danh sách hóa đơn của họ.
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let userBillKey = 'bill_' + user.username;
  //Sau đó, mã lưu thông tin đơn hàng vào localStorage sử dụng khóa userBillKey.
  let bill = JSON.parse(localStorage.getItem(userBillKey)) || [];

  // Kiểm tra xem giỏ hàng có sản phẩm không
  if (cart.length === 0) {
    alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi đặt hàng.');
    return;
  }

  // Tính tổng số sản phẩm và tổng giá trị đơn hàng
  let itemCount = 0;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    itemCount += product.quantity;
    total += product.price * product.quantity;
  }

  // Tạo một bản ghi hóa đơn dựa trên các sản phẩm trong giỏ hàng
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let billEntry = {
      productID: product.productID,
      name: product.name,
      quantity: product.quantity,
      price: product.price * product.quantity,
      date: getCurrentDate(),
      status: 'Chưa xử lý',
    };
    bill.push(billEntry);
  }
  // Lưu thông tin hóa đơn vào localStorage
  localStorage.setItem(userBillKey, JSON.stringify(bill));
  // Xóa giỏ hàng sau khi đã đặt hàng
  localStorage.removeItem('cart');
  // Hiển thị thông báo đặt hàng thành công
  alert('Bạn đã đặt hàng thành công.');
  // Hàm này dùng để xóa danh sách sản phẩm trong giỏ hàng trên giao diện
  clearCartList();
}

function clearCartList() {
  let cartItems = document.getElementById('cart-items');
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  // Cập nhật tổng số sản phẩm và tổng giá trị trong giỏ hàng
  let itemCount = 0;
  let total = 0;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    itemCount += product.quantity;
    total += product.price * product.quantity;
  }
  // Hiển thị giỏ hàng sau khi đã cập nhật
  displayCart();
  // Hiển thị tổng số sản phẩm và tổng giá trị mới
  document.getElementById('total-items').textContent = itemCount;
  document.getElementById('total-price').textContent = formatCurrency(total);
  return { itemCount, total };
}

// Hiển thị thông tin đơn hàng từ localStorage trên trang web
function displayOrderInfo() {
  let user = JSON.parse(localStorage.getItem('userlogin'));
  if (!user) {
    alert('Bạn cần đăng nhập để xem đơn hàng.');
    return;
  }
// khi người dùng đặt hàng, mã sử dụng tên người dùng để tạo một khóa duy nhất
  let userBillKey = 'bill_' + user.username;
  let bill = JSON.parse(localStorage.getItem(userBillKey)) || [];

  if (bill.length === 0) {
    alert('Bạn chưa đặt hàng. Vui lòng đặt hàng.');
    return;
  }

  // Hiển thị thông tin đơn hàng từ localStorage
  let orderItems = document.getElementById('order-items');
  while (orderItems.firstChild) {
    orderItems.removeChild(orderItems.firstChild);
  }

  let currentDate = getCurrentDate();
  let itemCount = 0;
  let total = 0;

  for (let i = 0; i < bill.length; i++) {
    let billEntry = bill[i];
    let row = document.createElement('tr');
    let imgCell = document.createElement('td');
    imgCell.innerHTML = `<img src="${getProductImage(billEntry.productID)}" alt="${billEntry.name}" width="100">`;
    let nameCell = document.createElement('td');
    nameCell.textContent = billEntry.name;
    let quantityCell = document.createElement('td');
    quantityCell.textContent = billEntry.quantity;
    let priceCell = document.createElement('td');
    priceCell.textContent = formatCurrency(billEntry.price);
    let dateCell = document.createElement('td');
    dateCell.textContent = currentDate;
    let processCell = document.createElement('td');
    processCell.textContent = billEntry.status;

    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(dateCell);
    row.appendChild(processCell);

    orderItems.appendChild(row);
    itemCount += billEntry.quantity;
    total += billEntry.price;
  }
  let orderTotalItems = document.getElementById('order-total-items');
  let orderTotalPrice = document.getElementById('order-total-price');
  orderTotalItems.textContent = itemCount;
  orderTotalPrice.textContent = formatCurrency(total);

  // Hiển thị bảng đã đặt hàng
  document.getElementById('cart-summary').style.display = 'none';
  document.getElementById('order-info').style.display = 'block';
  document.getElementById('cart-list').style.display = 'none';
  document.getElementById('h1-cart').style.display = 'none';
  document.getElementById('total-items').style.display = 'none';
  document.getElementById('total-price').style.display = 'none';
}

// chuyển trang
function goToHomePage() {
  window.location.href = 'index.html';
}

function goToCartPage() {
  if (!localStorage.getItem('userlogin')) {
    alert('Bạn chưa đăng nhập hoặc đăng ký. Vui lòng đăng nhập hoặc đăng ký để truy cập giỏ hàng.');
  } else {
      window.location.href ='cart.html';
  }
}

// hiện đơn hàng
function checkorder(){
  displayOrderInfo();
}

// Hàm lấy đường dẫn ảnh của sản phẩm dựa trên ID
function getProductImage(productID) {
  // Kiểm tra nếu có file ảnh trong định dạng webp
  const webpPath = `IMG/${productID}.webp`;
  const jpgPath = `IMG/${productID}.jpg`;
  // Kiểm tra nếu file webp tồn tại
  if (checkImageExists(webpPath)) {
    return webpPath;
  } else {
    // Trả về đường dẫn đến file jpg nếu không có file webp
    return jpgPath;
  }
}

// Hàm kiểm tra sự tồn tại của file ảnh
function checkImageExists(imagePath) {
  const http = new XMLHttpRequest();
  http.open('HEAD', imagePath, false);
  http.send();
  // Kiểm tra status của request, nếu là 200 thì file tồn tại
  return http.status !== 404;
}

// Hàm này nhận một số và trả về chuỗi biểu diễn số đó theo định dạng tiền tệ.
function formatCurrency(number) {
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return currentDate.toLocaleDateString('vi-VN', options);
}


//search
var modal_product_detail = document.getElementById('user-page-modal-product-detail');
var modal_search = document.getElementById('modal-search');
var modal_user_search = document.getElementById('user-page-modal-search');

function showSearch() {
  modal_search.style.display = 'block';
  let heightPage = document.body.offsetHeight;
  modal_search.style.height = heightPage+'px';
}
function showSearchUser() {
  modal_user_search.style.display = 'block';
  let heightPage = document.body.offsetHeight;
  modal_user_search.style.height = heightPage+'px';
}

function closeSearch() {
  modal_search.style.display = 'none';
}
function closeSearchUser() {
  modal_user_search.style.display = 'none';
}
function searchUser() {
  let searchProductArray;
  let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
  let searchProductPriceTo = document.getElementById('user-page-search-price-to');
  let search = document.getElementById('user-page-search-info').value.toLowerCase();
  let search_product = document.getElementById('user-page-search-product-wrapper');
  let searchProductTemp = '';
  searchProductArray = searchProductPriceUser();

  if (search == '') {
    if (searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
      search_product.innerHTML = '';
    } else {
      for (let i = 0; i < searchProductArray.length; i++) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
      search_product.innerHTML = searchProductTemp;
    }
  } else {
    for (let i = 0; i < searchProductArray.length; i++) {
      if (searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
    }
    search_product.innerHTML = searchProductTemp;
  }
}

function handleProductClick(productID) {
  // Check if the user is logged in
  if (!localStorage.getItem('userlogin')) {
    // If not logged in, show an alert and consider redirecting to the login page
    customAlert('Bạn phải đăng nhập để mua hàng', 'warning');
    // Consider redirecting to the login page
    // window.location.href = 'login.html';
  } else {
    // If logged in, show the product details
    productDetail(productID);
  }
}

function searchStranger() {
  let searchProductArray;
  let searchProductPriceFrom = document.getElementById('search-price-from');
  let searchProductPriceTo = document.getElementById('search-price-to');
  let search = document.getElementById('search-info').value.toLowerCase();
  let search_product = document.getElementById('search-product-wrapper');
  let searchProductTemp = '';
  searchProductArray = searchProductPrice();

  if (search == '') {
    if (searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
      search_product.innerHTML = '';
    } else {
      for (let i = 0; i < searchProductArray.length; i++) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
      search_product.innerHTML = searchProductTemp;
    }
  } else {
    for (let i = 0; i < searchProductArray.length; i++) {
      if (searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
        searchProductTemp += '<div class="search-product" onclick="handleProductClick('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>';
      }
    }
    search_product.innerHTML = searchProductTemp;
  }
}
function searchProductPrice() {

  let searchProductPriceFrom = document.getElementById('search-price-from');
  let searchProductPriceTo = document.getElementById('search-price-to');

  let productArray = JSON.parse(localStorage.getItem('product'));
  
  if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
        return productArray;
  }
  else {
        let productArray = JSON.parse(localStorage.getItem('product'));
        let searchProductPriceArray = [];
        for(let i = 0; i < productArray.length; i++) {
              if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                    searchProductPriceArray.push(productArray[i]);
              }
        }
        return searchProductPriceArray;
  }
}
function searchProductPriceUser() {

  let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
  let searchProductPriceTo = document.getElementById('user-page-search-price-to');

  let productArray = JSON.parse(localStorage.getItem('product'));
  
  if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
        return productArray;
  }
  else {
        let productArray = JSON.parse(localStorage.getItem('product'));
        let searchProductPriceArray = [];
        for(let i = 0; i < productArray.length; i++) {
              if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                    searchProductPriceArray.push(productArray[i]);
              }
        }
        return searchProductPriceArray;
  }
}


