const express=require('express');
const router=express.Router(); 

router.get('/',(req,res)=>{
    obj={
        a:'this one',
        number: 1001
    }
    res.json(obj)
})

module.exports=router