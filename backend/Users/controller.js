import User from '../Users/model.js'
import genrateToken from '../utils/generateToken.js'
import asynHandler from 'express-async-handler'

//@desp   Register a new user
//@route    POST /api/users
//@access   Public  
export const registerUser= asynHandler(async(req,res) =>{
    
    const {name,email,password}=req.body

    const userExists =await User.findOne({email})    
  
    if(userExists){
      res.status(400)
      throw new Error('User Already Exsits')
    }
    const user = await User.create({
      name,
      email,
      password
    })
  
    if(user){
      res.status(201).json({
        _id: user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:genrateToken(user._id)
      })
  
    }else{
      res.status(400)
      throw new Error('Invalid')
    }
  })

 export const authUser= asynHandler(async(req,res) =>{
    
    const {email,password}=req.body
  
    const user =await User.findOne({email})    
  
    if(user && (await user.matchPassword(password))){
      res.json({
          _id: user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
          token:genrateToken(user._id)
      })
    }else{
        res.status(404)
        throw new Error('Invalid Email or Password')
    }

  })


//@desp    GET all user
//@route    GET /api/users
//@access   Private/ADMIN
export const getUsers= asynHandler(async(req,res) =>{
    const users =await User.find({})
    res.json(users)
  })


  