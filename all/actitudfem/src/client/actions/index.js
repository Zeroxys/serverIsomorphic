export const FETCH_POSTS = 'fetch_posts'
export const fetchPosts = () => async (dispatch, getState, api) => {

  const apiKey = '22360f3a2e03f847acf5339695e42e5b'
  const res = await api.get(`/v1/actitudfem/node.json/${apiKey}?limit=1&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype`)
  
  dispatch({
    type: FETCH_POSTS, 
    payload: res
  })

}