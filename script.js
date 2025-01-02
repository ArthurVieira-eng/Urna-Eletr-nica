document.addEventListener('DOMContentLoaded', function() {
    alert("Urna. Não possui nenhum fim político.");
//Parte para o "Sim" do Botão.
    document.getElementById('continuo-button').addEventListener('click', function(){
        document.getElementById('instrucoes').style.display= 'block'; 
        setTimeout(function() { 
        document.getElementById('instrucoes').classList.add('show');
        }, 10);

    }); 

    document.getElementById('jump-button').addEventListener('click', function(){ 
        document.getElementById('instrucoes').style.display= 'none'; 
        alert('Pulando as instruções.')

    }); 

    document.getElementById('start-button').addEventListener('click', function(){ 
        document.getElementById('iniciar').style.display= 'block'; 
        setTimeout(function() { 
        document.getElementById('iniciar').classList.add('show');
       },10);

    }); 

    document.getElementById('votetion-button').addEventListener('click', function() { 
    alert('votação iniciada'); 
});
    

document.getElementById('image').addEventListener('change', function(event) { 
    const file = event.target.files[0]; 
    if (file) { 
        const reader = new FileReader (); 
        reader.onload = function(e) { 
            //Exibe a pré-vizualização da imagem. 
            document.getElementById('image-display').src = e.target.result; 
            document.getElementById('image-preview').style.display = 'block'; 
        }; 
        reader.readAsDataURL(file); 
    }
 });
}); 