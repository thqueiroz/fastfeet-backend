import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      address_number: Yup.number().required(),
      address_complement: Yup.string().required(),
      address_state: Yup.string().required(),
      address_city: Yup.string().required(),
      address_cep: Yup.number()
        .required()
        .min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      address: Yup.string(),
      address_number: Yup.number(),
      address_complement: Yup.string(),
      address_state: Yup.string(),
      address_city: Yup.string(),
      address_cep: Yup.number().min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { recipient_id } = req.params;

    console.log(recipient_id);

    const recipient = await Recipient.findByPk(recipient_id);

    const { id, name } = await recipient.update(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new RecipientController();
