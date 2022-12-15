import express from "express";

const router = express.Router();


const users = [
    {
        firstname: "nadeem",
        lastname: "nadeem",
        age: 25
    },
    {
        firstname: "",
        lastname: "nadeem",
        age: 25
    }   
]
// GET /users find all users
router.get('/', (_req, res) => res.send(users));

export default router;