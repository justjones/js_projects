//https://jsonplaceholder.typicode.com/posts

const main = document.querySelector('.main');
const ul = eleMaker('ul','',main);
const url = 'https://jsonplaceholder.typicode.com/posts';
const btn = eleMaker('button','Get Data',main);
const btnPrev = eleMaker('button','Prev',main);
const btnNext = eleMaker('button','Next',main);
let counter = 0;
updateButtons();

btnPrev.addEventListener('click', () => {
   if(counter > 0) counter = counter -1;
});

btnNext.addEventListener('click', () => {
    counter = counter +1;
 });


btn.addEventListener('click',getDataVal);

function getOutput(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        updateButtons();
        console.log(data[counter]);
    })
}

function getDataVal(){    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        addToPage(data);
    })

}

function updateButtons(){
    if (counter <= 0) {
        btnPrev.disabled = true;
    }else {
        btnPrev.disabled = false;
    }
}

function addToPage(data){
    ul.innerHTML = '';
    console.log(data);
    data.forEach(item => {
        const temp = eleMaker('li',item.title,ul);        
    })
}

function eleMaker(tagType,txt,parent){
    const temp = document.createElement(tagType);
    temp.textContent = txt;
    return parent.appendChild(temp);
}
