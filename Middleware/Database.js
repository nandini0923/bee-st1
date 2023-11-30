const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://nandini0923be21:nandini@cluster0.dedwa9s.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>console.log(err));
