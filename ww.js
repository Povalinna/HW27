
let mass = [1, 2, [1.1, 1.2, 1.3], 3];
let mass1 = [1, 2, 3, [4, [5_1, 5_2]]];

let generateList = function (item, array) {
  let ul = document.createElement('ul');
  item.forEach(item => {
    let li = document.createElement('li');
    if (!Array.isArray(item)) {
      li.innerHTML = item;
    } else {
      li.appendChild(generateList(item, ul));
    }
    ul.appendChild(li);
  })
  return ul;
}


document.body.appendChild(generateList(mass));
document.body.appendChild(generateList(mass1));
