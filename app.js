// Items
const menu = [
  {
    id: 1,
    title: "Green Curry",
    category: "curry",
    price: 6,
    img: "url(https://franmbv.github.io/menu/images/menuImage4.webp)",
    desc: "Pollo en curry verde con leche de coco, brócoli y chauchas, acompañado con arroz al vapor.",
  },
  {
    id: 2,
    title: "Pumpkin Curry",
    category: "curry",
    price: 5,
    img: "/images/menuImage2.webp",
    desc: "Calabaza y tofu en curry amarillo con leche de coco, zanahoria, espinaca, cebolla caramelizada, acompañado con arroz al vapor",
  },
  {
    id: 3,
    title: "Shrimp Curry",
    category: "curry",
    price: 8,
    img: "/images/menuImage3.webp",
    desc: "Langostinos en curry amarillo con leche de coco, cebollas asadas, lychees y calabaza.Acompañado con arroz al vapor.",
  },
  {
    id: 4,
    title: "Red Curry",
    category: "curry",
    price: 6,
    img: "/images/menuImage4.webp",
    desc: "Cerdo en curry rojo con leche de coco, maní, zanahorias y berenjenas.Acompañado con arroz al vapor.",
  },
  {
    id: 5,
    title: "Pad Thai Veggie",
    category: "wok",
    price: 5,
    img: "/images/menuImage5.webp",
    desc: "Fideos de arroz saltados con vegetales, tofu, maní, huevo y nuestra salsa a base de tamarindo.",
  },
  {
    id: 6,
    title: "Pad Thai con Pollo",
    category: "wok",
    price: 6,
    img: "/images/menuImage6.webp",
    desc: "Fideos de arroz saltados con pollo, vegetales, tofu, maní, huevo y nuestra salsa a base de tamarindo.",
  },
  {
    id: 7,
    title: "Pad Thai con Langostinos",
    category: "wok",
    price: 6,
    img: "/images/menuImage7.webp",
    desc: "Fideos de arroz saltados con langostinos, vegetales, tofu, maní, huevo y nuestra salsa a base de tamarindo.",
  },
  {
    id: 8,
    title: "Yamani Power Salad",
    category: "salad",
    price: 4,
    img: "/images/menuImage8.webp",
    desc: "Ensalada de remolachas asadas con romero, arroz yamaní, hongos asados, espinaca, castañas de cajú, ricota y semillas.",
  },
  {
    id: 9,
    title: "Thai Salad",
    category: "salad",
    price: 4,
    img: "/images/menuImage9.webp",
    desc: "Mix de hojas verdes, repollo, pickles de zanahoria, nabo, palta, verdeo, rabanito, cilantro, menta, jengibre, maní y semillas",
  },
  {
    id: 10,
    title: "Ensalada de Arroz Al Vapor",
    category: "salad",
    price: 4,
    img: "/images/menuImage10.webp",
    desc: "Ensalada de arroz al vapor, brócolis, hongos, chauchas, zanahoria y huevo mollet.",
  },
  {
    id: 11,
    title: "Coca-Cola Sabor Original 354 ml",
    category: "beverage",
    price: 1.5,
    img: "/images/menuImage11.png",
    desc: "Gaseosa.",
  },
  {
    id: 12,
    title: "Sprite Sabor Limon 354 ml",
    category: "beverage",
    price: 1.5,
    img: "/images/menuImage12.png",
    desc: "Gaseosa.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//Load Items
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuBtns();
});

// Filter Items

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      return `
      <article class="menu-item">
        <img src="${item.img}"  class="photo" alt="${item.title}">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${formatCurrency(item.price)}</h4>
          </header>
          <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;
    })
    .join("");
  sectionCenter.innerHTML = displayMenu;
};

const displayMenuBtns = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((item) => {
        return item.category === category && item.category;
      });
      category === "all"
        ? displayMenuItems(menu)
        : displayMenuItems(menuCategory);
    });
  });
};

const formatCurrency = (value) =>{
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimunFractionDigits: 2,
  });
}
