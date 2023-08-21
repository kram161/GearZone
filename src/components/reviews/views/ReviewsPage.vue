<template>
  <q-page class="reviews">
    <h2>Отзывы</h2>
    <q-list v-if="reviews.length > 0 && sortedEmpty === false">
      <q-item style="padding: 0;">
        <q-item-section class="reviews__info">
          <div class="reviews__client">
            <img :src="user.image" alt="avatar">
            <div class="reviews__client-description">
              <p class="reviews__client-name">{{ user.name }} {{ user.surname }}</p>
              <p class="reviews__client-count">{{ reviews.length }} отзывов за 1 месяц</p>
              <div class="reviews__client-rating">
                <svg v-for="rating in user.rating" :key="rating" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.97384 3.77843C9.90799 3.56714 9.7284 3.41754 9.51675 3.39756L6.63005 3.12408L5.48921 0.336929C5.40498 0.13216 5.21333 0 5.00001 0C4.78668 0 4.59496 0.13216 4.51126 0.336929L3.37042 3.12408L0.483259 3.39756C0.271617 3.41794 0.0923994 3.56753 0.0261753 3.77843C-0.0396674 3.98973 0.0211398 4.22149 0.181207 4.36798L2.36332 6.36463L1.71993 9.32168C1.67285 9.53911 1.75373 9.76394 1.92661 9.89435C2.01954 9.96481 2.12872 10 2.23828 10C2.33242 10 2.42665 9.97389 2.5108 9.92134L5.00001 8.36822L7.48875 9.92134C7.67133 10.0352 7.9009 10.0248 8.0734 9.89435C8.24629 9.76394 8.32716 9.53911 8.28009 9.32168L7.63669 6.36463L9.8188 4.36798C9.9788 4.22149 10.0397 3.99021 9.97384 3.77843Z" fill="#FFCE4F"/>
                </svg>
                <svg v-for="rating in (5 - user.rating)" :key="rating" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.97384 3.77843C9.90799 3.56714 9.7284 3.41754 9.51675 3.39756L6.63005 3.12408L5.48921 0.336929C5.40498 0.13216 5.21333 0 5.00001 0C4.78668 0 4.59496 0.13216 4.51126 0.336929L3.37042 3.12408L0.483259 3.39756C0.271617 3.41794 0.0923994 3.56753 0.0261753 3.77843C-0.0396674 3.98973 0.0211398 4.22149 0.181207 4.36798L2.36332 6.36463L1.71993 9.32168C1.67285 9.53911 1.75373 9.76394 1.92661 9.89435C2.01954 9.96481 2.12872 10 2.23828 10C2.33242 10 2.42665 9.97389 2.5108 9.92134L5.00001 8.36822L7.48875 9.92134C7.67133 10.0352 7.9009 10.0248 8.0734 9.89435C8.24629 9.76394 8.32716 9.53911 8.28009 9.32168L7.63669 6.36463L9.8188 4.36798C9.9788 4.22149 10.0397 3.99021 9.97384 3.77843Z" fill="#f8c5621c"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="reviews__sort">
            <q-select outlined v-model="selectedFilter" :options="ratingFilter" label="Фильтр рейтинга"></q-select>
          </div>
        </q-item-section>
      </q-item>
      <q-item class="reviews__unit" v-for="(review,index) in reviewsLoaded" :key="index">
        <img :src="review.image" alt="avatar">
        <div class="reviews__unit-description">
          <div class="reviews__unit-header">
            <div class="reviews__unit-left">
              <p class="reviews__unit-name">{{ review.user_name }}</p>
              <p class="reviews__unit-game">{{ review.info }}</p>
            </div>
            <div class="reviews__unit-right">
              <p class="reviews__unit-month">{{ review.date }}</p>
              <div class="reviews__unit-rating">
                <svg v-for="rating in review.rating" :key="rating" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.97384 3.77843C9.90799 3.56714 9.7284 3.41754 9.51675 3.39756L6.63005 3.12408L5.48921 0.336929C5.40498 0.13216 5.21333 0 5.00001 0C4.78668 0 4.59496 0.13216 4.51126 0.336929L3.37042 3.12408L0.483259 3.39756C0.271617 3.41794 0.0923994 3.56753 0.0261753 3.77843C-0.0396674 3.98973 0.0211398 4.22149 0.181207 4.36798L2.36332 6.36463L1.71993 9.32168C1.67285 9.53911 1.75373 9.76394 1.92661 9.89435C2.01954 9.96481 2.12872 10 2.23828 10C2.33242 10 2.42665 9.97389 2.5108 9.92134L5.00001 8.36822L7.48875 9.92134C7.67133 10.0352 7.9009 10.0248 8.0734 9.89435C8.24629 9.76394 8.32716 9.53911 8.28009 9.32168L7.63669 6.36463L9.8188 4.36798C9.9788 4.22149 10.0397 3.99021 9.97384 3.77843Z" fill="#FFCE4F"/>
                </svg>
                <svg v-for="rating in (5 - review.rating)" :key="rating" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.97384 3.77843C9.90799 3.56714 9.7284 3.41754 9.51675 3.39756L6.63005 3.12408L5.48921 0.336929C5.40498 0.13216 5.21333 0 5.00001 0C4.78668 0 4.59496 0.13216 4.51126 0.336929L3.37042 3.12408L0.483259 3.39756C0.271617 3.41794 0.0923994 3.56753 0.0261753 3.77843C-0.0396674 3.98973 0.0211398 4.22149 0.181207 4.36798L2.36332 6.36463L1.71993 9.32168C1.67285 9.53911 1.75373 9.76394 1.92661 9.89435C2.01954 9.96481 2.12872 10 2.23828 10C2.33242 10 2.42665 9.97389 2.5108 9.92134L5.00001 8.36822L7.48875 9.92134C7.67133 10.0352 7.9009 10.0248 8.0734 9.89435C8.24629 9.76394 8.32716 9.53911 8.28009 9.32168L7.63669 6.36463L9.8188 4.36798C9.9788 4.22149 10.0397 3.99021 9.97384 3.77843Z" fill="#f8c5621c"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="reviews__unit-body">
            <p>{{ review.text }}</p>
          </div>
        </div>
      </q-item>
    </q-list>
    <q-list v-if="reviews.length === 0 && sortedEmpty === true">
      <q-item style="padding: 0;">
        <q-item-section class="reviews__info">
          <div class="reviews__client">
            <img :src="user.image" alt="avatar">
            <div class="reviews__client-description">
              <p class="reviews__client-name">{{ user.name }} {{ user.surname }}</p>
              <p class="reviews__client-count">{{ reviews.length }} отзывов за 1 месяц</p>
              <div class="reviews__client-rating">
                <svg v-for="rating in user.rating" :key="rating" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.97384 3.77843C9.90799 3.56714 9.7284 3.41754 9.51675 3.39756L6.63005 3.12408L5.48921 0.336929C5.40498 0.13216 5.21333 0 5.00001 0C4.78668 0 4.59496 0.13216 4.51126 0.336929L3.37042 3.12408L0.483259 3.39756C0.271617 3.41794 0.0923994 3.56753 0.0261753 3.77843C-0.0396674 3.98973 0.0211398 4.22149 0.181207 4.36798L2.36332 6.36463L1.71993 9.32168C1.67285 9.53911 1.75373 9.76394 1.92661 9.89435C2.01954 9.96481 2.12872 10 2.23828 10C2.33242 10 2.42665 9.97389 2.5108 9.92134L5.00001 8.36822L7.48875 9.92134C7.67133 10.0352 7.9009 10.0248 8.0734 9.89435C8.24629 9.76394 8.32716 9.53911 8.28009 9.32168L7.63669 6.36463L9.8188 4.36798C9.9788 4.22149 10.0397 3.99021 9.97384 3.77843Z" fill="#FFCE4F"/>
                </svg>
                <svg v-for="rating in (5 - user.rating)" :key="rating" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.97384 3.77843C9.90799 3.56714 9.7284 3.41754 9.51675 3.39756L6.63005 3.12408L5.48921 0.336929C5.40498 0.13216 5.21333 0 5.00001 0C4.78668 0 4.59496 0.13216 4.51126 0.336929L3.37042 3.12408L0.483259 3.39756C0.271617 3.41794 0.0923994 3.56753 0.0261753 3.77843C-0.0396674 3.98973 0.0211398 4.22149 0.181207 4.36798L2.36332 6.36463L1.71993 9.32168C1.67285 9.53911 1.75373 9.76394 1.92661 9.89435C2.01954 9.96481 2.12872 10 2.23828 10C2.33242 10 2.42665 9.97389 2.5108 9.92134L5.00001 8.36822L7.48875 9.92134C7.67133 10.0352 7.9009 10.0248 8.0734 9.89435C8.24629 9.76394 8.32716 9.53911 8.28009 9.32168L7.63669 6.36463L9.8188 4.36798C9.9788 4.22149 10.0397 3.99021 9.97384 3.77843Z" fill="#f8c5621c"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="reviews__sort">
            <q-select outlined v-model="selectedFilter" :options="ratingFilter" label="Фильтр рейтинга"></q-select>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn v-if="reviews.length >= reviewsLength && reviews.length > 0" no-caps outline label="Показать больше отзывов" @click="loadMore"></q-btn>
    <p class="reviews__empty" v-else-if="reviews.length === 0 && sortedEmpty === true">Ещё не было отзывов ...</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import store from 'src/store'

