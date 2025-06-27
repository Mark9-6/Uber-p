const mapService = require('../services/maps.service')
const{validationResult} = require('express-validator');



module.exports.getCordinates = async(req,res,next)=>{
   
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }



    const {address} =  req.query;

    try {
        // console.log(address)
        const cordinates = await mapService.getAddressCordinates(address);
        res.status(200).json(cordinates)
    } catch (error) {
        res.status(404).json({message:'Cordinates not found'})
    }
}