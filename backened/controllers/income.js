const IncomeSchema = require("../models/IncomeModel")



exports.addincome = async (req,res) =>{                                    // addincome-method to add the income 
   const {tittle,amount,category,description,date }=req.body             //created a destructor to get data from req.body
   const income=IncomeSchema({                                           // created an instance
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
     return res.status(200).json({message:'Income added'})
   } catch (error) {
     return res.status(500).json({message:'Server error'})
   }
 console.log(income)
}

exports.getincome = async (req,res) =>{
   try {
    const incomes= await IncomeSchema.find().sort({CreatedAt: -1})           // find()- to get the first element in array.
                                                                            // await()-wait for the asyncronus operation to finish and get the value
    res.status(200).json(incomes)
    
   } catch (error) {
    res.status(200).json({message:'Server error'})
   } 
}

exports.deleteincome = async (req,res) =>{
   const {id}= req.params;
   IncomeSchema.findByIdAndDelete(id)
   .then((income)=>{
     res.status(200).json({message:'income deleted...ja kush re  '})
   })
   .catch((err)=>{
    res.status(500).json({message:' Server error..just like your brain '})

   })

}