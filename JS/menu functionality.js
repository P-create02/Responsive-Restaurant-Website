// DYNAMIC MENU IN JS
const menu = [
    {
        id: 1,
        title: "Simply Breakfast",
        category: "first-courses",
        price: 25,
        img: "./img/first-courses.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
    {
        id: 2,
        title: "Chamburger",
        category: "first-courses",
        price: 29,
        img: "./img/first-courses2.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
    {
        id: 3,
        title: "Sandwich",
        category: "first-courses",
        price: 19,
        img: "./img/first-courses3.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
    {
        id: 4,
        title: "Stek",
        category: "main-courses",
        price: 35,
        img: "./img/main-courses.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
    {
        id: 5,
        title: "Burger With Fries",
        category: "main-courses",
        price: 35,
        img: "./img/main-courses2.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
    {
        id: 6,
        title: "Ribs",
        category: "main-courses",
        price: 39,
        img: "./img/main-courses3.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
    {
        id: 7,
        title: "Fruits Pancakes",
        category: "desserts",
        price: 22,
        img: "./img/desserts.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
    {
        id: 8,
        title: "Oreo Shake",
        category: "desserts",
        price: 15,
        img: "./img/desserts2.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error soluta laborum maiores beatae non sunt sint.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function(){
    ChooseMenuItem(menu.slice(0, 3));
    MakeMenuBtns();
});

// Create Menu Items
function ChooseMenuItem(ChooseItem){
    let displayMenu = ChooseItem.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h3 class="name-item">${item.title}</h3>
                <h3 class="price">${item.price}PLN</h3>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`
    }).join("");

    sectionCenter.innerHTML = displayMenu;
}

// Create Menu Buttons
function MakeMenuBtns(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, []); // }, ["drinks", "wine"]); in here you can push yours buttons if you want

    const categoryBtns = categories.map(function(category){
        return `<button class="fliter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll(".fliter-btn");
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;

            const menuCategory = menu.filter(function(menuItem){
                if(category === menuItem.category){
                    return menuItem;
                }
            });
            ChooseMenuItem(menuCategory);
        });
    });
}