# API do Jogo da Velha

## Dependências

- Node.js 12.18.4 +
  - express
  - uuid
  - cors

## Instalação

```
Clone o repositório: https://github.com/disilveira/jogo-da-velha
npm install
npm start
```

## Metódos

### POST - /game

Gera o id do jogo e escolhe de forma aleatória se 'X' ou 'O' começa a partida.

```json
{
  "id": "fbf7d720-df90-48c4-91f7-9462deafefb8",
  "firstPlayer": "X"
}
```

### POST - /game/{id}/movement

Preenche a posição na matriz do jogo da velha

```json
{
  "id": "fbf7d720-df90-48c4-91f7-9462deafefb8",
  "player": "X",
  "position": {
    "x": 0,
    "y": 1
  }
}
```

## Posições

| (x=0 y=2) | (x=1 y=2) | (x=2 y=2) |
|-----------|-----------|-----------|
| (x=0 y=1) | (x=1 y=1) | (x=2 y=1) |
| (x=0 y=0) | (x=1 y=0) | (x=2 y=0) |