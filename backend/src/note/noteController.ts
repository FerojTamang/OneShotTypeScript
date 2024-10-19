
import { NextFunction, Request, Response} from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import globalErrorHandler from "../middlewares/globalErrorHandler";
import createHttpError from "http-errors";
import { nextTick } from "process";


const createNote = async (req:Request,res:Response, next:NextFunction) =>{
  try {
    const file = req.file ? `${envConfig.backendUrl}/${req.file.filename}` : 'https://cdn.mos.cms.futurecdn.net/i26qpaxZhVC28XRTJWafQS.jpeg'
  const {title, subtitle,description} = req.body
  if(!title || !subtitle ||!description) {
    res.status(400).json ({
        message :"please provide title, subtitle, description"
    })
    return
  }
    await noteModel.create({ 

        title,
        subtitle,
        description,
        file

     })
     res.status (201).json ({
        message : "Note Created"
     })


    
  } catch (error) {
    console.log(error)
    return next(createHttpError(500,'Error while creating'))


    
  } 
}

const listNotes = async (req:Request,res:Response, next:NextFunction )=> {
   try {

    const notes = await noteModel.find()
    res.status(200).json ({
        message: "notes fetched",
        data : notes
    })
    
   } catch (error) {
    return next(createHttpError(500,"error while fetching"))
    
   }
}

const listNote = async (req:Request,res:Response, next:NextFunction )=> {
    try {
 
        const {id} = req.params
     const note = await noteModel.findById(id)
     if(!note) {
        return next(createHttpError(404, "note not found with it"))
     }
     res.status(200).json ({
         message: "notes fetched",
         data : note
     })
     
    } catch (error) {
     return next(createHttpError(500,"error while fetching"))
     
    }
 }

 const deleteNote = async (req:Request,res:Response, next:NextFunction )=> {
    try {
 
        const {id} = req.params
      await noteModel.findByIdAndDelete(id)
     res.status(200).json ({
         message: "notes deleted"
         
     })
     
    } catch (error) {
     return next(createHttpError(500,"error while fetching"))
     
    }
 }




export {createNote, listNote, listNotes, deleteNote} 