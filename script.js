document.addEventListener('DOMContentLoaded', function() {
    alert("Urna. Não possui nenhum fim político.");
//Variáveis criadas para número, imagem, e voto. 
    let candidateImage = null;
    let candidateNumber = null;
    let currentVote = "";

    //Parte para o "Sim" do Botão.
    document.getElementById('continuo-button').addEventListener('click', function(){
        document.getElementById('instrucoes').style.display = 'block'; 
        setTimeout(function() { 
            document.getElementById('instrucoes').classList.add('show');
        }, 10);
    }); 
//Parte para o "Não" do botão
    document.getElementById('jump-button').addEventListener('click', function(){ 
        document.getElementById('instrucoes').style.display = 'none'; 
        alert('Pulando as instruções.');
    }); 
//Parte criada para exibir as informações de iniciar a urna. 
    document.getElementById('start-button').addEventListener('click', function(){ 
        document.getElementById('iniciar').style.display = 'block'; 
        setTimeout(function() { 
            document.getElementById('iniciar').classList.add('show');
        }, 10);
    }); 
//Parte criada para votaçaõ. 
    document.getElementById('votetion-button').addEventListener('click', function(){ 
        document.getElementById('numbers').style.display = 'block'; 
        setTimeout(function() { 
            document.getElementById('numbers').classList.add('show');
            alert('Votação iniciada.');
        }, 10);
    });

    // Evento para selecionar e exibir a imagem do candidato.
    document.getElementById('image').addEventListener('change', function(event) { 
        const file = event.target.files[0]; 
        if (file) { 
            const reader = new FileReader (); 
            reader.onload = function(e) { 
                document.getElementById('image-display').src = e.target.result; 
                document.getElementById('image-preview').style.display = 'block'; 
            }; 
            reader.readAsDataURL(file); 
        }
    });

    // Parte para registrar o candidato.
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const candidateName = document.getElementById('fname').value;
        candidateNumber = document.getElementById('numero').value;

        if (candidateName && candidateNumber) {
            alert(`Candidato ${candidateName} com o número ${candidateNumber} foi registrado.`);
        } else {
            alert("Por favor, complete todos os campos.");
        }
    });

    // Parte para votar nos candidatos.
    const numberButtons = document.querySelectorAll('.eleitoral-button');
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedNumber = button.textContent;
            currentVote += selectedNumber;  // Adiciona o número pressionado à variável de voto.

            if (currentVote.length > 2) {
                currentVote = currentVote.slice(1);  // Limita a entrada para no máximo 2 dígitos.
            }

            // Atualiza o campo de número.
            document.getElementById('numero-candidato').value = currentVote;
        });
    });

    // Parte para confirmar o voto.
    document.getElementById('confirm-button').addEventListener('click', function() {
        if (currentVote === candidateNumber.toString()) {
            alert(`Voto confirmado para o candidato número ${currentVote}`);
        } else if (currentVote === "") {
            alert("Você não inseriu um número.");
        } else {
            alert("Número incorreto.");
        }
    }); 

    // Parte para corrigir caso usuário digite o número errado.
    document.getElementById('correction-button').addEventListener('click', function() {
        currentVote = "";  // Limpa o voto atual
        document.getElementById('numero-candidato').value = currentVote; // Limpa o campo de entrada
        alert("Voto corrigido. Tente novamente.");
    });

    // Parte para votação em Branco.
    document.getElementById('button-white').addEventListener('click', function () {
        alert('Você votou Branco.');
    });
});
