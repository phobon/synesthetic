import fs from 'fs'
import path from 'path'
import glob from 'glob'

export default (req, res) => {
  const meshes = glob
    .sync('./meshes/**/*.tsx')
    .map((file) => `../../${file.substring(2, file.length - 4)}`)
  return res.status(200).json(meshes)
}
