const buttons = document.querySelectorAll(".btn-n");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    console.log(`Botão ${value} foi clicado`);
  });
});
console.log("teste")