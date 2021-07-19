const blogPost = document.getElementById("submit-blog");

const saveBlog = (blog) => {
  fetch("/blog/create", {
    method: POST,
    body: JSON.stringify(blog),
  });
};

blogPost.addEventListener("click", saveBlog);
