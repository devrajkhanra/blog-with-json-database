import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage"
import About from "./components/About";
import { useEffect, useState, } from "react";
import api from "./api/posts"
import EditPost from "./components/EditPost";

function App() {

  const [posts, setPosts] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/post`)
        setPosts(response.data)
      } catch (error) {
        if (error.response) {
          console.log(error.response.status)
        } else {
          console.log(`Error: ${error.message}`)
        }
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    const filteredResult = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResult(filteredResult.reverse())
  }, [posts, search])

  const handleEdit = async (id) => {
    const updatedPost = { id, title: editTitle, body: editBody }
    try {
      const response = await api.put(`/post/${id}`, updatedPost)
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
      setEditTitle('')
      setEditBody('')
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/post/${id}`)
      const postsList = posts.filter(post => post.id !== id)
      setPosts(postsList)
      navigate('/')
    } catch (error) {
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const newPost = { id, title: postTitle, body: postBody }
    try {
      const response = await api.post('/post', newPost)
      const allPost = [...posts, response.data]
      setPosts(allPost)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path='/' element={<Home posts={searchResult} />} />
        <Route exact path='/post' element={<NewPost postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit} />} />
        <Route path='/edit/:id' element={<EditPost posts={posts} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} handleEdit={handleEdit} />} />
        <Route exact path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;