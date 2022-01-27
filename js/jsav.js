let url="https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
console.log(url)


function converter(){
    let input= document.getElementById("valor");
    let valor= input.value;
    let valorFormatado= parseFloat(valor)
      console.log(valor)
fetch(url)
     .then((res)=>{

         return res.json();

     })
     .then((data)=>{
         
         let rate= data.USDBRL.ask;
         let rateFormatado=parseFloat(rate);
         document.getElementById("resultado").innerHTML =
         "R$"+ (valorFormatado * rateFormatado).toFixed(2) + " Reais";
         
         
         
        
     })
}
function converter2(){
    let input= document.getElementById("valor");
    let valor= input.value;
    let valorFormatado= parseFloat(valor)
      console.log(valor)
fetch(url)
     .then((res)=>{

         return res.json();

     })
     .then((data)=>{
         
         let rate= data.USDBRL.ask;
         let rateFormatado=parseFloat(rate);
         document.getElementById("resultado").innerHTML =
         "$"+ (valorFormatado / rateFormatado).toFixed(2) + " Doláres";
         
         
         
        
     })
}
function converter3(){
    let input= document.getElementById("valor");
    let valor= input.value;
    let valorFormatado= parseFloat(valor)
      console.log(valor)
fetch(url)
     .then((res)=>{

         return res.json();

     })
     .then((data)=>{
         
         let rate= data.EURBRL.ask;
         let rateFormatado=parseFloat(rate);
         document.getElementById("resultado").innerHTML =
         "$"+ (valorFormatado * rateFormatado).toFixed(2) + " Reais";
         
         
         
        
     })
}
function converter4(){
    let input= document.getElementById("valor");
    let valor= input.value;
    let valorFormatado= parseFloat(valor)
      console.log(valor)
fetch(url)
     .then((res)=>{

         return res.json();

     })
     .then((data)=>{
         
         let rate= data.EURBRL.ask;
         let rateFormatado=parseFloat(rate);
         document.getElementById("resultado").innerHTML =
         "€"+ (valorFormatado / rateFormatado).toFixed(2) + " Euros";
         
         
         
        
     })
    }
    function converter5(){
        let input= document.getElementById("valor");
        let valor= input.value;
        let valorFormatado= parseFloat(valor)
          console.log(valor)
    fetch(url)
         .then((res)=>{
    
             return res.json();
    
         })
         .then((data)=>{
             
             let rate= data.BTCBRL.ask;
             let rateFormatado=parseFloat(rate);
             document.getElementById("resultado").innerHTML =
             "R$"+ (valorFormatado * rateFormatado) + " Reais";
             
             
             
            
         })
        }
        function converter6(){
            let input= document.getElementById("valor");
            let valor= input.value;
            let valorFormatado= parseFloat(valor)
              console.log(valor)
        fetch(url)
             .then((res)=>{
        
                 return res.json();
        
             })
             .then((data)=>{
                 
                 let rate= data.BTCBRL.ask;
                 let rateFormatado=parseFloat(rate);
                 document.getElementById("resultado").innerHTML =
                 "₿"+ (valorFormatado / rateFormatado) + " BTC";
                 
                 
                 
                
             })
            }

                 
                 
                 
            