const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        buttons.forEach((btn) =>{
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;
        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() =>{
            image.classList.toggle("changing");
        }, 200);

    });
});

// Código antigo

// 


// const colorGreen = document.querySelector('#green');
// const colorSilver = document.querySelector('#silver');
// const colorGrafite = document.querySelector('#grafite');
// const colorGolden = document.querySelector('#golden');
// const colorBlue = document.querySelector('#blue');

// colorGreen.addEventListener("click", (e) => {
//     const imageModel = document.querySelector("#product-image");
//     imageModel.src = `img/iphone_green.jpg`;
// });

// colorSilver.addEventListener("click", (e) => {
//     const imageModel = document.querySelector("#product-image");
//     imageModel.src = `img/iphone_silver.jpg`;
// });

// colorGolden.addEventListener("click", (e) => {
//     const imageModel = document.querySelector("#product-image");
//     imageModel.src = `img/iphone_golden.jpg`;
// });

// colorGrafite.addEventListener("click", (e) => {
//     const imageModel = document.querySelector("#product-image");
//     imageModel.src = `img/iphone_grafite.jpg`;
// });

// colorBlue.addEventListener("click", (e) => {
//     const imageModel = document.querySelector("#product-image");
//     imageModel.src = `img/iphone_blue.jpg`;
// });