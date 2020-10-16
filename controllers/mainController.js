'use strict';

const uuid = require('uuid');
const { cache, JogoDaVelha } = require('../library');

exports.newGame = (_req, res) => {
    const id = uuid();
    const symbol = Math.floor(Math.random() * Math.floor(2)) ? 'X' : 'O';

    cache.set(id, new JogoDaVelha(id, symbol), err => {
        if (err) return res.status(500).json({ msg: err });
        res.json({ id, firstPlayer: symbol });
    });
};

exports.doMovement = (req, resp) => {
    const { id } = req.params;
    const { player, position } = req.body;

    cache.get(id, (err, game) => {
        if (err || !game) return resp.status(404).json({ msg: 'Partida não encontrada' });

        game.movimento(player, position.x, position.y, (err, res) => {
            if (err) return resp.status(400).json(err);
            if (res && res.winner) cache.del(id);
            resp.json(res);
        });
    });
};