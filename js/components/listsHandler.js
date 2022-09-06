// Handles the behavior of the main filter buttons

export default function listsHandler() {
  const dropdownBtn = document.querySelectorAll('.filters-dropdown button');
  const recipeInput = document.querySelector('#searchbar > input');

  function open(e) {
    close();
    e.target.nextElementSibling.classList.remove('d-none');
    const width = e.target.nextElementSibling.offsetWidth - 10;
    e.target.style.width = `${width}px`;
    e.target.removeEventListener('click', open);
    e.target.nextElementSibling.firstElementChild.lastElementChild.addEventListener('click', close);
    e.target.nextElementSibling.firstElementChild.firstElementChild.focus();
  }

  function close() {
    dropdownBtn.forEach((el) => {
      el.removeAttribute('style');
      el.nextElementSibling.classList.add('d-none');
      el.addEventListener('click', open);
    });
  }

  dropdownBtn.forEach((el) => {
    el.addEventListener('click', open);
  });

  recipeInput.addEventListener('click', close);

  return close();
}
