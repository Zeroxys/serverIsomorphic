import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'

export const fetchPosts = () => async dispatch => {
  const res = await axios.get('http://api.invent.mx/v1/actitudfem/node.json/22360f3a2e03f847acf5339695e42e5b??limit=9&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype')

  dispatch({
    type: FETCH_POSTS,
    payload: res
  })
}