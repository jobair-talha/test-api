const Blog = require("../models/blogModel");

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};
const createBlog = async (req, res) => {
  const blogData = req.body;

  try {
    const newBlog = new Blog(blogData);

    await newBlog.save();

    res.status(200).json({ message: "Blog created Successfully." });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlog,
  getBlogs,
};