export default defineComponent({
  name: 'ReviewsPage',

  data(){
    return{
      user: {
        id: Number(localStorage.getItem('user_id')),
        image: '',
        name: '',
        surname: '',
        rating: 0
      },
      sortedEmpty: false,
      reviews: [],
      reviewsLength: 9,
      ratingFilter: [
        {
          value: 'all',
          label: 'Все отзывы'
        },
        {
          value: 'asc',
          label: 'По возростанию'
        },
        {
          value: 'desc',
          label: 'По убыванию'
        },
        {
          value: 'great',
          label: 'Отличные отзывы'
        },
        {
          value: 'good',
          label: 'Хорошие отзывы'
        },
        {
          value: 'normal',
          label: 'Нормальные отзывы'
        },
        {
          value: 'bad',
          label: 'Плохие отзывы'
        },
        {
          value: 'terrible',
          label: 'Ужасные отзывы'
        }
      ],
      selectedFilter: 'Все отзывы или от 1 до 5'
    }
  },

  computed: {

    reviewsLoaded() {
      return this.reviews.slice(0, this.reviewsLength);
    },

  },

  watch: {
    selectedFilter(newFilter){
      switch (newFilter.value){
        case 'all':
          this.reviews = []
          this.getReviewList()
          this.sortedEmpty = false
          return this.reviewsLoaded
        case 'asc':
          return this.sortReviews('asc')
        case 'desc':
          return this.sortReviews('desc')
        case 'great':
          return this.sortReviews(5)
        case 'good':
          return this.sortReviews(4)
        case 'normal':
          return this.sortReviews(3)
        case 'bad':
          return this.sortReviews(2)
        case 'terrible':
          return this.sortReviews(1)
      }
    }
  },

  methods:{

    setTestUser(){
      localStorage.setItem('user_id','1')
    },

    getUser(){
      store.state.reviews.user.forEach(user => {
        if(user.id === this.user.id){
          this.user.image = user.image;
          this.user.name = user.name;
          this.user.surname = user.surname;
        }
      })
    },

    getReviewList(){
      let userRating = 0

      store.state.reviews.reviews.forEach(review => {
        if(review && review.user_id === this.user.id){
          this.reviews.push(review)
          userRating += review.rating
        }
      })
      this.user.rating = Math.floor(userRating / this.reviews.length)
    },

    loadMore() {
      if (this.reviewsLength > this.reviews.length) return;
      this.reviewsLength += 10;
    },

    sortReviews(type){
      if(type === 'asc'){
        this.reviews = []
        this.getReviewList()
        this.reviews.sort((a,b) => a.rating < b.rating ? -1 : 1)
        this.reviews.length === 0 ? this.sortedEmpty = true : this.sortedEmpty = false
        return this.reviewsLoaded
      }else if(type === 'desc'){
        this.reviews = []
        this.getReviewList()
        this.reviews.sort((a,b) => b.rating < a.rating ? -1 : 1)
        this.reviews.length === 0 ? this.sortedEmpty = true : this.sortedEmpty = false
        return this.reviewsLoaded
      }else{
        this.reviews = []
        this.getReviewList()
        this.reviews = this.reviews.filter(review => review.rating === type)
        this.reviews.length === 0 ? this.sortedEmpty = true : this.sortedEmpty = false
        return this.reviewsLoaded
      }

    }

  },

  async mounted() {
    await store.dispatch("fetchUsers");
    await store.dispatch("fetchReviews");
    this.setTestUser()
    this.getUser()
    this.getReviewList()
  },

})
</script>
