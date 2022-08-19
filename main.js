const tabuleiro = document.querySelector(".tabuleiro")


for (let linha = 0; linha < 6; linha++) {

    for (let linha = 0; linha < 6; linha++) {
        //cria elemento
        const casinha = document.createElement('div')
        //add class
        casinha.classList.add('class', 'casinha')
        //chama elemento
        tabuleiro.append(casinha)
        casinha.innerHTML = linha;
    }

}


function mostrar(){
    console.log("pegou");
}



