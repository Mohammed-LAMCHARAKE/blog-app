import http from './httpService'

function getPost(id) {
  return http.get(`/posts/${id}`)
}

function getPosts() {
  return http.get('/posts')
}

function addPost(post) {
  return http.post('/posts', post)
}

function editPost(id, post) {
  return http.put(`/posts/${id}`, post)
}

function deletePost(id) {
  return http.delete(`/posts/${id}`)
}

function commentOnPost(id, comment) {
  return http.post(`/posts/${id}/comment`, { comment })
}

function getPostComments(id) {
  return http.get(`/posts/${id}/comments`)
}

export default {
  getPost,
  getPosts,
  addPost,
  editPost,
  deletePost,
  commentOnPost,
  getPostComments
}
