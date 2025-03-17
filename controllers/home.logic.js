import express from 'express';




const home = (req, res) => {
  const data = {
    name: "Sayan",
    age: 23,
    Address: "Subhasgram"
  }
  res.render('index', data);
}

export { home };