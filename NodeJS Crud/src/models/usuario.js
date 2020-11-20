const mongoose = require('../database');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
})

const usuario = mongoose.model('Usuario', UsuarioSchema)
module.exports = usuario;