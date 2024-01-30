import { Request, Response } from 'express';
import { Product } from '../../models/Product';



export async function createProduct(req: Request, res: Response) {
  try {

  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Algo deu errado' });
  }
}
