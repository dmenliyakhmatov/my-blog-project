import './paragraph.css'

export default function(text) {
  const p = document.createElement('p');
  p.textContent = text;
  p.classList.add('paragraph');
  return p;
}