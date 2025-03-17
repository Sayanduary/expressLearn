import express from 'express';
import { allStudents, createNewUser, updateStudent, removingStudent } from '../controllers/students.logic.js';

const router = express.Router();



router.get('/all', allStudents);

router.post('/create', createNewUser)


router.put('/update', updateStudent)

router.delete('/delete', removingStudent);

export default router;




