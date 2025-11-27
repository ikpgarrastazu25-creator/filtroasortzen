const products = [
  {
    productName: "Kamiseta beltza",
    price: 15,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DbSMckrVL5R5YwwaFCEWiq6FMhipVnX4rg&s",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: 15,
    img: "https://static.vecteezy.com/system/resources/previews/021/104/109/non_2x/white-t-shirt-free-png.png",
    category: 'kamisetak'
  },
  {
    productName: "Sudadera txuria",
    price: 30,
    img: "https://static.vecteezy.com/system/resources/previews/009/257/254/original/white-hoodie-mockup-cutout-file-png.png",
    category: 'sudaderak'
  },
  {
    productName: "Kompua",
    price: 40,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt88d9dJBBmsvB5UUL6xY9via7FXJ-2l_jA&s",
    category: 'kompuak'
  },
  {
    productName: "Arraultza",
    price: 50,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710611492/e-commerce/huevo_uau0bz.png",
    category: 'frutak'
  },
  {
    productName: "Mate",
    price: 60,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710611821/e-commerce/ksmw5s3xg7eeakpva5xd_r9ood6.png",
    category: 'edariak'
  },
  {
    productName: "Kafea",
    price: 70,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710612106/e-commerce/cafesitoo_oewcna.png",
    category: 'edariak'
  },
  {
    productName: "Garagardoa",
    price: 20,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699869747/e-commerce/xhlekqrockwxzjskzppw.png",
    category: 'edariak'
  },
]

/*function displayProducts(productsToShow) {
  const shopContent = document.getElementById("shopContent");

  shopContent.innerHTML = "";

  productsToShow.forEach(function(product) {
    const div = document.createElement("div");
    div.className = 'card-products';
    div.innerHTML = `
      <img src="${product.img}" alt="algun-alt">
      <h3>${product.productName}</h3>
      <p class="price"> $ ${product.price}</p>
      <button>Karritora gehitu</button>
    `;
    shopContent.append(div);
  });
}*/


const displayProducts = (productsToShow) => {
  const shopContent = document.getElementById("shopContent")

  shopContent.innerHTML = ""
  productsToShow.forEach(product => {
    const div = document.createElement("div")
    div.className = 'card-products'
    div.innerHTML = `
      <img src="${product.img}" alt="algun-alt">
      <h3>${product.productName}</h3>
      <p class="price"> $ ${product.price}</p>
      <button>Karritora gehitu</button>
    `
    shopContent.append(div)
  })
}

const filterProducts = (category) => {
  const productsToShow = products.filter(product => product.category === category)
  displayProducts(productsToShow)
}

const frutakBtn = document.getElementById('frutakBtn');
const bebidasBtn = document.getElementById('garagardoakBtn');
const kompuakBtn = document.getElementById('kompuakBtn');
const denakBtn = document.getElementById('denakBtn');

/*
frutakBtn.addEventListener('click', function() {
  filterProducts('frutak');
});
*/

frutakBtn.addEventListener('click', () => {
  filterProducts('frutak');
});


garagardoakBtn.addEventListener('click', () => {
  filterProducts('edariak');
});

kompuakBtn.addEventListener('click', () => {
  filterProducts('kompuak');
});

denakBtn.addEventListener('click', () => {
  displayProducts(products)
});

displayProducts(products)