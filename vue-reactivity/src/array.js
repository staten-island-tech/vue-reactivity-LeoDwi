const items = [];

const ApiLinks = {
  Breeds: "https://dog.ceo/api/breeds/list/all",
  Images: `https://dog.ceo/api/breed/${DOMSelectors.input.value}/images/random`,
};

async function getImage(URL) {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${URL}/images/random`
    );
    const image = await response.json();
    console.log(`status code: ${response.status}`);
    return image.message;
  } catch (error) {
    console.log(error);
    clear();
    DOMSelectors.parent.innerHTML = `<p class="error">${error}</p>`;
  }
}

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const object = await response.json();
    const Data = object.message;
    const primaryBreeds = Object.keys(Data);
    console.log(primaryBreeds);
    const subBreeds = Object.values(Data).filter(
      (object) => object.length >= 1
    );
    console.log(subBreeds);
    const data = primaryBreeds.concat(...subBreeds);
    console.log(data);
    return primaryBreeds;
  } catch (error) {
    console.log(error);
    clear();
    DOMSelectors.parent.innerHTML = `<p class="error">${error}</p>`;
  }
}

async function parentInserter(breed) {
  let image = await getImage(breed);
}

function startUp() {
  clear();
  getData(ApiLinks.Breeds).then((data) => {
    data.forEach((breed) => {
      parentInserter(breed);
    });
  });
}
