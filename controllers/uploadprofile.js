const fs = require('fs-extra');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

     
//storage
const storage = multer.diskStorage({
    destination:'../public/uploads',
    filename: (req,file,cb) =>{

        cb(null, file.fieldname + '-' + Date.now() +  path.extname(file.originalname));
        console.log(file);
    }
})  

const upload = multer({
    storage: storage,limits : {
        fileSize : 1000000
    },
    fileFilter : function( req,file, cb){
        checkFIleType(file,cb);
    }
})

async function checkFIleType(file,cb){
    console.log(file);

    //allowed extensions
    const fileTypes = /jpeg|jpg|png|gif/;
    // console.log(fileTypes)

    //check ext 
    const extname = fileTypes.test( path.extname(file.originalname).toLowerCase());
    console.log(extname)

    //check mimetype 
    const mimetype = fileTypes.test(file.mimetype);
    // console.log(mimetype);

    if(mimetype && extname) {
        return cb(null,true);
    }else {
        return cb( 'error : Image only');
    }

}

const bichka =  upload.single('profilepic');
//route
  const uploadpic =  function (req,res,next){

        const file = req.file
            if (!file) {
              const error = new Error('Please upload a file')
              error.httpStatusCode = 400
              return next(error)
            }
            //   res.send(file.path)

              const firstpart = "http://localhost:8001/";
      //change the port number before merging 
      const urllink = firstpart.concat(file.path);
      res.send(urllink);
    }


module.exports = {
    bichka, 
    uploadpic
};