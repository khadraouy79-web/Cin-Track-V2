import { fetchFilms } from "./api.js";

fetchFilms()

  .then(data => {
     if (data === null) return;
  const adminCard = document.querySelector("#adminCard");
  const titleCard = document.querySelector("#titleCard")
  const typeCard = document.querySelector("#typeCard");
  const dateCard = document.querySelector("#dateCard");

  function displayFilms(films) {
    adminCard.innerHTML="";
    typeCard.innerHTML="";
    dateCard.innerHTML="";

    films.forEach(film => {

    const card = document.createElement("article");
    card.className = "card movie-card flex";

    const image = document.createElement("img");
    image.src = film.image;
    image.alt = film.title;
    image.className = "w-10 h-10 object-cover";


    const title = document.createElement("div");
    title.textContent = film.title;
    title.className = "text-xl font-bold h-10 text-white";


    const type = document.createElement("div");
    type.textContent = film.type;
    type.className = "text-xl font-bold h-10 text-white";

    const date = document.createElement("div");
    date.textContent = film.releaseYear;
    date.className = "text-xl font-bold h-10 text-white";


     card.append(image, title);
     adminCard.append(card);
     typeCard.append(type);
     dateCard.append(date);
   
    })
     
}

 displayFilms(data);
    

});

