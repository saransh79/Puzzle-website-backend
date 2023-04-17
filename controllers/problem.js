import Problem from "../models/Problem.js";
import User from "../models/User.js";

export const addProblem = async (req, res) => {
    try {
        const { id, answer, points } = req.body;
        const problem = await Problem.findOne({ id });
        if (problem) return res.json("problem already exists.")

        const newProblem = new Problem({ id, answer, points })
        await newProblem.save()
        res.json(newProblem)

    } catch (error) {
        console.log(error);
    }
}

export const checkAnswer = async (req, res) => {
    try {
        const { username, id, answer } = req.body;
        const problem = await Problem.findOne({ id })

        if (problem.answer === answer.toLowerCase() && username) {
            await User.updateOne({ username, "score.ind": id }, {
                $set: {
                    "score.$.sc": problem.points
                }
            })
            return res.status(200).json('Correct Answer');
        }
        else {
            if (username) {
                return res.status(400).json('Incorrect Answer');
            }
            else return res.status(400).json('Please sign in first!')
        }

    } catch (error) {
        console.log(error);
    }
}