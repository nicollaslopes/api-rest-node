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

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {

        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            return res.status(400).send('Student does not exist in the database');
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;

            res.status(200).send('Student removed successfully');
        });


    });
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);

    const { name } = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {

        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            return res.status(400).send('Student does not exist in the database');
        }

        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if (error) throw error;

            res.status(200).send('Student updated successfully');
        });


    });
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent
}