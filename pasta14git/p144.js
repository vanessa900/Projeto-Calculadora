function Calculadora(){
    this.display = document.querySelector('.display')
    this.inicia = () => {
        this.capturaCliques()
               
    }
    


    this.capturaCliques = () => {
        document.addEventListener('click', e =>{
        const el = e.target
        if(el.classList.contains('btn-num')) this.addNumDisplay(el)
        if(el.classList.contains('btn-clear')) this.clear()
        if(el.classList.contains('btn-eq')) this.realizaConta()
        })
    }
    this.realizaConta = ()=>{
        try{
            const conta = eval(this.display.value)
        
        if(!conta){
            alert('conta invalida')
            return
        }
        this.display.value = conta
        }catch(e){
            alert ('conta invalida')
            return
        }

    }
    

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
      };
    
      this.clear = () => this.display.value = '';

}


const calculadora = new Calculadora()
calculadora.inicia()