const products = [
    {
        "id": 1,
        "name": "Broccoli - 1 Kg",
        "price": 120,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
        "category": "vegetables"
    },
    {
        "id": 2,
        "name": "Cauliflower - 1 Kg",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
        "category": "vegetables"
    },
    {
        "id": 3,
        "name": "Cucumber - 1 Kg",
        "price": 48,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
        "category": "vegetables"
    },
    {
        "id": 4,
        "name": "Beetroot - 1 Kg",
        "price": 32,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
        "category": "vegetables"
    },
    {
        "id": 5,
        "name": "Carrot - 1 Kg",
        "price": 56,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
        "category": "vegetables"
    },
    {
        "id": 6,
        "name": "Tomato - 1 Kg",
        "price": 16,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
        "category": "vegetables"
    },
    {
        "id": 7,
        "name": "Beans - 1 Kg",
        "price": 82,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
        "category": "vegetables"
    },
    {
        "id": 8,
        "name": "Brinjal - 1 Kg",
        "price": 35,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
        "category": "vegetables"
    },
    {
        "id": 9,
        "name": "Capsicum",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
        "category": "vegetables"
    },
    {
        "id": 10,
        "name": "Mushroom - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
        "category": "vegetables"
    },
    {
        "id": 11,
        "name": "Potato - 1 Kg",
        "price": 22,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
        "category": "vegetables"
    },
    {
        "id": 12,
        "name": "Pumpkin - 1 Kg",
        "price": 48,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
        "category": "vegetables"
    },
    {
        "id": 13,
        "name": "Corn - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
        "category": "vegetables"
    },
    {
        "id": 14,
        "name": "Onion - 1 Kg",
        "price": 16,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
        "category": "vegetables"
    },
    {
        "id": 15,
        "name": "Apple - 1 Kg",
        "price": 72,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
        "category": "fruits"
    },
    {
        "id": 16,
        "name": "Banana - 1 Kg",
        "price": 45,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
        "category": "fruits"
    },
    {
        "id": 17,
        "name": "Grapes - 1 Kg",
        "price": 60,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
        "category": "fruits"
    },
    {
        "id": 18,
        "name": "Mango - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
        "category": "fruits"
    },
    {
        "id": 19,
        "name": "Musk Melon - 1 Kg",
        "price": 36,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
        "category": "fruits"
    },
    {
        "id": 20,
        "name": "Orange - 1 Kg",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
        "category": "fruits"
    },
    {
        "id": 21,
        "name": "Pears - 1 Kg",
        "price": 69,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
        "category": "fruits"
    },
    {
        "id": 22,
        "name": "Pomegranate - 1 Kg",
        "price": 95,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
        "category": "fruits"
    },
    {
        "id": 23,
        "name": "Raspberry - 1/4 Kg",
        "price": 160,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
        "category": "fruits"
    },
    {
        "id": 24,
        "name": "Strawberry - 1/4 Kg",
        "price": 180,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
        "category": "fruits"
    },
    {
        "id": 25,
        "name": "Water Melon - 1 Kg",
        "price": 28,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
        "category": "fruits"
    },
    {
        "id": 26,
        "name": "Almonds - 1/4 Kg",
        "price": 200,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
        "category": "nuts"
    },
    {
        "id": 27,
        "name": "Pista - 1/4 Kg",
        "price": 190,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg",
        "category": "nuts"
    },
    {
        "id": 28,
        "name": "Nuts Mixture - 1 Kg",
        "price": 950,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/nuts-mixture.jpg",
        "category": "nuts"
    },
    {
        "id": 29,
        "name": "Cashews - 1 Kg",
        "price": 650,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg",
        "category": "nuts"
    },
    {
        "id": 30,
        "name": "Walnuts - 1/4 Kg",
        "price": 170,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/walnuts.jpg",
        "category": "nuts"
    }
]




