import axios from 'axios';
import * as ActionTypes from '../types/news';

export const getAllNews = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_NEWS_REQUEST });
  try {
    const { data } = await axios.get('/crawler/news');
    dispatch({
      type: ActionTypes.GET_NEWS_SUCCESS,
      payload: data,
    });
  } catch(error) {
    dispatch({
      type: ActionTypes.GET_NEWS_FAILED,
      payload: error,
    });
  }
};

export const getNewsByFilter = (filter) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_NEWS_REQUEST });
  try {
    const { data } = await axios.get(`/crawler/news?filter=${filter}`);
    dispatch({
      type: ActionTypes.GET_NEWS_SUCCESS,
      payload: data,
    });
  } catch(error) {
    dispatch({
      type: ActionTypes.GET_NEWS_FAILED,
      payload: error,
    });
  }
};
