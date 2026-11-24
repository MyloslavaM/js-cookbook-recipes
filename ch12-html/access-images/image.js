const imgElements = document.getElementsByTagName("img");
for (let i = 0; i < imgElements.length; i++) {
  const img = imgElements[i];
  console.log(img);
}

const imgs = document.getElementsByTagName("img");
console.log(imgs.length);
const p = document.createElement("p");
const img = document.createElement("img");
img.src = "./img/someimg.jpg";
p.appendChild(img);

const paras = document.getElementsByTagName("p");
paras[0].parentNode.appendChild(p);
console.log(imgs.length);
