const listHelper = require("../utils/list_helper")

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  const listWithTwoBlogs = [...listWithOneBlog,
    {
      _id: "6a422aa71b54a676234d17f8",
      title: "Do Not Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 3,
      __v: 0,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test("when list has two blogs, returns the sum (8) of their likes", () => {
    const result = listHelper.totalLikes(listWithTwoBlogs)
    expect(result).toBe(8)
  })
})
