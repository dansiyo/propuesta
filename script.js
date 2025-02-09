const alternatives = [
    {text:"Aprovecha", images:"images/sonic gato.PNG"},
    {text:"Estas segura?", images:"images/sonic coqueto.PNG"},
    {text:"Asegurate bien", images:"images/sonic kirby.PNG"},
    {text:"Vas a dejar pasar esta oportunidad?", images:"images/sonic kirby 2.PNG"},
    {text:"Estas segura de que te aseguraste bien?", images:"images/sonic 2.PNG"}
  ]
  const ohyes = {text:"Sabia eleccion", images:"images/sonic.gif"}
  const sonic = document.querySelector('.sonic')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')

  
  let count = 0;
  
  function updateDisplay(item){
    sonic.src = item.images
    text.innerHTML = item.text
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