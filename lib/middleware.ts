import formidable from 'formidable'; 
import  fs from 'fs';
import path from 'path';


export const config={
    api:{
        bodyParser:false
    }
}


export function ParseFrom(req:any):Promise<{fields:any,files:any}>{
    
     const uploadDir = path.join(process.cwd(), '/public/uploads');
  fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({
    multiples: true,
    uploadDir,
    keepExtensions: true
  });


    return new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });


}







