'use strict';

module.exports = class JogoDaVelha {
    
    constructor(id, symbol){
        this.id = id;
        this.player = symbol.toUpperCase();
        this.matrix = Array(3).fill(0).map(() => Array(3).fill(0));
        this.round = 0;
        this.winner = null;
    }

    movimento(player, x, y, callback){
        if (this.player !== player) return callback({msg: 'Não é turno do jogador'});

        if (!this.movimentoValido(x, y)) return callback({msg: 'Não é um movimento válido'});

        ++this.round;
        this.player = player.toUpperCase() === 'X' ? 'O' : 'X';
        this.matrix[y][x] = player.toUpperCase() === 'X' ? -1 : 1;
        this.verificarJogada(callback);
    }

    verificarJogada(callback){
        if(this.somaDiagonal() || this.somaColuna() || this.somaLinha()){
            this.player = this.player === 'X' ? 'O' : 'X';
            this.winner = this.player;
            return callback(null, {msg: 'Partida Finalizada', winner: this.player});
        }else if (this.round === 9) {
            this.winner = 'Draw';
            return callback(null, {status: 'Partida Finalizada', winner: 'Draw'});
        }
        callback({msg: 'Jogada criada com sucesso, agora é a vez do jogador: ' + this.player });
    }

    somaDiagonal() {
        const diagonal1 = this.matrix.map((a, i) => a[i]).reduce((t, c) => t + c);
        const diagonal2 = this.matrix.map((a, i) => [...a].reverse()[i]).reduce((t, c) => t + c);
        return [diagonal1, diagonal2].some(e => Math.abs(e) === 3);
    }

    somaLinha() {
        const result = this.matrix.reduce((a, b) => a.map((v, i) => v + b[i]));
        return result.some(e => Math.abs(e) === 3);
    }

    somaColuna() {
        const result = this.matrix.map(a => a.reduce((t, c) => t + c));
        return result.some(e => Math.abs(e) === 3);
    }

    movimentoValido(x, y){
        return this.matrix[y][x] === 0 && x >= 0 && x <= 2 && y >= 0 && y <= 2;
    }

}