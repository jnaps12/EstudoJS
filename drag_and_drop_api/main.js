const WORDS = ['Banana', 'Maçã', 'Abacaxi', 'Goiaba', 'Pêra'];


const dropzones = document.querySelectorAll('.dropzone');
const board = document.querySelector('.board')
addWordsToBoard();
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
});

function dragstart(){
  // console.log('dragstart')
  this.classList.add("is-dragging");

}

function drag(){
  // console.log('drag');
}

function dragend(){
  // console.log('dragend');
  this.classList.remove("is-dragging");

}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter(){

}

function dragover(event){
  event.preventDefault();
  this.classList.add('over')
  
}

function dragleave(){
  this.classList.remove("over");
}

function drop(event){
  event.preventDefault();
  this.classList.remove("over");
  const cardBeingDragged = document.querySelector(".is-dragging");

  // this = dropzone
  this.appendChild(cardBeingDragged);

}

function addWordsToBoard(){
  let newWords = WORDS.sort(() => Math.random() - 0.5);
  
  newWords.forEach(word => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("draggable", true);
    div.textContent = word;
    board.appendChild(div);
  });
  
}

function getAwnser(){
  let cardsAwnser = dropzones[0].children;
  let getFullString = '';

  for(const card of cardsAwnser){
    getFullString += card.innerText;
  }

  console.log(getFullString);

  if(getFullString == "MaçãGoiaba"){
    console.log('all right');
  }else{
    console.log('try again');
  }
}





