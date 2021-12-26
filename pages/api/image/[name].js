import fs from 'fs';
import path from 'path';
import mime from 'mime-types'
import {FILE_DIR} from '../utils'

// API to download an individual image
export default async function handler(req, res) {
    const { name } = req.query
    const filePath = path.join(FILE_DIR, name)
    res.writeHead(200, {
        'Content-Type': mime.lookup(filePath)
    })
    const readStream = fs.createReadStream(filePath)
    await new Promise(function (resolve) {
        readStream.pipe(res)
        readStream.on('end', resolve)
    })
}