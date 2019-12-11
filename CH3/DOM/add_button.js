var el = document.getElementById('test');
var menu = document.createElement('ol');
menu.id = 'menupan';
var menuAttribute = document.createAttribute('type');
menuAttribute.value = "I";
menu.setAttributeNode(menuAttribute);


var item1 = document.createElement('li');
item1.id = 'menu1';
item1.innerHTML = "설렁탕";

var item2 = document.createElement('li');
item2.id = 'menu2';
item2.innerHTML = "추어탕";

menu.appendChild(item1);
menu.appendChild(item2);

el.appendChild(menu);

//input 태그 추가
var input = document.createElement('input');
//input 태그에 id 속성 추가
input.id = 'input1';
//input 태그에 type 속성 추가
var inputType = document.createAttribute('type');
inputType.value = 'text';
input.setAttributeNode(inputType);
//body에 input 태그 추가
document.body.appendChild(input);

//button 태그 추가
var btn = document.createElement('button');
//button 태그에 id 속성 추가
btn.id = 'btn1';
//button 태그에 onclick 속성 추가
var btnOnclick = document.createAttribute('onclick');
btnOnclick.value = 'read()';
btn.setAttributeNode(btnOnclick);
//button 태그에 text 값 추가
var btnText = document.createTextNode("click");
btn.appendChild(btnText);
//body에 button 태그 추가
document.body.appendChild(btn);

var read = function() {
    var inputPrint = document.getElementById('input1');
    console.log(inputPrint.value);
};
