
import Joi from "joi";

export function createPostValidator(req, res, next) {
    // TODO: it should be updated
    const postBody = req.body.post
    const userid = req.body.userId
    const postSchema = Joi.object({
      content: Joi.string().required().min(10),
      status: Joi.string().required(),
      image: Joi.string().uri().required(),
      scheduledAt: Joi.date().required(),
      isApproved: Joi.boolean(),
    })
    const {error} = postSchema.validate(postBody)
    console.log(error)
    if (error) {
      return res.status(400).json({ message: "Invalid data", error: error });
    }
    if (!userid) {
      return res.status(400).json({ message: "Invalid data", error: 'User id is required' });
    }

    // We can validate the channel as well here
    // the data is valid, so call the next function
    next()
}