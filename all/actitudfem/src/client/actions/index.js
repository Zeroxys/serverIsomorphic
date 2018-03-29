export const FETCH_POSTS = 'fetch_posts'
export const fetchPosts = () => async (dispatch, getState, api) => {

  const res = await api.get('?limit=3&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype')
    //.then(res => console.log(res))
    //.catch(err => console.log(err))
  dispatch({
    type: FETCH_POSTS, 
    payload: res
  })
}