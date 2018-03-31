export const FETCH_POSTS = 'fetch_posts'

export const fetchPosts = () => async (dispatch, getState, api) => {
  console.log(await api.get('/users'))
  const apiKey = '22360f3a2e03f847acf5339695e42e5b'
  const res = await api.get(`v1/actitudfem/nodes.json/${apiKey}`)
  dispatch({
    type: FETCH_POSTS, 
    payload: res
  })

}