import * as NewsActionTypes from '../../actions/types/news';

const initialState = {
  loading: false,
  list: [],
  total: 0,
  filter: '',
  error: null,
};

const news = (state = initialState, action = {}) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        filter: action.filter || '',
      };
    case NewsActionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.data,
        total: action.payload.count,
      };
    case NewsActionTypes.GET_NEWS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default news;
