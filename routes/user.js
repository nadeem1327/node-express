import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


const users = [];

// GET /users find all users
router.get('/', ( req, res) => res.send(users));

//POST /creating users 
router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with name ${user.firstname} added to the database`);
});

//PATCH /update user details
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstname) {
        user.firstname = firstname;
    }

    if(lastname) {
        user.lastname = lastname;
    }

    if(age) {
        user.age = age;
    }

    res.send(`user with id ${id} has been updated.`);
});

export default router;