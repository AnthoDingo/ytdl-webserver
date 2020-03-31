const path = require('path')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const youtubeDl = require('youtube-dl')

function exists (filename, cb) {
  fs.access(filename, fs.F_OK, (err) => {
    if (!err) {
      cb(true)
    } else {
      cb(false)
    }
  })
}

function download (url, options = {
  path: 'downloads',
  audioOnly: false
}) {
  return new Promise((resolve, reject) => {
    let format = 'mp4'
    let dlFormat = 'bestvideo[ext=mp4]+bestaudio[ext=m4a]'

    if (options.audioOnly) {
      format = 'mp3'
      dlFormat = 'bestaudio[ext=m4a]'
    }

    youtubeDl.getInfo(url, function (err, info) {
      'use strict'
      if (err) {
        throw err
      }

      let filename = info._filename
      filename = filename
        .replace('.mp4', '')
        .substring(0, filename.length - 16)

      const dlPath = path.join(options.path, filename)

      youtubeDl.exec(
        url,
        ['-f', dlFormat, '-o', dlPath],
        { cwd: __dirname, maxBuffer: Infinity },
        function exec (err, output) {
            'use strict'
            if (err) {
              throw err
            }

            const filePath = path.join(options.path, `${filename}.${format}`)

            let expirationDate = new Date()
            const maxDays = process.env.EXPIRATION || 1
            expirationDate.setDate(expirationDate.getDate() + maxDays)

            const videoObj = {
              name: filename,
              url,
              downloading: false,
              format,
              expiration: expirationDate.toJSON()
            }

            if(!options.audioOnly){
              fs.rename(dlPath, filePath, () => {
                resolve(videoObj)
              })
            } else {
              ffmpeg({ source: dlPath })
                  .on('end', () => {
                    fs.unlink(dlPath, () => {
                      resolve(videoObj)
                    })
                  })
                  .toFormat(format)
                  .save(filePath)
            }
        }
      )
    })
  })
}

module.exports = {
  download
}
