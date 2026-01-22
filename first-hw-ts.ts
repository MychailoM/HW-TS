const inp = document.querySelector('input');
const btn = document.querySelector('button');
const text = document.querySelector('p');
const arr: string[] = [];

if (inp && btn && text) {
  btn.addEventListener('click', () => {
    text.textContent = inp.value;
    arr.push(inp.value);
    alert(arr)
  });
}
