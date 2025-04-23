function lerEntrada() {
    //limpa a tela
    document.getElementById("resp").innerHTML = "";
    //ler idade
    var idade;
    idade = document.getElementById("idade").value;
    //da a resposta
    if(idade != "" && idade != undefined){
    document.getElementById("resp").innerHTML = `<div class='tile'>Idade informada: ${idade}</div>`;
    votacao(idade);
    }
}

function votacao(idade) {
    if (idade < 18){
        document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa é menor de idade</div>";
        document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa não pode votar</div>";

    }else{
        document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa é maior de idade</div>";
        document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa pode votar</div>";
    }
}