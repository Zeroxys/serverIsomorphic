import axios from 'axios'
import date from 'date-and-time'

export const FETCH_POSTS = 'fetch_posts'

const baseUrl = 'http://api.invent.mx/v1/actitudfem'
const apiKey = '22360f3a2e03f847acf5339695e42e5b'

export const fetchPosts = () => async (dispatch, getState, api) => {
  console.log(await api.get('/users'))
  const res = await api.get(`v1/actitudfem/nodes.json/${apiKey}?limite=5`)
  dispatch({
    type: FETCH_POSTS, 
    payload: res
  })

}

export const GET_POST = 'get_post'
export const getPost = () => async (dispatch, getState, api) => {
  //const res = await axios.get(`http://api.invent.mx/v1/actitudfem/nodes.json/${apiKey}?id=119585`)
  const res = await axios.get(`${baseUrl}/node.json/${apiKey}?id=119585&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype`)
  dispatch({
    type: GET_POST,
    payload: res
  })
}

export const More_View = 'more_view'
export const getMoreViews = () => async (dispatch, getState, api) => {
  
  let now = new Date()
  let dateNow = date.format(now, 'ddd MMM YYYY 00:00:00') 
  let dateYesterday = date.format(date.addDays(now, -1), 'ddd MMM YYYY 00:00:00')
  console.log(dateNow)
  console.log(dateYesterday)

  //Recuerda cambiar la peticion para obtener el query que ya esta hecho en la app
  const res = await axios.get(`${baseUrl}/node.json/${apiKey}?id=119585`)
  dispatch({
    type : More_View,
    payload : res
  })
}
