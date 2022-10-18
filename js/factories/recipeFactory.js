export default function recipeFactory(data) {
  const {
    name, description, ingredients, time, id,
  } = data;
  const el = document.createElement('article');
  const idPictureNumber = () => {
    if (id <= 20) { return id; } if (id % 2 !== 0) { return ((id / 2) - (13 / 2)); } return ((id / 2) - (5));
  };
  const pictureNumber = idPictureNumber();
  const lazyAttribute = () => { if (id > 6) return 'loading=lazy'; return ''; };
  let ingredientElement = '';

  el.classList.add('col-12');
  el.classList.add('col-md-6');
  el.classList.add('col-lg-4');
  el.dataset.recipeId = id;

  const ingredientContent = document.createElement('div');

  ingredients.forEach((element) => {
    const elementTwo = Object.values(element);

    if (elementTwo[1] === undefined) {
      elementTwo[1] = '';
    } else {
      elementTwo[0] += ': ';
    }
    if (elementTwo[2] === undefined) {
      elementTwo[2] = '';
    }

    ingredientElement = (`<b>${`${elementTwo[0]}</b> ${elementTwo[1]}`} ${elementTwo[2]}`);
    const p = document.createElement('p');
    p.innerHTML = ingredientElement;
    p.classList.add('m-0');

    ingredientContent.append(p);
  });

  const recipe = `
          <div class="card border-0 cs-bg-dark-gray">
            <picture>
              <source type="image/webp" src="./assets/illustrations/${pictureNumber}.webp">
              <img
                class="rounded-top"
                src="./assets/illustrations/${pictureNumber}.jpg"
                alt=""
                style="height: 180px; object-fit: cover; width: 100%"
                ${lazyAttribute()}
              />
            </picture>
            <div
              class="container cs-bg-light-gray rounded-bottom"
              style="height: 200px"
            >
              <div class="row h-25 align-items-center">
                <h2 class="col-8 m-0 card-title text-truncate">${name}</h2>
                <div class="col-4 text-end d-flex justify-content-end align-items-center fw-semibold">
                  <svg height="1.3rem" width="1.3rem" class="me-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                  </svg>
                  ${time} min
                </div>
              </div>
              <div class="card-description row h-75 text-wrap overflow-hidden">
                <div class="col m-0 h-100 overflow-auto">${ingredientContent.innerHTML}</div>
                <div class="col h-100 overflow-auto">
                  ${description}
                </div>
              </div>
            </div>
          </div>
        
    `;
  el.innerHTML = recipe;

  return el;
}
