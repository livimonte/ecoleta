import { Request, Response } from 'express';
import knex from '../database/connection';
import { ip } from '../helpers/utils';

class ItemsController {
  async index(request: Request, response: Response): Promise<unknown> {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://${ip}:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
