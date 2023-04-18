import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const userEmail = await User.findOne({ email: email });
        const userName = await User.findOne({ username: username });

        if (userEmail) return res.status(400).json("You are already registered. Please Sign in.");
        else if (userName) return res.status(400).json('Username already exist!')

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const userData = new User({
            username,
            password: passwordHash,
            email,
            score: [{ind: 1, sc: 0},{ind: 2, sc: 0},{ind: 3, sc: 0},{ind: 4, sc: 0},{ind: 5, sc: 0}],
            timeTaken: [{ind: 1, time: 0},{ind: 2, time: 0},{ind: 3, time: 0},{ind: 4, time: 0},{ind: 5, time: 0}],
            profileChar: username[0].toUpperCase(),
            totalScore: 0,
            rank: -1
        })
        const savedUser = await userData.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        // const admin= await Admin.findOne({email: email});

        if (!user) return res.status(400).json("User does not exist. ");

        // if(admin) return res.status(200).json('Admin');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json("Incorrect Password. ");

        else {
            const token= jwt.sign("token", process.env.JWT_SECRET);

            if (user.email === 'saransh@gmail.com')
                return res.status(200).json({user,token,
                type: 'Admin'})

            res.status(200).json({user, token,
            type: 'User'});
        }

    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
};