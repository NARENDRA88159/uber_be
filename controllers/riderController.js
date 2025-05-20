const Rider = require('../Model/rider');
const { generateToken } = require('../modules/jwt');
const { hashPassword, comparePassword } = require('../modules/passwordEncryption');


const riderRegister= async (req, res) => {
    const { firstName, lastName, email, password,Status, vehicle, location,isOnline } = req.body;
console.log("body",req.body)
   
   
   
    try {

        const emailalreadyExists = await Rider.findOne({ email: email });
        if (emailalreadyExists) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const hashedPassword = await hashPassword(password);

        const newRider = new Rider({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            Status:Status,
           vehicle:{
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
           },
            lat: location.lat,
            lng: location.lng,
            isOnline: isOnline,
        });

        await newRider.save();
        res.status(201).json({ message: "Rider registered successfully", rider: newRider });
    } catch (error) {
        res.status(500).json({ message: "Error registering rider", error });
    }
}

const riderLogin=async (req,res)=>{
     try{
    const {email,password}=req.body
    isEmailExist=await Rider.findOne({email,email});
    if(!isEmailExist){
        return res.status(400).json({"message":"This email is not  exists"})
    }
    const verifypassword=await comparePassword(password,isEmailExist?.password)
    if(!verifypassword){
        return res.status(400).json({"message":"This password is not  math"})
    }
    return res.status(200).json({"message":"login successfuly","token":generateToken({"userid":isEmailExist?._id,email:email})})
}catch(error){
    return res.status(500).json({"message":"internal server error"})
}
}

module.exports = {
    riderRegister,
    riderLogin
}