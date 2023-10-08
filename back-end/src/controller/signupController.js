const signupModel = require("../model/signupModel")
const mongoose = require('mongoose')

const signup_user = async (req, res) => {
    try {

        const data = req.body;
        const { user_name, email, password, phone, device_id } = data;

        if (!data) {
            return res.status(400).send({ status: 0, msg: "Please fill all fields" })
        }

        const existingUser = await signupModel.findOne({ device_id });

        if (existingUser) {
          return res.status(400).send({ status: 0, msg: 'Device ID is already registered' });
        }    

        let obj = {
            user_name:user_name,
            email:email,
            password:password,
            phone:phone,
            device_id: device_id
        }

        let create = await signupModel.create(obj)
        return res.status(200).send({ status: 1, mag: "register sucessfully", data: obj })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 0, msg: "server error" })
    }
}

const signIn_user = async (req, res) => {
    try {
      const data = req.body;
      const { email, password, phone } = data;
      const body = { }
      body.password = password
      if(email) { body.email = email }
      if(phone) { body.phone = phone }  
      const existingUser = await signupModel.findOne( body );
  
      if (!existingUser) {
        return res.status(400).send({ status: 0, msg: "Invalid email/phone or password" });
      }
  
      return res.status(200).send({ status: 1, msg: "Login successfully", data: existingUser });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: 0, msg: "Server error" });
    }
  };  

module.exports = {signup_user, signIn_user};