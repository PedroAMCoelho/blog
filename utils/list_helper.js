const dummy = (blogs) => {
    return 1;
  }

  const totalLikes = (blogs) => {
    return blogs.reduce((acc, curr) => acc + curr.likes, 0)
  }

  const favoriteBlog = (blogs) => {
    return blogs.reduce((prev, curr) => curr.likes > prev.likes ? {title: curr.title, author: curr.author, likes: curr.likes} : {title: prev.title, author: prev.author, likes: prev.likes})
  }
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }