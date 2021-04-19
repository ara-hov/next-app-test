import { NextApiRequest, NextApiResponse } from 'next'
import {getImageInfo} from "@/props/info-state";
import multer from 'multer';
import moment from "moment";

type NextApiRequestWithFormData = NextApiRequest & {
    file?: any,
}
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
  try {
    let fileNameStorage = '';
    const storage = multer.diskStorage({
        destination: './public' + process.env.UPLOAD_DIR,
        filename: function (req, file, cb) {
            fileNameStorage = moment().format("DD_MM_YYYY_hh_mm_ss") + "_" + file.originalname;
            cb(null, fileNameStorage)
        }
    });

    const upload = multer({
       storage: storage
    }).single("file");

    await upload(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(501).json({ message: err })
        } else {
            if (req.file == undefined) {
                res.status(404).json({message: 'File not found.'});
            } else {
                res.status(201).json(getImageInfo(fileNameStorage));
            }
        }
        res.end()
    });
  } catch (e) {
        return res.status(500).json({ message: e.message })
  }

}