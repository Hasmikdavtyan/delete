const mongoose = require('mongoose')

let model = require('../models/crmModel')
let todoModel = mongoose.model('todo', model)



class TodoController{

   async getAllItems(req, res){
      let data = await todoModel.find().catch((err)=>{throw err})
     res.render('todo', {data:data})
      res.json(data)
    }


  async  addItem(req, res){
      let data= await  todoModel.create({item:req.body.item})
      res.json(data)
    }

   async deleteItem(req, res){
       let data = await todoModel.deleteOne(req.body)
       res.json(data)
    }
}

module.exports= new TodoController()