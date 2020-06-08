//add product to cart
function addProductToCart(buttonID) {
    cart = document.getElementById("rightDiv");
    switch (buttonID) {
        case "addFlakes":
            qty = document.getElementById("flakeQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Flakes: "+qty+" Price: <strong class='price'>" +(50*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addWeed":
            qty = document.getElementById("weedQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Weed: "+qty+" Price: <strong class='price'>"+(20*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addPebbles":
            qty = document.getElementById("pebbleQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Pebbles: "+qty+" Price: <strong class='price'>"+(30*Number(qty)) +"</strong>";
            console.log(addHTML);
            cart.insertBefore(addHTML, document.getElementById("checkOut"));
            break;
        case "addRocks":
            qty = document.getElementById("rockQty").value;
            addHTML = document.createElement("p");
            addHTML.className="orderedProducts";
            addHTML.innerHTML = "Rock: "+qty+" Price: <strong class='price'>"+(59.69*Number(qty)) +"</strong>";
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


    cross.onclick = function() {
        modal.style.display = "none";
    }


// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    //Take everything from shopping cart
    cart = document.getElementById("rightDiv");
    items = document.getElementsByClassName("orderedProducts");
    //invoicePlace is the place we add items in
    invoicePlace = document.getElementById("invoicePlace");
    i = 0;
    text = "<h2>Invoice</h2>";
    while (i<items.length){
        text += "<p>"+items[i].innerHTML+"</p>";
        i++;
    }

    //calculate total
    total = 0;
    i = 0;
    prices = document.getElementsByClassName("price");
    while (i<prices.length){
        console.log(prices[i].innerText);
        total += Number(prices[i].innerText);
        i++;
    }
    text += "<p>Total: $"+total+"</p>";
    invoicePlace.innerHTML = text;
}

function showBtnPrice(e) {
    nextDiv = e.nextElementSibling;
    nextDiv.style.display="block";
}

function hideBtnPrice(e) {
    nextDiv = e.nextElementSibling;
    nextDiv.style.display="none";
}

function hideThisPrice(e) {
    e.style.display="none";
}
function keepBtnPrice(e){
    e.style.display="block";
}
