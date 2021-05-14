// build your `Task` model here

const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks');
   }
   
const getById = id => {
    return db('tasks').where('id', id).first()
  }
   
const create = async task => {
     const [id] = await db('tasks').insert(task)
     return getById(id)
   }

module.exports = {getAll, create}