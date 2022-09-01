let botao = document.querySelector('#botao2')
let clientes = []

botao.addEventListener('click',function (){
            
    let regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');

    let res = document.querySelector('#res')
    let cel = document.querySelector('#celular').value
    let nome = document.querySelector('#nome').value


    if (regex.test(cel))
    {  
        res.style.color = "#10AC84"
        res.innerHTML = `Ola ${nome}, seu registro foi cadastrado com sucesso. Entraremos em contato em breve! </p>`
        clientes.push({contato: nome, telefone:cel})
    }
    else
    {
        res.style.color = "#EE5253"
        res.innerHTML = `Telefone ${cel} inválido!`
    }   
                  
})
        
    
  
        
     
        