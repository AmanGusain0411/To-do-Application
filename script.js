const head =document.getElementByClassName('common');
const refe=document.getElementById('ref');

head[0].innerText="<h1>This is innertext</h1>";
head[0].innerHTML="<h1>This is innerHTML Line1</h1><p>This is innerHTML's second line</p>";
console.log(head[0].innerHTML);
console.log(refe);

const newEle=document.getElementsByName
const newEle2=document.getElementsByTagName
