document.addEventListener('DOMContentLoaded', function() {
    alert("Urna. Não possui nenhum fim político.");

    // Lista de candidatos já definidos
    const candidatos = [
        { numero: "10", nome: "Pulga o Pug", img: "img/candidato1.png" },
        { numero: "20", nome: "Rato com um Prato", img: "img/candidato2.png" },
        { numero: "33", nome: "Tubarão Sabão", img: "img/candidato3.png" },
        { numero: "55", nome: "Gato Laranja", img: "img/candidato4.png"},
        { numero: "64", nome: "Mosquito Escrito", img: "img/candidato5.png"},
        { numero: "77", nome: "Macaco com Buraco", img: "img/candidato6.png"},
        { numero: "88", nome: "Sapo do Tráfico", img: "img/candidato7.png"},
    ];

    let currentVote = "";

    // Exibir lista de candidatos uma vez ao carregar a urna
    const lista = document.getElementById("lista-candidatos");
    function mostrarCandidatos() {
        lista.innerHTML = ""; // limpa a lista antes de criar os cards
        candidatos.forEach(c => {
            const card = document.createElement("div");
            card.classList.add("candidato-card");
            card.innerHTML = `
                <img src="${c.img}" alt="Foto de ${c.nome}" style="max-width:150px;">
                <h4>${c.nome}</h4>
                <p>Número: <strong>${c.numero}</strong></p>
            `;
            lista.appendChild(card);
        });
    }

    // Botão "Sim" para instruções
    document.getElementById('continuo-button').addEventListener('click', function() {
        const instrucoes = document.getElementById('instrucoes');
        instrucoes.style.display = 'block';
        setTimeout(() => instrucoes.classList.add('show'), 10);
    });

    // Botão "Não" para instruções
    document.getElementById('jump-button').addEventListener('click', function() {
        document.getElementById('instrucoes').style.display = 'none';
        alert('Pulando as instruções.');
    });

    // Botão "Iniciar Urna"
    document.getElementById('start-button').addEventListener('click', function() {
        const iniciar = document.getElementById('iniciar');
        iniciar.style.display = 'block';
        setTimeout(() => iniciar.classList.add('show'), 10);

        mostrarCandidatos(); // chama a função para mostrar os candidatos
    });

    // Botão "Iniciar Votação"
    document.getElementById('votetion-button').addEventListener('click', function() {
        const numbers = document.getElementById('numbers');
        numbers.style.display = 'block';
        setTimeout(() => numbers.classList.add('show'), 10);
        alert('Votação iniciada.');
    });

    // Lógica dos botões numéricos
    document.querySelectorAll('.eleitoral-button').forEach(button => {
        button.addEventListener('click', function() {
            const selectedNumber = button.textContent;
            currentVote += selectedNumber;

            if (currentVote.length > 2) currentVote = currentVote.slice(1);
            document.getElementById('numero-candidato').value = currentVote;
        });
    });

    // Confirmar voto
    document.getElementById('confirm-button').addEventListener('click', function() {
        if (!currentVote) {
            alert("Você não inseriu um número.");
            return;
        }

        const candidatoEscolhido = candidatos.find(c => c.numero === currentVote);

        if (candidatoEscolhido) {
            let imagePreview = document.getElementById('image-preview');
            if (!imagePreview) {
                imagePreview = document.createElement('div');
                imagePreview.id = 'image-preview';
                imagePreview.style.marginTop = '20px';
                document.body.appendChild(imagePreview);
            }
            imagePreview.innerHTML = `
                <h4>Candidato escolhido</h4>
                <img src="${candidatoEscolhido.img}" alt="${candidatoEscolhido.nome}" style="max-width:200px;">
            `;
            imagePreview.style.display = 'block';

            alert(`Voto confirmado para: ${candidatoEscolhido.nome} (Número: ${candidatoEscolhido.numero})`);
        } else {
            alert("Número incorreto. Nenhum candidato encontrado.");
        }

        currentVote = "";
        document.getElementById('numero-candidato').value = '';
    });

    // Corrigir voto
    document.getElementById('correction-button').addEventListener('click', function() {
        currentVote = "";
        document.getElementById('numero-candidato').value = '';
        alert("Voto corrigido. Tente novamente.");
    });

    // Voto em branco
    document.getElementById('button-white').addEventListener('click', function() {
        alert('Você votou em Branco.');
        currentVote = "";
        document.getElementById('numero-candidato').value = '';
    });
});
