import { mainContainer } from "../index.js";
import { getCookie } from "../index.js";
import { setCookie } from "../index.js";
import { openModal } from "../index.js";

export default class Main {
  create() {
    const main = document.createElement("main");
    main.classList.add("main");
    mainContainer.appendChild(main);
    const element = document.querySelector(".app");
    element.appendChild(mainContainer);
  }

  // main
  mainPage() {
    const mainContainer = document.querySelector(".container");
    mainContainer.innerHTML = "";
    mainContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <div class = 'pageName'>
          <h1 class = 'main_h1'> MAIN </h1>
        </div>
        <div class = 'mainBlock'>
            <div class = 'girlImg'>
              <img class = 'mainPic' src='./img/main_pic.jpg' alt='girl'>
              <img class = 'mainPic2' src = './img/main_pic2.jpg' alt='girl'>
              <img class = 'mainPic3' src = './img/main_pic3.jpg' alt='girl'>
            </div>

            <div class = 'mainText'>
              <h2 class = 'main_h2'>PILLA BOUTIQ</h2>
               <p class = 'main_p'>
                 In 1853 Ole Andreas Devold embarked on his journey, and since then our 
                 wool has been formed in the roughest conditions. Today, we build on our 
                 tradition of mastering wool. Relying on our dedication to craftmanship, 
                 we develop the finest quality from the most robust material. Crafted to 
                 withstand storms and to comfort on late summer nights. With profound care 
                 for nature, we create knitwear that lasts, that can be passed on – a legacy 
                 for times to come.
               </p>
            </div>
        </div>

        <hr class = 'hr'>

        <div class = 'chooseStyle'>
          <h4 class = 'choose_h4'>CHOOSE YOUR STYLE</h4>
          <div class = 'stSt_block'>

          <div class = 'streetCarousel'>
           <div class="carouselWrapper">
            <p id="left" class="arrow">ᐸ</p>
             <div class="carousel">
              <img src="img/s1.jpg" alt="model">
              <img src="img/l1.jpg" alt="model">
              <img src="img/s2.jpg" alt="model">
              <img src="img/l2.jpg" alt="model">
              <img src="img/s3.jpg" alt="model">
              <img src="img/l3.jpg" alt="model">
              <img src="img/s4.jpg" alt="model">
              <img src="img/l4.jpg" alt="model">
              <img src="img/s5.jpg" alt="model">
              <img src="img/l5.jpg" alt="model">
              <img src="img/s6.jpg" alt="model">
              <img src="img/l6.jpg" alt="model">
              <img src="img/s7.jpg" alt="model">
              <img src="img/l7.jpg" alt="model">
              <img src="img/s8.jpg" alt="model">
              <img src="img/l8.jpg" alt="model">
              <img src="img/s9.jpg" alt="model">
              <img src="img/l9.jpg" alt="model">
              <img src="img/s10.jpg" alt="model">
              <img src="img/l10.jpg" alt="model">
             </div>
            <p id="right" class="arrow">ᐳ</p>
           </div>
          </div>

          <div class = 'textCollection'>
            <div class = 'textCol_block'>
              <p class = 'textNew'>NEW COLLECTION</p>
              <div class = 's_p'>
               <p class = 'textNew'>SOON</p>
               <p class = 'textNew p_text'>PILLA</p>
              </div>
            </div>
          </div>
        </div>

        </div>
        `
    );

    // карусель 
    let carousel = document.querySelector(".carousel"),
      firstImg = carousel.querySelectorAll("img")[0],
      arrowIcons = document.querySelectorAll(".carouselWrapper p");

    let isDragStart = false,
      isDragging = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;
    const showHideIcons = () => {
      let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
      arrowIcons[1].style.display =
        carousel.scrollLeft == scrollWidth ? "none" : "block";
    };

    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft +=
          icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
      });
    });

    let autoSlide = () => {
      if (
        carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) >
          -1 ||
        carousel.scrollLeft <= 0
      )
        return;
      positionDiff = Math.abs(positionDiff);
      let firstImgWidth = firstImg.clientWidth + 14;
      let valDifference = firstImgWidth - positionDiff;

      if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft +=
          positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
      }
      carousel.scrollLeft -=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    };

    let dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    let dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      carousel.classList.add("dragging");
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
      showHideIcons();
    };

    let dragStop = () => {
      isDragStart = false;
      carousel.classList.remove("dragging");
      if (!isDragging) return;
      isDragging = false;
      autoSlide();
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    document.addEventListener("mousemove", dragging);

    carousel.addEventListener("touchmove", dragging);
    document.addEventListener("mouseup", dragStop);

    carousel.addEventListener("touchend", dragStop);

  }

  productCard = (data) => {
    let counter = 1;

    const block = document.createElement("div");
    block.classList.add("block");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("modal-image-block");

    const img = new Image(250);
    img.src = data.image;
    imgWrapper.appendChild(img);
    img.classList.add("imgOnCard");
    block.appendChild(imgWrapper);

    const title = document.createElement("h2");
    title.innerText = data.title;
    title.classList.add("title");

    const counterBlock = document.createElement("div");
    counterBlock.classList.add("counter-block");
    block.appendChild(counterBlock);

    const countMinus = document.createElement("span");
    countMinus.innerText = "-";

    const countPlus = document.createElement("span");
    countPlus.innerText = "+";

    const countText = document.createElement("div");
    countText.innerText = counter;

    countMinus.addEventListener("click", () => {
      if (counter > 1) {
        counter--;
        countText.innerText = counter;
      }
    });

    countPlus.addEventListener("click", () => {
      counter++;
      countText.innerText = counter;
    });

    counterBlock.appendChild(countMinus);
    counterBlock.appendChild(countText);
    counterBlock.appendChild(countPlus);

    const btnAdd = document.createElement("button");
    btnAdd.innerText = "Add to cart";
    btnAdd.classList.add("addToCart");

    btnAdd.addEventListener("click", () => {
      const cartList = getCookie("cart") || [];
      if (cartList?.find((item) => item.id === data.id)) {
        alert("This product has already been added to the cart.");
      } else {
        cartList.push({
          id: data.id,
          count: counter,
        });
        setCookie("cart", cartList);
      }
    });
    block.appendChild(btnAdd);

    return block;
  };

  // products
  products = async (data) => {
    mainContainer.innerHTML = "";
    mainContainer.insertAdjacentHTML(
      "afterbegin",
      `
            <h1> PRODUCTS </h1>
        `
    );
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards-wrapper");
    let products;
    if (localStorage.getItem("products")) {
      products = await JSON.parse(localStorage.getItem("products")); 
    } else {
      const response = await fetch("https://fakestoreapi.com/products");
      products = await response.json(); 

      localStorage.setItem("products", JSON.stringify(products)); 
    }

    await products.map((item) => {
      const cardItem = document.createElement("div");
      cardItem.classList.add("card");

      const cardIns = document.createElement("div");
      cardIns.classList.add("cardIns");
      cardItem.appendChild(cardIns);

      const imgItem = new Image(300);
      imgItem.src = item.image;
      cardIns.appendChild(imgItem);

      const title = document.createElement("h3");
      title.innerText = item.title;
      title.classList.add("title_h3");
      cardIns.appendChild(title);

      const price = document.createElement("div");
      price.innerText = item.price + "$";
      price.classList.add("price_card");
      cardIns.appendChild(price);

      cardIns.addEventListener("click", () => {
        location.hash = `#products/${item.id}`;
      });
      cardsContainer.appendChild(cardItem);
    });
    mainContainer.appendChild(cardsContainer);

    if (location.hash !== "#products") {
      const productId = location.hash.replace("#products/", ""); 
      const product = products.find((item) => item.id == productId);
      console.log(product);

      if (product) {
        const productHtml = this.productCard(product, data.cartList);
        openModal(productHtml);
      } else {
        alert("Sorry. This product is not available now.");
      }
    }
  };

  getTotalPrice = (products) => {
    const cart = getCookie("cart");

    let total = 0;
    cart.map((item) => {
      const currentProduct = products.find((product) => product.id === item.id);
      total += currentProduct.price * item.count;
    });
    return total.toFixed(2);
  };

  // cart
  cart = (data) => {
    mainContainer.innerHTML = "";
    mainContainer.insertAdjacentHTML(
      "afterbegin",
      `
            <h1> CART </h1>
        `
    );

    const totalPrice = document.createElement("div");
    totalPrice.classList.add("total-price");

    const products = JSON.parse(localStorage.getItem("products"));
    const cartList = getCookie("cart");

    cartList?.map((cartItem) => {
      const currentProduct = products.find((item) => item.id === cartItem.id);
      console.log(currentProduct);

      const counterBlock2 = document.createElement("div");
      counterBlock2.classList.add("counter-block2");

      const countMinus = document.createElement("span");
      countMinus.innerText = "-";

      const countPlus = document.createElement("span");
      countPlus.innerText = "+";

      const countText = document.createElement("div");
      countText.innerText = cartItem.count;

      countMinus.addEventListener("click", () => {
        if (cartItem.count > 1) {
          cartItem.count--;
          countText.innerText = cartItem.count;
          price.innerHTML = (cartItem.count * currentProduct.price).toFixed(2); 
          setCookie("cart", cartList);
          totalPrice.innerText =
            "Total price " + this.getTotalPrice(products) + "$";
        }
      });

      countPlus.addEventListener("click", () => {
        cartItem.count++;
        countText.innerText = cartItem.count;
        price.innerHTML = (cartItem.count * currentProduct.price).toFixed(2);
        setCookie("cart", cartList);
        totalPrice.innerText =
          "Total price " + this.getTotalPrice(products) + "$";
      });

      counterBlock2.appendChild(countMinus);
      counterBlock2.appendChild(countText);
      counterBlock2.appendChild(countPlus);

      const productCartBlock = document.createElement("div");
      productCartBlock.classList.add("productCartBlock");
      mainContainer.appendChild(productCartBlock);

      const title = document.createElement("h2");
      title.innerHTML = currentProduct.title;
      title.classList.add("title");
      productCartBlock.appendChild(title);

      const imgItem = new Image();
      imgItem.src = currentProduct.image;
      imgItem.classList.add("imgItemCart");
      productCartBlock.appendChild(imgItem);

      const price = document.createElement("div");

      const priceCount = cartItem.count * currentProduct.price;
      price.innerHTML = '$' + priceCount;
      price.classList.add("price");
      productCartBlock.appendChild(price);

      const textCounterRemove = document.createElement("div");
      textCounterRemove.classList.add("textCounterRemove");
      productCartBlock.appendChild(textCounterRemove);

      const desc = document.createElement("p");
      desc.innerHTML = currentProduct.description;
      desc.classList.add("desc");
      textCounterRemove.appendChild(desc);

      const counterRemove = document.createElement("div");
      counterRemove.classList.add("counterRemove");
      textCounterRemove.appendChild(counterRemove);

      counterRemove.appendChild(counterBlock2);

      const btnRemove = document.createElement("button");
      btnRemove.classList.add("remove");
      btnRemove.innerText = "Remove item";

      btnRemove.addEventListener("click", () => {
        const filteredCartList = cartList.filter(
          (item) => item.id !== cartItem.id
        );
        setCookie("cart", filteredCartList);
        this.cart(data);
      });
      counterRemove.appendChild(btnRemove);

      const buyBlock = document.createElement("div");
      buyBlock.classList.add("buyBlock");
      mainContainer.appendChild(buyBlock);

      totalPrice.innerText = "Total price " + this.getTotalPrice(products) + "$";
      buyBlock.appendChild(totalPrice);
    });
  };

  init() {
    this.create();
  }
}
