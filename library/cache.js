'use strict';

const cache = new Map();

exports.set = (id, game, callback) => {
    if (!id || !game) return callback('O id não pode ser nulo');
    cache.set(id, game);
    callback && callback(); // Se callback true, chama callback();
};

exports.get = (id, callback) => {
    if (!cache.has(id)) return callback('Não é turno do jogador');
    callback(null, cache.get(id));
};

exports.del = (id, callback) => {
    if (!cache.delete(id)) return callback('game not found');
    callback && callback();
};