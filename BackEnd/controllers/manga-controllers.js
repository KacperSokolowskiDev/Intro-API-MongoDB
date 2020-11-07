const Manga = require("../models/manga");

const mangaList = [];

// Create a manga
const addManga = async (request, response) => {
  const { title, author, nbPages } = request.body;

  const newManga = {
    title,
    author,
    nbPages,
  };

  mangaList.push(newManga);
  console.log("Manga list: ", mangaList);

  const createdManga = new Manga({
    title,
    author,
    nbPages,
  });

  try {
    await createdManga.save();
  } catch (error) {
    return new Error("Could not create manga");
  }

  response.json("New manga: " + newManga);
};

// Read manga(s)
const fetchMangas = async (request, response) => {
  console.log("Manga list: ", mangaList);

  let fetchedMangas;

  try {
    fetchedMangas = await Manga.find();
  } catch (error) {
    return new Error("Could not fetch manga");
  }

  response.json(fetchedMangas);
};

// Update a manga
const updateManga = (request, response) => {
  const { title, nbPages } = request.body;

  for (const manga of mangaList) {
    if (manga.title === title) manga.nbPages = nbPages;
  }

  console.log("Manga list: ", mangaList);

  response.json("Update done dude");
};

// Delete a manga
const supressManga = (request, response) => {
  mangaList.pop();
  console.log("Manga list: ", mangaList);

  response.json("Deleted the last manga");
};

// Export unique function
exports.addManga = addManga;

exports.fetchMangas = fetchMangas;

exports.updateManga = updateManga;

exports.supressManga = supressManga;
