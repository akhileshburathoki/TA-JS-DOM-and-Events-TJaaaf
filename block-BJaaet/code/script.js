let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(".movies-list");

let allMovies = [
  {
    name: "movie",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI();
  }
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
}


function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    li.classList.add("flex");
    let input = document.createElement("input");
    input.classList.add("checkbox");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;
    input.addEventListener('click', handleChange); 
    let p = document.createElement("p");
    p.for = i;
    p.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.addEventListener('click', deleteMovie) 
    span.setAttribute("data-id", i);
    li.append(input, p, span);
    rootElm.append(li);
  });
}