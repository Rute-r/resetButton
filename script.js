const buttonTobeClicked = document.querySelector('#first-button');
const resetButton = document.querySelector('#reset-button');

const inicialText = buttonTobeClicked.textContent;
const clickedText = `Você clicou nesse botão`;

function whenButtonIsClicked() {
  buttonTobeClicked.addEventListener('click', () => {
    buttonTobeClicked.textContent = clickedText;
  });
}

resetButton.addEventListener('click', () => {
  buttonTobeClicked.textContent = inicialText;
});

whenButtonIsClicked();
