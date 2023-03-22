export const items = [];

const ApiLinks = {
  Breeds: "https://dog.ceo/api/breeds/list/all",
  Images: `https://dog.ceo/api/breed//images/random`,
};

async function getImage(URL) {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${URL}/images/random`
    );
    const image = await response.json();
    //console.log(`status code: ${response.status}`);
    return image.message;
  } catch (error) {
    console.log(error);
  }
}

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const object = await response.json();
    const Data = object.message;
    const primaryBreeds = Object.keys(Data);
    console.log(primaryBreeds);
    return primaryBreeds;
  } catch (error) {
    console.log(error);
  }
}

async function parentInserter(breed) {
  let image = await getImage(breed);
  console.log(image);
  return image;
}

export function startUp() {
  getData(ApiLinks.Breeds).then((data) => {
    data.forEach((breed) => {
      const image = parentInserter(breed);
      const dog = {
        breed: breed,
        image: image,
      };
      items.push(dog);
    });
    console.log(items);
  });
}
