const APP_ID = "bb016f59";
const APP_KEY = "aff67015bacbcb07f357aa52df582fa7";
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchResult = document.querySelector(".meals-area");
let searchInputTxt = "";

searchBtn.addEventListener("click", () => {
  searchInputTxt = searchInput.value.trim();
  fetchApi();
});

async function fetchApi() {
  const baseURL = `https://api.edamam.com/search?q=${searchInputTxt}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
}

function generateHTML(results) {
  let html = "";
  results.map((result) => {
    html += `

    <div class="meals-card">
      <img src="${result.recipe.image}" alt="food" />
      <div class="meal-title">
        <h2>${result.recipe.label}</h2>
      </div>
      <button class="btn"><a href="${result.recipe.url}">Get recipe</a></button>
    </div>

        `;
  });
  searchResult.innerHTML = html;
}
