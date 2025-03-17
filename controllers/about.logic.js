import express from 'express';

const about = (req, res) => {
  res.render('about')
}

export { about };