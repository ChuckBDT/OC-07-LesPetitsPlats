export default function recipeFactory(data) {
  const {
    name, description, ingredients, time,
  } = data;
  const el = document.createElement('article');
  const randomPictureNumber = Math.floor(Math.random() * (20 - 1)) + 1;
  let ingredientElement = '';

  el.classList.add('col-12');
  el.classList.add('col-md-6');
  el.classList.add('col-lg-4');

  const ingredientContent = document.createElement('div');

  ingredients.forEach((element) => {
    const elementTwo = Object.values(element);

    if (elementTwo[1] == undefined) {
      elementTwo[1] = '';
    } else {
      elementTwo[0] += ': ';
    }
    if (elementTwo[2] == undefined) {
      elementTwo[2] = '';
    }

    ingredientElement = (`${elementTwo[0] + elementTwo[1]} ${elementTwo[2]}`);
    const p = document.createElement('p');
    p.innerHTML = ingredientElement;
    p.classList.add('m-0');

    ingredientContent.append(p);
  });

  const recipe = `
          <div class="card border-0 cs-bg-dark-gray">
            <picture>
              <source type="image/webp" src="./assets/illustrations/${randomPictureNumber}.webp">
              <img
                class="rounded-top"
                src="./assets/illustrations/${randomPictureNumber}.jpg"
                loading="lazy"
                alt=""
                style="height: 180px; object-fit: cover; width: 100%"
              />
            </picture>
            <div
              class="container cs-bg-light-gray rounded-bottom"
              style="height: 200px"
            >
              <div class="row h-25">
                <div class="col m-0 card-title d-flex justify-content-start align-items-center">${name}</div>
                <div class="col text-end d-flex justify-content-end align-items-center fw-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                    />
                    <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                    />
                  </svg>
                  ${time} min
                </div>
              </div>
              <div class="row h-75 text-wrap overflow-hidden">
                <div class="col m-0 ">${ingredientContent.innerHTML}</div>
                <div class="col">
                  ${description}
                </div>
              </div>
            </div>
          </div>
        
    `;
  el.innerHTML = recipe;

  return el;
}
