const { Users } = require("../database/models");
const { messages } = require("../messages");

exports.signUp = async (req, res) => {
    const {
        body: { name, email, password, profilePic },
    } = req;
    try {
        const user = await Users.create({
            name,
            email,
            password,
            profilePic,
        });
        return res.json({
            status: 200,
            message: messages.registration,
        });
    } catch (error) {
        console.log(error);
    }
};
