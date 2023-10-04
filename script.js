const accessKey = "NCwFQNPasYjitFfW-lfIfxa6SAuvYiSorOSu2-j4ufA";
let searchform = document.querySelector("#search-form");
let searchtext = document.querySelector("#search-text");
let searchresult = document.querySelector("#search-result");
let showmorebtn = document.querySelector("#show-more");
let page = "1";
let keyword = "";
async function searchImages(){
    keyword = searchtext.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    if(page === 1){
        searchresult.innerHTML = "";
    }
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    });
    showmorebtn.style.display = "block";
}
searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
showmorebtn.addEventListener("click", () => {
    page++;
    searchImages();
})