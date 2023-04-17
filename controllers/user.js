import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find()

        const users = allUsers.filter(item => item.email !== process.env.EMAIL)

        res.status(200).json(users)
    } catch (error) {

    }
}

export const getScore= async(req,res)=>{
    try {
        const {username}=req.body;
        const user= await User.findOne({username});
        var score=0;
        for(var i=0; i<user.score.length; i++){
            score+=user.score[i].sc;
        }
        res.json(score);
    } catch (error) {
        
    }
}