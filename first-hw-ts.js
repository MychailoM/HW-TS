var inp = document.querySelector('input');
var btn = document.querySelector('button');
var text = document.querySelector('p');
var arr = [];
if (inp && btn && text) {
    btn.addEventListener('click', function () {
        text.textContent = inp.value;
        arr.push(inp.value);
        alert(arr);
    });
}
