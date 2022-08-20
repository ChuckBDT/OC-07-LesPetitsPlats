const test = document.querySelector(".dropdown-ingredients");
const test2 = document.getElementById("search-field");

console.log(test);
console.log(test2);

test.addEventListener("click", function() {
    test2.classList.remove("d-none");
});