const alternatives = [
    {text:"Aprovecha", images:"images/sonic gato.PNG"},
    {text:"Vamos di que si", images:"images/sonic coqueto.PNG"},
    {text:"Si dices que si, serè el mejor san valentin que hayas tenido", images:"images/sonic kirby.PNG"},
    {text:"Ay", images:"images/sonic kirby 2.PNG"},
    {text:"Si no dices que si, no te voy a dar conflei", images:"images/sonic 2.PNG"}
  ]
  const ohyes = {text:"Sabia eleccion", images:"images/sonic.gif"}
  const sonic = document.querySelector('.sonic')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')
  const preloadImages = () => {
    [...alternatives, ohyes].forEach(item => {
        const img = new Image();
        img.src = item.images;
    });
};
preloadImages();
  
  let count = 0;

  function updateDisplay(item) {
    sonic.src = item.images;
    text.textContent = item.text;
  }
  
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
  })
  
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent == "Si"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if(button.textContent == 'No'){
            count++
            if(count < alternatives.length){
                updateDisplay(alternatives[count])
            }else{
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
  })
