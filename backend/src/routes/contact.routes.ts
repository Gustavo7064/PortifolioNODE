import { Router } from 'express';
import { createContactMessage, listContactMessages } from '../controllers/contact.controller';
import { contactRateLimiter } from '../middleware/rateLimiter';

export const contactRouter = Router();

contactRouter.post('/', contactRateLimiter, createContactMessage);
contactRouter.get('/', listContactMessages);
