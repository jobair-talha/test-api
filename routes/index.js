const { createBlog, getBlogs } = require("../controller/blog");

const router = require("express").Router();

router.get("/blogs", getBlogs);
router.post("/blogs", createBlog);

module.exports = router;
