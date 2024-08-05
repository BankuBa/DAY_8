let buttons = document.querySelectorAll(".icon");

buttons.forEach(button => {
  
  let list = button.closest('.list')

  let paragraph = list.querySelector(".paragraph");


  button.addEventListener('click', () => {
    paragraph.classList.toggle('minus')
    
    button.classList.toggle('minus_icon') 
  })
})
