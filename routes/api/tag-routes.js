const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    res.json(
      await Tag.findAll({
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
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    res.json(
      await Tag.findByPk(req.params.id, {
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
  // create a new tag
  // req.body should look like
  /*
  {
  "tag_name": "Luxury"
  }
   */

  try {
    await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json("The category has been added.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json("The tag name has been updated.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json("The tag has been sucessfully deleted.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
