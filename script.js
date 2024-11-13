    function calcularQuantidade() {
            
            var homens = parseInt(document.getElementById("homens").value);
            var mulheres = parseInt(document.getElementById("mulheres").value);
            var criancas = parseInt(document.getElementById("criancas").value);

            var carneBovinaHomens = 500 * homens;
            var carneBovinaMulheres = 300 * mulheres;
            var carneBovinaCriancas = 200 * criancas;

            var totalCarneBovina = carneBovinaHomens + carneBovinaMulheres + carneBovinaCriancas;

            var frangoHomens = 200 * homens;
            var frangoMulheres = 200 * mulheres;
            var frangoCriancas = 100 * criancas;

            var totalFrango = frangoHomens + frangoMulheres + frangoCriancas;

            var linguiçaHomens = 200 * homens;
            var linguiçaMulheres = 200 * mulheres;
            var linguiçaCriancas = 200 * criancas;

            var totalLinguiça = linguiçaHomens + linguiçaMulheres + linguiçaCriancas;

            var refrigeranteHomens = 300 * homens;
            var refrigeranteMulheres = 400 * mulheres;
            var refrigerantesCriancas = 200 * criancas;
            
            var totalRefrigerante = (refrigeranteHomens+refrigeranteMulheres+refrigerantesCriancas);  
            

            var cervejaHomens = 800 * homens;
            var cervejaMulheres = 500 * mulheres;
            
            
            var totalCerveja = cervejaHomens + cervejaMulheres;
          
            var resultado = "<p><b> Carne Bovina:</b> " + totalCarneBovina/1000 + "kg ";
            resultado += "<b> Frango:</b> " + totalFrango/1000 + "kg ";
            resultado += "<b> Linguiça:</b> " + totalLinguiça/1000 + "kg ";
            resultado += "<b> Refrigerante:</b> " + totalRefrigerante/1000 + "litros ";
            resultado += "<b> Cerveja:</b> " + totalCerveja/1000 + "litros </p>";

            document.getElementById("resultadoCarne").innerHTML = resultado;
    }    

    const btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", calcularQuantidade);
