import * as Yup from 'yup';
import Step from '../models/Step';

class StepController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipe_id: Yup.number().required(),
      instruction: Yup.string().required(),
      order: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { instruction, order, recipe_id } = await Step.create(req.body);

    return res.json({ instruction, order, recipe_id });
  }
}

export default new StepController();
