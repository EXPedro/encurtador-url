import { URLController } from './controller/URLController'
import express, {Request, Response} from 'express'
import { MongoConnection } from './database/MongoConnection'

const api = express()

const urlController = new URLController

  api.use(express.json())

  const database = new MongoConnection()
  database.connect()

  //POST
  api.post(
    '/shorten', urlController.shorten
  )

  //GET
  api.get(
    '/:hash', urlController.redirect
  )
  
  api.listen(5000, () => console.log('Express listening'))

  
  