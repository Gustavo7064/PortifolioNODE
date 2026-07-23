import type { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome completo.').max(120),
  email: z.string().trim().email('Informe um email válido.'),
  message: z.string().trim().min(10, 'Conte um pouco mais na mensagem.').max(2000),
});

export async function createContactMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = contactSchema.parse(req.body);

    const saved = await prisma.contactMessage.create({ data });

    return res.status(201).json({
      message: 'Mensagem enviada com sucesso.',
      id: saved.id,
    });
  } catch (error) {
    return next(error);
  }
}

export async function listContactMessages(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return res.json(messages);
  } catch (error) {
    return next(error);
  }
}
