console.log("I'm alive");

const BASE_URL = "https://www.fakeurl.com";

async function main() {
  const nodes = [];
  const container = document.getElementById("app");
  const response = await window.fetch(BASE_URL + "/route");
  const data = await response.json();
  data.forEach((item) => {
    console.log(item);
  });
}

main();
