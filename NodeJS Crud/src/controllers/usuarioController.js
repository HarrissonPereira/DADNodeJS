const express = require('express');
const usuario = require('../models/usuario');
const router = express.Router();

//Cadastrando o usuário
router.post('/cadastro', async (req, res) =>{
    try{        
        const usuarioCriado = await usuario.create(req.body)
        return res.send({usuarioCriado});
    }
    catch(err){
        console.log(err)
        return res.status(400).send({error: 'Falha no cadastro'})
    }

});

//Listando todos usuários
router.get('', async (req, res) =>{
    try{
        const usuarios = await usuario.find()
        return res.send(usuarios);
    }
    catch(err){
        console.log(err)
        return res.status(400).send({error: 'Falha na busca'})
    }
});


//Atualizando um usuario específico (Params: id)
router.put('/atualizar', async (req, res) =>{
    try{  
        const usuarios = await usuario.updateOne({_id: req.query.id}, req.body)
        return res.send(usuarios);
        //return res.status(200).send()
    }
    catch(err){
        console.log(err)
        return res.status(400).send({error: 'Falha na busca'})
    }
});

//Apagando todos usuários
router.delete('/deletartodos', async (req, res) =>{
    try{
        
        const deletar = await usuario.deleteMany()
        return res.send({deletar});
       
    }
    catch(err){
        console.log(err)
        return res.status(400).send({error: 'Falha na exclusão'})
    }

});

//Apagando usuário por _id (Params: id)
router.delete('/deletar', async (req, res) =>{
    try{
        const deletar = await usuario.deleteOne({_id: req.query.id})
        return res.send({deletar});       
    }
    catch(err){
        console.log(err)
        return res.status(400).send({error: 'Falha na exclusão'})
    }

});

module.exports = app => app.use('/usuario', router)