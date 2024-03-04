// DO NOT use this
export const TagRequestValidator = (req, res, next) => {
  let { name, color } = req.body;
  if (typeof name != "string" || typeof color != "string")
    return res.status(400).send("name and color should be string");

  if (name.length > 255) return res.status(400).send("name too long");

  if (color.length != 7 || !color.startsWith("#"))
    return res.status(400).send("color format is not valid");

  next();
};
