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
    productName: "Sudadera beltza",
    price: 30,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt88d9dJBBmsvB5UUL6xY9via7FXJ-2l_jA&s",
    category: 'sudaderak'
  },
  {
    productName: "Sudadera grisa",
    price: 30,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqK6fKKVxmBghn5lEb0cepBfVGC_-RUu0uw&s",
    category: 'sudaderak'
  },
  {
    productName: "Zapata beltzak",
    price: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREK7xXmz6QbsNxV0vPUzHZi8TpjFbFBVYCUQ&s",
    category: 'zapatak'
  },
  {
    productName: "Zapata zuriak",
    price: 60,
    img: "https://png.pngtree.com/png-vector/20250115/ourmid/pngtree-men-white-sneakers-classic-and-fashionable-footwear-for-clipart-illustration-png-image_15187292.png",
    category: 'zapatak'
  },
  {
    productName: "Nike zapatak",
    price: 70,
    img: "https://png.pngtree.com/png-vector/20250129/ourmid/pngtree-trendy-nike-dunk-low-shoes-comfortable-top-sneakers-png-image_15363998.png",
    category: 'zapatak'
  },
  {
    productName: "Txakera bakeroa",
    price: 80,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZM2vqH40N0HNFwxhoRtmC5ZhpCiLpPLERQ&s",
    category: 'txaketak'
  },
  {
    productName: "Txakera larruzkoa",
    price: 80,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Fpng%2F46364806-rojo-cuero-chaqueta&psig=AOvVaw07XyGogJIST3zJgWvnLzOO&ust=1764329594681000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMion-WdkpEDFQAAAAAdAAAAABAE",
    category: 'txaketak'
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