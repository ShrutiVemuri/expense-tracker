const { addexpense, getexpense, deleteexpense } = require('../controllers/expense')
const { addincome, getincome, deleteincome } = require('../controllers/income')

const router = require('express').Router()

router.post('/add-income', addincome)             //post- sends large amount of data , created ameathod called addincome ...further coding in file of controllers 
   .get('/get-incomes',getincome)
   .delete('/delete-income/:id',deleteincome)
   .post('/add-expense',addexpense)
   .get('/get-expense',getexpense)
   .delete('/delete-expense/:id',deleteexpense)

module.exports = router