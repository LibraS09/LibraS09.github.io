var test = {
  createDiv: function (parent, className, text) {
    let valParent = document.getElementsByClassName(parent)[0];
    let newDiv = document.createElement('div');
    newDiv.className = className;
    valParent.appendChild(newDiv);
    newDiv.innerHTML = text;
  },
  createOl: function (parent, className) {
    let valParent = document.getElementsByClassName(parent)[0];
    let newOl = document.createElement('ol');
    newOl.className = className;
    valParent.appendChild(newOl);
  },
  createLiForm: function (parent, className, text) {
    let valParent = document.getElementsByClassName(parent)[0];
    let newLi = document.createElement('li');
    newLi.innerHTML = text;
    valParent.appendChild(newLi);
    let newForm = document.createElement('form');
    newForm.className = className;
    newLi.appendChild(newForm);
  },
  createInput: function (parent, label) {
    let valParent = document.getElementsByClassName(parent)[0];
    let newLabel = document.createElement('label');
    valParent.appendChild(newLabel);
    newLabel.innerHTML = label;
    let newInput = document.createElement('input');
    newLabel.insertBefore(newInput, newLabel.firstChild);
    newInput.setAttribute('type', 'checkbox');
  },
  createButton: function (parent, value) {
    let valParent = document.getElementsByClassName(parent)[0];
    let newForm = document.createElement('form');
    valParent.appendChild(newForm);
    let newInput = document.createElement('input');
    newForm.appendChild(newInput);
    newInput.setAttribute('type', 'button');
    newInput.setAttribute('value', value);
  }
};

test.createDiv('body', 'wrapper', '');
test.createDiv('wrapper', 'caption', 'Тест по программированию');
test.createDiv('wrapper', 'box', '');
// test.createOl('box', 'ol');

// var array = {
//   "form1":["Вопрос №1",
//   {"k": 1, "v": "вариант ответа №1_1"},
//   {"k": 0, "v": "вариант ответа №1_2"},
//   {"k": 0, "v": "вариант ответа №1_3"}],
//   "form2":["Вопрос №2",
//   {"k": 1, "v": "вариант ответа №2_1"},
//   {"k": 0, "v": "вариант ответа №2_2"},
//   {"k": 0, "v": "вариант ответа №2_3"}],
//   "form3":["Вопрос №3",
//   {"k": 1, "v": "вариант ответа №3_1"},
//   {"k": 0, "v": "вариант ответа №3_2"},
//   {"k": 0, "v": "вариант ответа №3_3"}]
// };
// var q1 = JSON.stringify(array)
// console.log( q1 );
// console.log( JSON.parse(q1) );

// for (key in array) {
// test.createLiForm('ol', key, array[key][0]);
// for (var i=1; i<array[key].length; i++) {
//   test.createInput(key, array[key][i].v);
// }
// }

test.createDiv('wrapper', 'divButton', '');
test.createButton ('divButton', ' Проверить мои результаты ');
test.createDiv('wrapper', 'divModal', '');
test.createDiv('divModal', 'message', '');
test.createButton ('divModal', ' Close ');
// console.log (document.documentElement);
