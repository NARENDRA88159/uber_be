const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = ({userid,email}) => {
    const token = jwt.sign({ id: userid,email:email }, process.env.JWT_SECRET, {
        algorithm:process.env.JWT_ALGORITHM,
        expiresIn: '1h', // Token expires in 1 hour
    });
    return token;
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET,{ algorithm:process.env.JWT_ALGORITHM});
        return decoded;
    } catch (error) {
        return null; // Token is invalid
    }
};

module.exports = {
    generateToken,
    verifyToken,
};