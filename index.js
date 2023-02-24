// // fetching API from any url and by using promise
// we access them

const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");
const fetchdata = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (h1.innerText = data.fact))
    .catch((e) => console.log("some error !!"))
    .finally(() => console.log("all done"));
};
fetchdata();
