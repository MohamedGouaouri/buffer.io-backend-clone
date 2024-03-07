// DO NOT use this
export const TagRequestValidator = (req, res, next) => {
  let { label, color } = req.body;
  if (typeof label != "string" || typeof color != "string")
    return res.status(400).send("name and color should be string");

  if (label.length > 255) return res.status(400).send("name too long");

  if (color.length != 7 || !color.startsWith("#"))
    return res.status(400).send("color format is not valid");

  next();
};
