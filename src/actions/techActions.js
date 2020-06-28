import {
  GET_TECHS,
  ADD_TECHS,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  GET_LOGS,
  LOGS_ERROR,
} from './types'

//Get Techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    })
  }
}
//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
