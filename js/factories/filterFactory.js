export default function filterFactory(data, colour) {
  const Filters = [];
  const filterLi = document.createElement('li');
  const filtersButton = document.createElement('button');

  filterLi.classList.add('w-100');
  filterLi.classList.add('px-3');
  filterLi.classList.add('py-1');
  filterLi.classList.add('text-wrap');
  filterLi.innerHTML = data;

  Filters.push(filterLi);

  filtersButton.classList.add(colour);
  filtersButton.classList.add('btn');
  filtersButton.classList.add('shadow-none');
  filtersButton.classList.add('d-flex');
  filtersButton.classList.add('justify-content-between');
  filtersButton.classList.add('align-items-center');
  filtersButton.classList.add('d-none');

  filtersButton.innerHTML = `
    ${data}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-x-circle ms-2"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  `;
  Filters.push(filtersButton);

  return Filters;
}
