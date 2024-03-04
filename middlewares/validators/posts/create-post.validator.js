
import Joi from "joi";

export function createPostValidator(req, res, next) {
    const postBody = req.body
    const postSchema = Joi.object({
      description: Joi.string().required().min(10),
      attachment_url: Joi.string().uri().required(),
      schedule_date: Joi.date().required(),
      is_draft: Joi.boolean(),
      is_approved: Joi.boolean(),
      tags: Joi.array(),
      channel: Joi.string(),
    })
    const {error} = postSchema.validate(postBody)
    console.log(error)
    if (error) {
      return res.status(400).json({ message: "Invalid data", error: error });
    }
    // We can validate the channel as well here
    // the data is valid, so call the next function
    next()
}