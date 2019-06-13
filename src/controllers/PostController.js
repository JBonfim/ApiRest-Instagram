const Post = require('../models/Post');



module.exports = {
    async index(req,res){
        const posts = await Post.find().sort('-createdAt');//consultando todos os posts ordenando pela data de criação
        return res.json(posts);
    },
    async store(req,res){
        //salvando os dados do post no mongo db NOSQL
        const {author,place,description,hashtags} = req.body;
        const {filename: image} = req.file;



        const post = await Post.create({
            author,place,description,hashtags,image
        })

        req.io.emit('post',post);//Enviando informações em tempo real

        return res.json(post);
    }
}