import express from "express";
import bcrypt from 'bcrypt';
import {Admin} from './models/Admin.js'
import './db.js'

async function AdminAccount(){
    try{
        const adminCount =  await Admin.countDocuments()
        if(adminCount === 0){
            const hashPwd =  await bcrypt.hash('adminpwd',10)
            const newAdmin = new Admin({
                username : 'admin',
                password: hashPwd
            })
            await  newAdmin.save()
            console.log("Ac created");
        }
        else{
            console.log("Ac is already existed");
            
        }
    }
    catch(err){
        console.log(err)
    }
}

AdminAccount()
