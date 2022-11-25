calc = document.getElementById("calc");
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");
  let resultado='';

	calc.onclick = function(){
		if(kg.value!="" && m.value!=""){
			imcx = (kg.value / (m.value* m.value));
			/*imc.innerHTML = imcx*/
			console.log(imcx);


      
      if(imcx < 16){ resultado = "Delgadez severa"; }
			else if(imcx >= 16 && imcx <= 16.99){ resultado = "Delgadez moderada"; }
			else if(imcx >= 17 && imcx <= 18.49){ resultado = "Delgadez aceptable"; }
			else if(imcx >= 18.5 && imcx <= 24.99){ resultado = "Normal"; }
			else if(imcx >= 25 && imcx <= 29.99){ resultado = "Preobeso"; }
			else if(imcx >= 30 && imcx <= 34.99){ resultado = "Obeso tipo I"; }
			else if(imcx >= 35 && imcx <= 39.99){ resultado = "Obeso tipo II"; }
			else if(imcx > 40){ resultado = "Obeso tipo III"; }

    }else{

      alert('Debes ingresar peso y altura')

		}
  
    alert('IMC \n' + imcx +'\n \n Lectura \n' + resultado)
    
    }

  


    
	