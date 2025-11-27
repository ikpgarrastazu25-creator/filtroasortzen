const products = [
  {
    productName: "Sandia",
    price: 15,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699869750/e-commerce/ksmw5s3xg7eeakpva5xd.png",
    category: 'frutak'
  },
  {
    productName: "Bananita",
    price: 30,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699871193/e-commerce/mopgcvdiepr8axkazmcp.png",
    category: 'frutak'
  },
  {
    productName: "CPU",
    price: 80,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1710612297/e-commerce/cpu_awimlt.png",
    category: 'kompuak'
  },
  {
    productName: "Kompua",
    price: 40,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1700045911/e-commerce/compu_unvcoi.png",
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