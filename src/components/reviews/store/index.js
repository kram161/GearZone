const fetchUsers = 'fetchUsers',
      SET_USERS = 'SET_USERS',
      fetchReviews = 'fetchReviews',
      SER_REVIEWS = 'SER_REVIEWS';

export default{
  state(){
    return{
      user: [],
      reviews: []
    }
  },
  actions: {
    async [fetchUsers]({commit}){
      await fetch('src/assets/user.json')
        .then(resp => resp.json())
        .then(data => commit(SET_USERS, data))
    },
    async [fetchReviews]({commit}){
      await fetch('src/assets/reviews.json')
        .then(resp => resp.json())
        .then(data => commit(SER_REVIEWS, data))
    }
  },
  mutations: {
    [SET_USERS](state, payload) {
      state.user = payload;
    },
    [SER_REVIEWS](state, payload) {
      state.reviews = payload;
    },
  }
}
