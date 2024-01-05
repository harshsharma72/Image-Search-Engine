const apiKey = `NCwFQNPasYjitFfW-lfIfxa6SAuvYiSorOSu2-j4ufA`;

let searchBox = document.querySelector("#search-box");
let searchBtn = document.querySelector("#search-btn");
let searchResult = document.querySelector("#search-result");
let showMoreBtn = document.querySelector("#show-more-btn");
let searchForm = document.querySelector("#search-form");

let page = 1;
let keyword = "";

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;
  const res = await fetch(url);
  let data = await res.json();
  let results = data.results;
  if (page === 1) {
    searchResult.innerHTML = "";
  }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (el) => {
  el.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
