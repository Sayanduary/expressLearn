import express from 'express'


const allStudents = (req, res) => {
  res.send("logic for display all the students");
}


const createNewUser = (req, res) => {
  res.send('Logic For creating new user');
}

const updateStudent = (req, res) => {
  res.send('logic for updating student details')
}


const removingStudent = (req, res) => [
  res.send('logic for removing students')
]


export { allStudents, createNewUser, updateStudent, removingStudent };