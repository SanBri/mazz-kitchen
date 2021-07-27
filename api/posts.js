import express from "express";
import { check, validationResult } from "express-validator";

import auth from "../../middleware/auth.js";
import User from "../../models/User.js";
import Post from "../../models/Post.js";
import Category from "../../models/Category.js";

const router = express.Router();

// @route  GET api/posts/all-posts
// @desc   Get all posts
// @access Private
router.get("/all-posts", [auth], async (_, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET api/posts/
// @desc   Get all published posts
// @access Public
router.get("/", async (_, res) => {
  try {
    const posts = await Post.find()
      .where({ status: "Publié" })
      .sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET api/posts/categories/:category
// @desc   Get all published posts by category
// @access Public
router.get("/categories/:category", async (req, res) => {
  try {
    const posts = await Post.find()
      .where({ status: "Publié", category: req.params.category })
      .sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET api/posts/:id
// @desc   Get post by ID
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Article introuvable" });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Article introuvable" });
    }
    res.status(500).send("Server Error");
  }
});

// @route  POST api/posts
// @desc   Add a post
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Veuillez donner un titre à l'article").not().isEmpty(),
      check("text", "Vous ne pouvez pas publier un article vide")
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await User.findById(req.user.id).select("-password");

    const { title, text, status, image, category, tags } = req.body;
    const postFields = {};
    postFields.title = title;
    postFields.text = text;
    postFields.author = user;
    postFields.status = status;
    postFields.status = status;
    postFields.author = {};
    postFields.author.name = user.firstname + " " + user.lastname;
    postFields.author.author_id = req.user.id;
    if (image) postFields.image = image;
    if (category) postFields.category = category;
    if (tags) postFields.tags = tags;

    try {
      const newPost = new Post(postFields);
      await newPost.save();
      res.json(newPost);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/posts/:id
// @desc   Edit a post
// @access Private
router.put(
  "/:id",
  [
    auth,
    [
      check("title", "Veuillez donner un titre à l'article").not().isEmpty(),
      check("text", "Veuillez écrire un article").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, text, status, image, category, tags } = req.body;
    const postFields = {};
    postFields.title = title;
    postFields.text = text;
    postFields.status = status;
    if (image) postFields.image = image;
    if (category) postFields.category = category;
    if (tags) postFields.tags = tags;

    try {
      const user = await User.findById(req.user.id).select("-password");

      const post = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { $set: postFields },
        { new: true }
      );
      const editions = {};
      editions.author = user.firstname + " " + user.lastname;
      editions.author_id = user.id;
      editions.date = Date.now();
      post.edited.unshift(editions);
      if (!post) {
        return res.status(404).json({
          errors: [{ msg: "Article introuvable" }],
        });
      }
      await post.save();
      res.json({ msg: "Les modifications ont bien été enregistrées" });
    } catch (err) {
      console.error(err.message);
      if (err.kind == "ObjectId") {
        return res.status(404).json({ msg: "Article introuvable" });
      }
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        errors: [{ msg: "Article introuvable" }],
      });
    }
    await post.remove();
    res.json("Article supprimé");
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post introuvable" });
    }
    res.status(500).send("Server Error");
  }
});

// @route  POST api/posts/categories
// @desc   Add a category
// @access Private
router.post(
  "/categories",
  [auth, [check("name", "Veuillez nommer la catégorie").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newCategory = new Category(req.body);
      await newCategory.save();
      res.json(newCategory);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/posts/categories/:id
// @desc   Edit a category
// @access Private
router.put(
  "/categories/:id",
  [auth, [check("name", "Veuillez nommer la catégorie").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const category = await Category.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!category) {
        return res.status(404).json({
          errors: [{ msg: "Catégorie introuvable" }],
        });
      }
      await category.save();
      res.json({ msg: "Les modifications ont bien été enregistrées" });
    } catch (err) {
      console.error(err.message);
      if (err.kind == "ObjectId") {
        return res.status(404).json({ msg: "Catégorie introuvable" });
      }
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/posts/categories/:id
// @desc    Delete a category
// @access  Private
router.delete("/categories/:id", auth, async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        errors: [{ msg: "Catégorie introuvable" }],
      });
    }
    await category.remove();
    res.json("Catégorie supprimé");
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Catégorie introuvable" });
    }
    res.status(500).send("Server Error");
  }
});

export default router;
