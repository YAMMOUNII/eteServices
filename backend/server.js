import express  from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer'
import path from 'path'

const app = express()
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"../frontend/public/images")
  },
  filename: (req,file,cb) => {
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
})

const upload = multer({
  storage:storage
})

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"ete"
})

app.post('/upload', upload.single('image'),(req,res)=>{
  console.log(req.file)
})

app.listen(8081,()=>{
  console.log("Running oki");
})