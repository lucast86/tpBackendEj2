const lodash = require('lodash')

const requiredParameters = (req, res, next) => {
    
    if(req.body.Name === "" || req.body.Name == undefined)        return res.status(404).send("Nombre REQUERIDO")
    if(req.body.Surname === "" || req.body.Surname == undefined)  return res.status(404).send("Apellido REQUERIDO")
    if(req.body.DNI === "" || req.body.DNI == undefined)          return res.status(404).send("DNI REQUERIDO")
    if(req.body.ID === "" || req.body.ID == undefined){
        let id = lodash.uniqueId()
        req.body.ID = id
        console.log(id);
    }      
    next()
}

module.exports = requiredParameters