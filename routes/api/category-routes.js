const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    res.json(
      await Category.findAll({
        include: [
          {
            model: Product,
            attributes: ["product_name"],
          },
        ],
      })
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    res.json(
      await Category.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            attributes: ["product_name"],
          },
        ],
      })
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  /*
  req.body should look like:
  {
    category_name: "Belts"
  }
*/
  try {
    await Category.create({
      category_name: req.body.category_name,
    });
    res.json("The category has been added.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
