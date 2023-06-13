const ExpenseSchema = require("../models/ExpenseModel")



exports.addexpense = async (req,res) =>{                                    // addincome-method to add the income 
   const {tittle,amount,category,description,date }=req.body             //created a destructor to get data from req.body
   const income=ExpenseSchema({                                           // created an instance
      tittle,
      amount,
      category,
      description,
      date
   })
   try {
     //validation
     if(!tittle||!category ||!description ||!date){
        return res.status(400).json({message:'All fields are required.'})
     }
     if(amount<=0||!amount=='number'){
        return res.status(400).json({message:'Amount should be positive.'})
     }
     await income.save()
     return res.status(200).json({message:'expense added'})
   } catch (error) {
     return res.status(500).json({message:'Server error'})
   }
 console.log(income)
}

exports.getexpense = async (req,res) =>{
   try {
    const incomes= await ExpenseSchema.find().sort({CreatedAt: -1})           // find()- to get the first element in array.
                                                                            // await()-wait for the asyncronus operation to finish and get the value
    res.status(200).json(incomes)
    
   } catch (error) {
    res.status(200).json({message:'Server error'})
   } 
}

exports.deleteexpense = async (req,res) =>{
   const {id}= req.params;
   ExpenseSchema.findByIdAndDelete(id)
   .then((income)=>{
     res.status(200).json({message:'expense deleted...ja kush re  '})
   })
   .catch((err)=>{
    res.status(500).json({message:' Server error..just like your brain '})

   })

}