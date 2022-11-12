
const bd = []

const getUsers = (req, res) => {

    if(req.query.nombre != undefined){
        let filteredNameUser = bd.filter(user => user.Name === req.query.nombre)
        return res.status(200).send(filteredNameUser)
    }
    if(req.query.apellido != undefined){
        let filteredSurnameUser = bd.filter(user => user.Surname === req.query.apellido)
        return res.status(200).send(filteredSurnameUser)
    }
    
    res.status(200).send(bd)

}

const getUser = (req, res) => {
    
    for (let i = 0; i < bd.length; i++) { 
        if(req.params.ID === bd[i].ID){
            return res.status(200).send(bd[i])
        } 
    }
    return res.status(200).send({message: 'El usuario no existe, o fue eliminado de la Base de Datos. '})

}

const createUsers = (req, res) => {

    bd.push(req.body)
    return res.status(200).send({ message: 'USUARIO grabado!!'})

}

const updateUsers = (req, res) => {

    bd.forEach(user => {
        if(user.ID === req.params.ID){
            for (let i = 0; i < bd.length; i++) { 
                if(req.params.ID === bd[i].ID){
                    bd[i].Name = req.query.nombre
                    bd[i].Surname = req.query.apellido
                } 
            }
            return res.status(200).send({message: `El usuario con ID ${req.params.ID} fue actualizado.` })
        }
    })

    return res.status(200).send({message: `ERROR el usuario con ID ${req.params.ID} no existe.` })

}

const deleteUsers = (req, res) => {

    bd.map(user => {
        if(user.ID === req.params.ID){
            bd.splice(user.ID -1 , 1)   
        }
    })

    return res.status(200).send(bd)

}

module.exports = {getUsers, getUser, createUsers, updateUsers, deleteUsers}