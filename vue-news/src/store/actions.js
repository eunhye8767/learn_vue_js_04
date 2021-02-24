import { 
  fetchAskList, 
  fetchJobsList, 
  fetchNewsList, 
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then( response => {
        context.commit('SET_NEWS', response.data);
        console.log(response)
      })
      .catch( error => console.log(error))
  },
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch( error => console.log(error))
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then( ({data})  => {
        commit('SET_ASK', data);
      })
      .catch( error => console.log(error))
  },
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then( ({ data }) => {
        commit('SET_USER', data)
      } )
      .catch( error => console.log(error))
  },
  FETCH_ITEM({commit}, item) {
    fetchItemInfo(item)
      .then( ({ data }) => {
        commit('SET_ITEM', data)
      } )
      .catch( error => console.log(error))
  }
}