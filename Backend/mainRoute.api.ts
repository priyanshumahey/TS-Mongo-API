import express from 'express';
import mainController from './controller';

const mainRouter = express.Router()

mainRouter.get('/', mainController.getAllData)

mainRouter.get('/Info', mainController.Info)

module.exports = mainRouter;