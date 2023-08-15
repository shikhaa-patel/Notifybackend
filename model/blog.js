import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
        
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        
    },
    image:{
        type:String,
               
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true,
    }
});

export default mongoose.model('blog',blogSchema);