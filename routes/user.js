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


export default router;