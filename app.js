const sectionItems = document.querySelector(".menu__items");
const menuButtons = document.querySelector(".menu__buttons");

// Items
const menu = [
  {
    id: 1,
    title: "Green Curry",
    category: "curry",
    price: 6,
    img: "images/menuImage1.webp",
    desc: "Chicken in green curry with coconut milk, broccoli and green beans, accompanied with steamed rice.",
  },
  {
    id: 2,
    title: "Pumpkin Curry",
    category: "curry",
    price: 5,
    img: "images/menuImage2.webp",
    desc: "Pumpkin and tofu in yellow curry with coconut milk, carrot, spinach, caramelized onion, served with steamed rice.",
  },
  {
    id: 3,
    title: "Shrimp Curry",
    category: "curry",
    price: 8,
    img: "images/menuImage3.webp",
    desc: "Prawns in yellow curry with coconut milk, roasted onions, lychees and pumpkin. Accompanied with steamed rice.",
  },
  {
    id: 4,
    title: "Red Curry",
    category: "curry",
    price: 6,
    img: "images/menuImage4.webp",
    desc: "Pork in red curry with coconut milk, peanuts, carrots and aubergines. Accompanied with steamed rice.",
  },
  {
    id: 5,
    title: "Pad Thai Veggie",
    category: "wok",
    price: 5,
    img: "images/menuImage5.webp",
    desc: "Stir-fried rice noodles with vegetables, tofu, peanuts, egg and our tamarind-based sauce.",
  },
  {
    id: 6,
    title: "Pad Thai with Pollo",
    category: "wok",
    price: 6,
    img: "images/menuImage6.webp",
    desc: "Stir-fried rice noodles with chicken, vegetables, tofu, peanuts, egg and our tamarind-based sauce.",
  },
  {
    id: 7,
    title: "Pad Thai with Prawns",
    category: "wok",
    price: 6,
    img: "images/menuImage7.webp",
    desc: "Stir-fried rice noodles with prawns, vegetables, tofu, peanuts, egg and our tamarind-based sauce.",
  },
  {
    id: 8,
    title: "Yamani Power Salad",
    category: "salad",
    price: 4,
    img: "images/menuImage8.webp",
    desc: "Roasted beetroot salad with rosemary, yamaní rice, roasted mushrooms, spinach, cashews, ricotta and seeds.",
  },
  {
    id: 9,
    title: "Thai Salad",
    category: "salad",
    price: 4,
    img: "images/menuImage9.webp",
    desc: "Mix of green leaves, cabbage, carrot pickles, turnip, avocado, scallion, radish, coriander, mint, ginger, peanuts and seeds",
  },
  {
    id: 10,
    title: "Steamed Rice Salad",
    category: "salad",
    price: 4,
    img: "images/menuImage10.webp",
    desc: "Steamed rice, broccoli, mushrooms, green beans, carrot and egg mollet salad.",
  },
  {
    id: 11,
    title: "Coca-Cola Original 354 ml",
    category: "beverage",
    price: 1.5,
    img: "images/menuImage11.png",
    desc: "Soda.",
  },
  {
    id: 12,
    title: "Sprite Lemon 354 ml",
    category: "beverage",
    price: 1.5,
    img: "images/menuImage12.png",
    desc: "Soda.",
  },
];

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
      <article class="menu__items__item">
        <img src="${item.img}"  class="menu__item-image" alt="${item.title}">
        <div class="menu__item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="menu__item-price">${formatCurrency(item.price)}</h4>
          </header>
          <p class="menu__item-description">
                ${item.desc}
            </p>
        </div>
    </article>`;
    })
    .join("");
  sectionItems.innerHTML = displayMenu;
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
      return `<button class="menu__button__buttons" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  menuButtons.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".menu__button__buttons");
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

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimunFractionDigits: 2,
  });
};
