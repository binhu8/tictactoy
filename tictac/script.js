window.onload = function () {

    let vetor = [
        document.querySelectorAll('.cx1'),
        document.querySelectorAll('.cx2'),
        document.querySelectorAll('.cx3')
    ];


    
    let endGame = false;
    let tiesEmpty = 9;
    let mudarVezJogador = document.querySelector('.changePlayer');
    let winners = [0, 0];
    let players = 0;
    let resposta = document.querySelector('.resposta');
    let modal = document.querySelector('.modal');
    let containerModal = document.querySelector('.container-modal');
    let velhaMensage = document.querySelector('.velha');
    let gamerOver = document.querySelector('.gameOverMensage')
    let player = 'x';

    const verificaItemClicado = () => {

        vetor.forEach((linha, indexDaLinha) => {
            linha.forEach((celula, indexDaCelula) => {
                celula.addEventListener('click', () => {
                    switch (player) {
                        case 'x':
                            vetor[indexDaLinha][indexDaCelula].value = player;
                            changePlayer(player);
                            break;

                        case 'o':
                            vetor[indexDaLinha][indexDaCelula].value = player;
                            vetor[indexDaLinha][indexDaCelula].classList.toggle('p2');
                            changePlayer(player);
                            break
                    }
                });
            });
        });

    }

    function changePlayer(lasPlayer){
        switch(lasPlayer){
            case 'x':
                player = 'o' 
                break
            case 'o': 
                player = 'x'
                vetor
                break

        }
    }

    verificaItemClicado()

   

    const restart = () => {
        location.reload()
    }


    const isWinner = (player) => {
        if (tiesEmpty == 0 && endGame == false && !isDiagonal(player)) {
            console.log(isDiagonal(player))
            console.log('aqui')
            endGame = true;
            winner(endGame)

        } else if (isDiagonal(player)) {
            winners[players]++
            winner();
            endGame = true;

        } else {
            vetor.forEach((linha, index) => {
                if (linha[0].value == player && linha[1].value == player && linha[2].value == player) {
                    winners[players]++;
                    winner();
                    endGame = true;

                } else if (vetor[0][index].value == player && vetor[1][index].value == player && vetor[2][index].value == player) {
                    winners[players]++
                    winner();
                    endGame = true;
                }
            });
        }
    }

    const isDiagonal = (player) => {
        console.log('ultimo player', player)
        return vetor[0][0].value == player && vetor[1][1].value == player && vetor[2][2].value == player ||
            vetor[2][0].value == player && vetor[1][1].value == player && vetor[0][2].value == player
    }

    const winner = (velha) => {
        if (velha) {
            containerModal.classList.toggle('show');
            modal.classList.toggle('show');
            gamerOver.innerHTML = 'Deu velha'
            velhaMensage.innerHTML = 'Ops..'
        } else {
            containerModal.classList.toggle('show');
            modal.classList.toggle('show');
            resposta.innerHTML = player;
        }

    }
}