
const fromcard1 = document.getElementById("fromcard1");
const fromcard2 = document.getElementById("fromcard3");
const fromcard3 = document.getElementById("fromcard3");

// fromcard1.addEventListener("mouseover", function() {
//     fromcard2.style.transform = "translateX(100px)";
// });

// fromcard2.addEventListener("mouseover", function() {
//     fromcard3.style.transform = "translateX(100px)";
// });

// fromcard3.addEventListener("mouseover", function() {
//     fromcard3.style.transform = "translateX(0px)";
// });

// fromcard1.addEventListener("mouseout", function() {
//     fromcard2.style.transform = "translateX(0px)";
// });

// fromcard2.addEventListener("mouseoout", function() {
//     fromcard3.style.transform = "translateX(0px)";
// });


fromcard1.addEventListener("mouseover", function() {
        fromcard2.style.left = "220px";
    });

fromcard1.addEventListener("mouseout", function() {
        fromcard2.style.left = "170px";
    });
    
fromcard2.addEventListener("mouseover", function() {
        fromcard3.style.left = "410px";
    });

fromcard2.addEventListener("mouseout", function() {
        fromcard3.style.left = "290px";
    });
    
fromcard3.addEventListener("mouseover", function() {
        fromcard3.style.left = "260px";
    });

fromcard3.addEventListener("mouseout", function() {
        fromcard3.style.left = "290px";
    });