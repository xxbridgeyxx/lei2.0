//add product to cart
function addProductToCart(buttonID) {
    cart = document.getElementById("rightDiv");
    switch (buttonID) {
        //
        // case "addWorm":
        //     qty = document.getElementById("wormQty").value;
        //     addHTML = document.createElement("p");
        //     addHTML.className="orderedProducts";
        //     addHTML.innerHTML = "Worms: "+qty+" Price: <strong class='price'>" +(*Number(qty)) +"</strong>";
        //     console.log(addHTML);
        //     cart.insertBefore(addHTML, document.getElementById("checkOut"));
        //     break;

        case "addFlakes":
            qty = document.getElementById("flakeQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Flake: " + qty + " Price: <strong class='price'>" + (50 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

        case "addPebbles":
            qty = document.getElementById("pebbleQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Milk: " + qty + " Price: <strong class='price'>" + (3 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

        case "addWeed":
            qty = document.getElementById("weedQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Milk: " + qty + " Price: <strong class='price'>" + (3 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

        case "addRocks":
            qty = document.getElementById("rockQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Rock: " + qty + " Price: <strong class='price'>" + (3 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

        case "addBird":
            console.log("addBird");
            qty = document.getElementById("birdQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Bird: " + qty + " Price: <strong class='price'>" + (3 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

        case "addEggs":
            qty = document.getElementById("eggQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Milk: " + qty + " Price: <strong class='price'>" + (3 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

        case "addFish":
            qty = document.getElementById("fishQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Milk: " + qty + " Price: <strong class='price'>" + (3 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;

        case "addMouse":
            qty = document.getElementById("mouseQty").value;
            addHTML = document.createElement("p");
            addHTML.className = "orderedProducts";
            addHTML.innerHTML = "Milk: " + qty + " Price: <strong class='price'>" + (3 * Number(qty)) + "</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;


    }
}

//Popup Invoice

function invoice() {

    modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    cross = document.getElementsByClassName("close")[0];
    console.log(cross);


    cross.onclick = function () {
        modal.style.display = "none";
    }

    //Take everything from shopping cart
    cart = document.getElementById("rightDiv");
    items = document.getElementsByClassName("orderedProducts");
    //invoicePlace is the place we add items in
    invoicePlace = document.getElementById("invoicePlace");
    i = 0;
    text = "<h2>Invoice</h2>";
    while (i < items.length) {
        text += "<p>" + items[i].innerHTML + "</p>";
        i++;
    }

    //calculate total
    total = 0;
    i = 0;
    prices = document.getElementsByClassName("price");
    while (i < prices.length) {
        console.log(prices[i].innerText);
        total += Number(prices[i].innerText);
        i++;
    }
    text += "<p>Total: $" + total + "</p>";
    invoicePlace.innerHTML = text;
}

// if price is more than $300 delivery will be free
function c() {
    priceInput = document.getElementById("priceInput");
    mark = priceInput.value;
    if (prices < 300) { //condition
        prices = "No"; //if condition is true, action pass equals No
    } else { //otherwise
        prices = "Yes"; //action pass equals yes
    }
    showPrice = document.getElementById("showPrice");
    showPrice.innerHTML = prices;

    showPrice = document.getElementById("showPrice")
    // if (mark > 90 && mark <= 100){
    //     grade = "A";
    // }
    // if (mark > 70 && mark <=90){
    //     grade = "B";
    // }
    // if (mark >= 50 && mark <= 70){
    //     grade = "C";
    // }
    // if (mark >= 0 && mark <50){ // && means and
    //     grade = "D";
    // }
    // if (mark>100 || mark <0){ // || means or      ! means not
    //     grade = "Wrong input";
    // }
    if (prices > 100 || prices < 0) {
        showPrice = "Wrong input";
    } else if (showPrice >= 90) {
        prices = "A";
    }

}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function showBtnPrice(e) {
    nextDiv = e.nextElementSibling;
    nextDiv.style.display = "block";
}

function hideBtnPrice(e) {
    nextDiv = e.nextElementSibling;
    nextDiv.style.display = "none";
}

function keepBtnPrice(e) {
    nextDiv.style.display = "block";
}
