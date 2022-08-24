export default function filterFactory(data) {
  const el = document.createElement('li');
  el.classList.add('w-100');
  el.classList.add('px-3');
  el.classList.add('py-1');
  el.innerHTML = data;

  return el;
}
