import "./styles/index.css";

const BASE_URL = "https://rickandmortyapi.com/api";

function create(element) {
  return document.createElement(element);
}

async function main() {
  const nodes = [];
  const container = document.getElementById("app");
  try {
    const response = await window.fetch(BASE_URL + "/character", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    data.results.forEach((character) => {
      const content = create("div");
      content.className = "character";
      const { name, status, species, gender, image } = character;
      const img = create("img");
      img.src = image;
      const title = create("p");
      title.textContent = name;
      const detailsContent = create("div");
      detailsContent.className = "details";
      const statusP = create("p");
      statusP.textContent = status;
      const speciesP = create("p");
      speciesP.textContent = species;
      const genderP = create("p");
      genderP.textContent = gender;
      detailsContent.append(statusP, speciesP, genderP);
      content.append(img, title, detailsContent);
      nodes.push(content);
    });
    container.append(...nodes);
  } catch (error) {
    console.log(error);
  }
}

main();
