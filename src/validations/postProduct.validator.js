const { body } = require("express-validator");

const productValidationRules = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("price").notEmpty().withMessage("Price is required").isFloat({min:0}).withMessage("Invalid price"),
    body("discount").notEmpty().isInt({min:0,max:100}).withMessage("Invalid discount"),
    body("description").optional().isLength({ max: 800 }).withMessage("Description exceeds maximum length"),
    body("category").notEmpty().withMessage("Subcategory ID is required").isInt().withMessage("Invalid subcategory ID"),
    body("subcategory").notEmpty().withMessage("Subcategory ID is required").isInt().withMessage("Invalid subcategory ID"),
  ];
};


module.exports = {
  productValidationRules,
};