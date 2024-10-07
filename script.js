const itens = document.getElementById("itens")


const arr = [
    { img: "img/bread-barrel.jpg", title: "Bread Barrel", desc: "Lorem, deren, trataro, filede, nerada" },
    { img: "img/img3.jpg", title: "Tuscan Grilled", desc: "Lorem, deren, trataro, filede, nerada" },
    { img: "img/img2.jpg", title: "Crab Cake", desc: "Lorem, deren, trataro, filede, nerada" }
];

currentIndex = 0;
function current(){
    const img = document.getElementById("img")
    const title = document.querySelector("h4")
    const desc = document.querySelector("span")

    img.src = arr[currentIndex].img
    title.textContent = arr[currentIndex].title
    desc.textContent = arr[currentIndex].desc
}

document.getElementById("left").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? arr.length - 1 : currentIndex - 1;
    current();
});

document.getElementById("right").addEventListener("click", () => {
    currentIndex = (currentIndex === arr.length - 1) ? 0 : currentIndex + 1;
    current();
});

current();