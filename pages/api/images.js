import { readdir } from 'fs/promises'
import {FILE_DIR} from './utils'

export default async function handler(req, res) {
    const { name } = req.query
    const host = req.headers.host
    try {
        const fileNames = await readdir(FILE_DIR)
        const files = fileNames.map(file => ({
            name: file,
            url: `http://${host}/api/image/${file}`
        }));
        if (name) {
            const filtered = files.filter(file => file.name.indexOf(name) !== -1);
            return res.status(200).send(filtered)
        }
        return res.status(200).send(files)
    } catch (err) {
        throw res.status(500).send({ message: 'Something went wrong: ' + err.message })
    }
  }