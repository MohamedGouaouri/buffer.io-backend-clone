
import Joi from "joi";

export function createPostValidator(req, res, next) {
    const courseData = req.body
    const courseSchema = Joi.object({
      description: Joi.string().required().min(10),
      attachment_url: Joi.string().uri().required(),
      schedule_date: Joi.date().required(),
      is_draft: Joi.boolean(),
      is_approved: Joi.boolean(),
      tags: Joi.array(),
      channel: Joi.string(),
    })
    const {error} = courseSchema.validate(courseData)
    if (error) {
      return res.status(400).json({ message: "Invalid data", error: error });
    }
    // We can validate the channel as well here
    // the data is valid, so call the next function
    next()
}