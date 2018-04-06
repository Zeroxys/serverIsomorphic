import axios from 'axios'
import date from 'date-and-time'

export const FETCH_POSTS = 'fetch_posts'

const baseUrl = 'http://api.invent.mx/v1/actitudfem'
const apiKey = '22360f3a2e03f847acf5339695e42e5b'

export const fetchPosts = () => async (dispatch, getState, api) => {
  console.log(await api.get('/users'))
  const res = await api.get(`v1/actitudfem/nodes.json/${apiKey}?limite=9`)
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
  
  /*const timeStamp = (date) => {
    let dateTime = new Date(date).getTime()
    
    let timestamp =  Math.floor(dateTime / 1000)

    return timestamp
  }*/

  let now = new Date()
  let dateNow = date.format(now, 'DD-MM-YYYY')
  let limitDay = date.format(date.addDays(now, -6), 'DD-MM-YYYY')
  let dateYesterday = date.format(date.addDays(now, -1), 'DD-MM-YYYY')

  const res = await axios.get(`${baseUrl}/node.json/${apiKey}?limit=9&created_start=${limitDay}&created_finish=${dateYesterday}&sort=visits.daycount:DESC&fields=id|title|summary|url|images|type`)
  dispatch({
    type : More_View,
    payload : res
  })
}
