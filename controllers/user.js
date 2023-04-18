import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        const users = allUsers.filter(item => item.email !== process.env.EMAIL)

        users.sort((a,b)=> a.rank -b.rank)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getScore = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await User.findOne({ username });
        const users = await User.find();

        var score = 0;
        for (var i = 0; i < user.score.length; i++) {
            score += user.score[i].sc;
        }
        const sortedUsers= users.sort((a,b)=> b.totalScore - a.totalScore);
        const userIndex= sortedUsers.findIndex(user=> user.username === username)

        await User.updateOne({username: username},{
            $set: {
                "totalScore": score,
                "rank": userIndex === -1? -1: userIndex
            }
        })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {email}= req.body
        await User.deleteOne({ email});
        res.status(200).json('User deleted.')
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
