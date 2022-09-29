// Handles the behavior of the main filter buttons
export function buttonsStates() {
  const recipesDisplayed = document.querySelectorAll('#recipes article:not(.d-none)').length;
  const noResultAlert = document.querySelector('#noresult-alert');
  const filtersButtons = document.querySelectorAll('.filters-dropdown button');

  filtersButtons.forEach((button) => {
    const listLength = button.nextElementSibling.querySelectorAll('ul li:not(.d-none):not(.no-search)').length;
    switch (recipesDisplayed) {
      case 1:
        button.setAttribute('disabled', 'true');
        noResultAlert.classList.add('d-none');
        break;
      case 0:
        button.setAttribute('disabled', 'true');
        noResultAlert.classList.remove('d-none');
        break;
      default:
        button.removeAttribute('disabled', 'true');
        noResultAlert.classList.add('d-none');
        break;
    }
    if (listLength === 0) button.setAttribute('disabled', 'true');
  });
}

// Handle the open and close states of the main filter buttons
const dropdownBtn = document.querySelectorAll('.filters-dropdown button');
const mediaQueryMedium = window.matchMedia('(max-width: 768px)');

function autoCloseList(event) {
  if (event.target.closest('#filters div')) return;
  closeFiltList();
}

export function closeFiltList() {
  const openedField = document.querySelector('.search-field:not(.d-none)');
  if (openedField != null) {
    const inputField = openedField.querySelector('input');
    openedField.classList.add('d-none');
    openedField.previousElementSibling.removeAttribute('style');
    inputField.value = '';
    inputField.dispatchEvent(new Event('input'));
    document.removeEventListener('click', autoCloseList);
  }
}

function openFiltList(e) {
  const mainSearchInput = document.querySelector('#searchbar > input');
  const openedField = document.querySelectorAll('.search-field:not(.d-none)');
  const inputField = e.target.nextElementSibling.firstElementChild.firstElementChild;
  const filtersList = e.target.nextElementSibling.lastElementChild;
  filtersList.style.removeProperty('grid-template-columns');
  if (openedField.length === 1) closeFiltList();
  e.target.nextElementSibling.classList.remove('d-none');
  if (mediaQueryMedium.matches) {
    e.target.nextElementSibling.style.width = `${mainSearchInput.offsetWidth}px`;
  } else {
    const width = e.target.nextElementSibling.offsetWidth - 10;
    e.target.style.width = `${width}px`;
  }

  inputField.focus();
  document.addEventListener('click', autoCloseList);
}

export function btnInit() {
  dropdownBtn.forEach((el) => {
    const chevronClose = el.nextElementSibling.querySelector('.search-field .bi-chevron-up');
    el.addEventListener('click', openFiltList);
    chevronClose.addEventListener('click', closeFiltList);
  });
}
