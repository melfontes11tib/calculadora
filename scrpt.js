let conta = 0
  let pessoas = 0
  lp
  const containput = document.querySelector("#conta")
  containput.addEventListener("input",receberValorConta )
  
  function receberValorConta(evento){
      conta = Number(evento.target.value)
      
  }
  
  const pessoasInput = document.querySelector("#pessoas")
  
  pessoasInput.addEventListener("input", receberQuantidadePessoa)
  
  function receberQuantidadePessoa (evento){
      const paragrafoErro = document.querySelector(".pessoas #erro")
      const divErro = document.querySelector(".pessoas .input-box")
  
      if(evento.target.value === "0"){
          
         console.log(paragrafoErro)
         paragrafoErro.style.display = "block"
  
         divErro.setAttribute("id", "erro-div")
      } else{
          paragrafoErro.style.display = "none"
          divErro.setAttribute("id", "")
          pessoas = Number (evento.target.value)
      }
  } 