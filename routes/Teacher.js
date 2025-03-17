import express from 'express'

const router = express.Router();

router.get('/all', (req, res) => {
  res.send('All Teachers Will be displayed here')
});

router.post('/add', (req, res) => {
  res.send('Sign up page for new teacher');
})

router.put('/update', (req, res) => {
  res.send('update teacher details')
});

router.delete('/remove', (req, res) => {
  res.send("Removing Teacher");
})

export default router;