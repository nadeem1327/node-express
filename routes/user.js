import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


let users = [];

// GET /users find all users
router.get('/', ( req, res) => res.send(users));

//POST /creating users 
router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with name ${user.firstname} added to the database`);
});

router.get('/:id', (req,res)=> {
    const {id} =(req.params);

    const foundUser = users.find((user)=> user.id == id);

    res.send(foundUser);
});

router.delete('/:id', (req,res)=>{
    const { id } = req.params;

    users = users.filter((user)=> user.id ===! id );
    res.send(`user with  the id ${id} deleted from the database.`);
});




export default router;