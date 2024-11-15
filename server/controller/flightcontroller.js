import flight from "../model/flightmodel.js"
 export const createflight = async(req,res) => {
   try{

    const flightdata = new flight(req.body)
    if(!flightdata){
        return res.staus(400).json({msg: "flight data not found"});
    }
    await  flightdata.save();
    res.status(200).json({msg :"successfully created flight"});
}
catch (error){
    res.status(500).json({error:error.message});

}
};
export const getallflight = async(req,res)=>{
   try{

    const flightdata =  await flight.find()
    if(!flightdata) {  return res.status(404).json({msg:"flight data not found"});}
    res.status(200).json(flightdata);
}
catch(error){
    res.status(500).json({error:error.message})
}
}


export const getoneflight = async(req,res)=>{
    try{
        const id =req.params.id;
     const flightdata =  await flight.findById(id)
     if(!flightdata) {  return res.status(404).json({msg:"flight data not found"});}
     res.status(200).json(flightdata);
 }
 catch(error){
     res.status(500).json({error:error.message})
 }
 }


export const updateFlight = async (req, res) => {
    try {
      const id =req.params.id;
      const flightData =await flight.findById(id);
      if (!flightData) {
        return res.status(404).json({ msg: "flight data not found" });
      }
  
      const updatedData =await flight.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).json({msg:"Update Successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const updateflights = async (req, res) => {
  try {
    const id =req.params.id;
    const flightData =await flight.findById(id);
    if (!flightData) {
      return res.status(404).json({ msg: "flight data not found" });
    }

    const updatedData =await flight.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const flightDelete = async(req,res)=>{
    try{
        const id=req.params.id;
        const flightData=await flight.findById(id)
    if(!flightData){
        return res.status(404).json({msg:"flight data not found"});
        }
    res.status(200).json({msg:"Deleted Successfully"});
    
    const updatedata=await flight.findByIdAndDelete(id);
    }
  
    catch(error){
        res.status(500).json({error:error.message})
    }
}
//export default createflight;