const router = require("express").Router();
const bookModel = require("../models/booksModel");

// Post request
router.post("/add", async (req, res) => {
  
  try {
    const data = req.body;
    await bookModel.create(data);

    res.status(200).json({
      success:true
     
    })
  } catch (error) {
    console.log(error);
  }
});

//get request
router.get('/getBooks', async(req,res) =>{
    let books;
    try{
       books= await bookModel.find();
       res.status(200).json({books});
    }
    catch(error){
        console.log(error);

    }
});

//get request with the help of id
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    const id= req.params.id;
    try{
      book=  await bookModel.findById(id);
        res.status(200).json({book})
    }
    catch(error){
        console.log(error);
    }
});

// update books by id
router.put("/updateBook/:id",async(req,res)=>{
    const id= req.params.id;
    const { bookname, description, author, image, price}=req.body;
    let book;
    try{
     book =   await bookModel.findByIdAndUpdate(id,{
             bookname, 
             description, 
             author, 
             image, 
             price,
            });
            await book.save().then(()=> res.json({message:"data updated"}));
    }
    catch(error){
        console.log(error);
    }
});

//Delete book by id
router.delete("/deleteBook/:id",async (req,res)=> {
    const id = req.params.id;
    try{
        await bookModel.findByIdAndDelete(id)
        .then(()=>res.status(200)
        .json({message:"deleted successfully"}));

    } catch(error){
        console.log(error);
    }
})

module.exports = router;
 