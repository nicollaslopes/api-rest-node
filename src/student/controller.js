const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });

}

const addStudent = (req, res) => {
    const { name, email, age, birthday } = req.body;
    
     pool.query(queries.checkEmailExists, [email], (error, results) => {

        if (results.rows.length) {
            return res.status(400).send("Email already exists");
        } 

        pool.query(queries.addStudent, [name, email, age, birthday], (error, results) => {
            if (error) throw error;

            res.status(201).send("Student created successfully");
        })



     })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent
}