const renderProducts = (products) => {
    products.forEach(item => {
        $(".list").append(`
        <div class="col">
                    <div class="item">
                        <img src=${item.image}  alt="">
                        <p class="product-name">
                            ${item.name}
                        <p>
                        <div class="rating flex">
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star yellow"></i>
                            <i class="fas fa-star-half-alt yellow"></i>
                        </div>
                        <h3 class="product-price">
                            $${item.price}
                        </h3>
                        <button data-id=${item.id} class="add">Add To Cart</button>
                    </div>
                </div>
        `);
    })
}


const resetList = () => {
    $(".list").empty();
}
/* Search method  */
$(".input-info").keyup(function (e) {

    const searchedName = products.filter(val => val.name.toLowerCase().includes($(".input-info").val().toLowerCase()))
    console.log(searchedName);
    if (!searchedName.length) {
        $(".list").text(`No product found, please re - enter! 😥`).css({
            fontSize: 24,
            fontWeight: 'bold',
        })
        return
    }
    resetList();
    renderProducts((searchedName));

});
$(".cart-dropdown").hide();
$(".cart-dropdown").css("position", "absolute");


/* $(".right-cart").hover(function () {

    $(".cart-icon").css("background", "black");
    $(".cart-icon").css("color", "white");

    $(".cart-dropdown").show(500);


}, function () {
    // out
    $(".cart-dropdown").fadeOut(500);
    $(".cart-icon").css("background", "none");
    $(".cart-icon").css("color", "#333");

}
); */

$(".cart-icon").click(function (e) {
    e.preventDefault();
    $(".cart-dropdown").toggle(500);
});
//Add cart
const cart = [];
products.forEach((item) => {
    item.quantity = 0;
})
$(document).click(function (e) {
    e.preventDefault();
    if ($(e.target).hasClass("add")) {
        const id = $(e.target).data("id");
        console.log(id);
        const isExist = cart.findIndex(val => val.id === id);
        const item = products.find(val => val.id === id);
        if (!item) {
            return
        }
        if (isExist === -1) {
            item.quantity = 1;
            cart.push(item);
        } else {
            item.quantity++;
        }
        console.log(cart);
        resetCart();
        renderCart(cart);

    }
});
const resetCart = () => {
    $(".cart-list").empty();
}
const renderCart = (cart) => {
    resetCart();
    if (!cart.length) {
        $(".cart-list").append(`
        <div style="opacity:0.3; height:200px; width: 180px ;display: flex; align-items: center; justify-content: center ">
        <h2>No items</h2>
        </div>
        `);
        $(".btn-checkout").css("opacity", "0.3");
        $(".btn-checkout").css("pointer-events", "none")
    }
    else {
        $(".btn-checkout").css("opacity", "1");
        $(".btn-checkout").css("pointer-events", "")
    }

    cart.forEach(item => {
        $(".cart-list").append(`
        <div class="added-item flex no-wrap a-center ">
                            <div>
                                <img src="${item.image}"
                                    alt="">
                                <h4>${item.name}</h4>
                                <span>${item.price}$</span>
                            </div>
                            <div class="quantity">
                                <p>Quantity:${item.quantity}</p>
                                <p>$${item.quantity * item.price}</p>
                            </div>
                            <div data-id=${item.id} class="remove">
                                <i  class="fas fa-trash-alt"></i>
                            </div>
                        </div>
        `);
    })
    $(".item-nos").text(cart.length);
    let totals = cart.reduce((acc, val) => acc + val.price * val.quantity, 0);
    //console.log(totals);
    $(".item-total").text(`$${totals}`);
}
$(document).on("click", function (e) {
    const target = $(e.target).closest(".cart-dropdown").length;

    console.log($(e.target).closest(".cart-dropdown"));
    const cartIcon = $(e.target).closest(".cart-icon").length;
    const addBtn = $(e.target).closest(".add").length;
    const removeBtn = $(e.target).closest(".remove").length;
    if (!target && !cartIcon && !addBtn && !removeBtn)
        $(".cart-dropdown").slideUp();

})
renderProducts(products);
renderCart(cart);
$(document).on("click", ".remove", function () {

    const id = $(this).data("id");
    console.log(id);
    var idx = cart.findIndex(val => val.id === id);
    cart.splice(idx, 1);
    renderCart(cart);


})



