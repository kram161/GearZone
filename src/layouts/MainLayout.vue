<template>
  <picture class="background-left">
    <source srcset="src/assets/background-top-mb.png" media="(max-width: 767px)" />
    <source srcset="src/assets/background-left-tb.png" media="(max-width: 1024px)" />
    <source srcset="src/assets/background-left-lg.png" media="(max-width: 1280px)" />
    <img src="src/assets/background-left-xl.png" alt="MDN" />
  </picture>
  <picture class="background-right">
    <source srcset="src/assets/background-middle-mb.png" media="(max-width: 767px)" />
    <source srcset="src/assets/background-right-tb.png" media="(max-width: 1024px)" />
    <source srcset="src/assets/background-right-lg.png" media="(max-width: 1280px)" />
    <img src="src/assets/background-right-xl.png" alt="MDN" />
  </picture>
  <picture class="background-bottom">
    <source srcset="src/assets/background-bottom-mb.png" media="(min-width: 767px)" />
    <img src="src/assets/background-bottom-mb.png" alt="MDN" />
  </picture>
  <q-layout class="wrapper" view="lHh Lpr lFf">
    <header class="header">
      <h3>Мой профиль</h3>
      <div class="header__rating">
        <p>Рейтинг:</p>
        <span>{{ user.rating }}</span>
        <svg v-for="rating in user.rating" :key="rating" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9529 6.80118C17.8344 6.42084 17.5111 6.15157 17.1302 6.1156L11.9341 5.62334L9.88058 0.606473C9.72896 0.237889 9.38399 0 9.00001 0C8.61603 0 8.27092 0.237889 8.12027 0.606473L6.06675 5.62334L0.869867 6.1156C0.48891 6.15229 0.166319 6.42156 0.0471155 6.80118C-0.0714013 7.18151 0.0380516 7.59868 0.326173 7.86236L4.25398 11.4563L3.09587 16.779C3.01113 17.1704 3.15671 17.5751 3.4679 17.8098C3.63517 17.9367 3.83169 18 4.0289 18C4.19836 18 4.36797 17.953 4.51944 17.8584L9.00001 15.0628L13.4798 17.8584C13.8084 18.0633 14.2216 18.0446 14.5321 17.8098C14.8433 17.5751 14.9889 17.1704 14.9042 16.779L13.746 11.4563L17.6738 7.86236C17.9618 7.59868 18.0714 7.18237 17.9529 6.80118Z" fill="#FFCE4F"/>
        </svg>
        <svg v-for="rating in (5 - user.rating)" :key="rating" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9529 6.80118C17.8344 6.42084 17.5111 6.15157 17.1302 6.1156L11.9341 5.62334L9.88058 0.606473C9.72896 0.237889 9.38399 0 9.00001 0C8.61603 0 8.27092 0.237889 8.12027 0.606473L6.06675 5.62334L0.869867 6.1156C0.48891 6.15229 0.166319 6.42156 0.0471155 6.80118C-0.0714013 7.18151 0.0380516 7.59868 0.326173 7.86236L4.25398 11.4563L3.09587 16.779C3.01113 17.1704 3.15671 17.5751 3.4679 17.8098C3.63517 17.9367 3.83169 18 4.0289 18C4.19836 18 4.36797 17.953 4.51944 17.8584L9.00001 15.0628L13.4798 17.8584C13.8084 18.0633 14.2216 18.0446 14.5321 17.8098C14.8433 17.5751 14.9889 17.1704 14.9042 16.779L13.746 11.4563L17.6738 7.86236C17.9618 7.59868 18.0714 7.18237 17.9529 6.80118Z" fill="#f8c5621c"/>
        </svg>
      </div>
      <div class="header__reviews">
        <span>Отзывов:</span>
        <p>{{ reviews.length }}</p>
      </div>
      <div class="header__deals">
        <p>Сделок: </p>
        <p>Продаж: <span>20</span></p>
        <p>Покупок: <span>30</span></p>
      </div>
    </header>
    <nav :class="[navbarIsActive === true ? 'active' : '']" class="navbar">
      <div class="navbar__user">
        <img :src="user.image" alt="avatar">
        <div class="navbar__user-description">
          <p>{{ user.name }}_{{ user.surname }}</p>
          <span>Онлайн</span>
        </div>
        <p class="navbar__user-slogan">Продажа голды в вов 24/7</p>
        <svg class="arrow" @click="toggleNavbar" width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.94531 7.68359L9 8.73828L4.5 13.2383L0 8.73828L1.05469 7.68359L4.5 11.1289L7.94531 7.68359Z" fill="#7D7781"/>
        </svg>
        <div class="navbar__user-registration">
          <span>Регистрация: {{ user.registration_info }}</span>
          <p>{{ user.registration_date }}</p>
        </div>
      </div>
      <ul>
        <li :class="[currentPage === 'deals' ? 'active' : '']" @click="menuLink('deals')">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5459 0H3.4541C1.5498 0.00585938 0.00585938 1.5498 0 3.4541V11.5459C0.00585938 13.4502 1.5498 14.9941 3.4541 15H11.5459C13.4502 14.9941 14.9941 13.4502 15 11.5459V3.4541C14.9941 1.5498 13.4502 0.00585938 11.5459 0ZM10.5791 8.14746H8.30273C8.22949 8.14746 8.1709 8.20605 8.1709 8.2793C8.1709 8.2793 8.1709 8.2793 8.1709 8.28223V10.5615C8.1709 10.9307 7.87207 11.2324 7.5 11.2324C7.12793 11.2324 6.8291 10.9336 6.8291 10.5615V8.28223C6.8291 8.20898 6.77051 8.15039 6.69727 8.15039C6.69727 8.15039 6.69727 8.15039 6.69434 8.15039H4.41797C4.04883 8.15039 3.74707 7.85156 3.74707 7.47949C3.74707 7.11035 4.0459 6.80859 4.41797 6.80859H6.69434C6.76758 6.80859 6.82617 6.75 6.82617 6.67676C6.82617 6.67676 6.82617 6.67676 6.82617 6.67383V4.39746C6.82617 4.02832 7.125 3.72656 7.49707 3.72656C7.86914 3.72656 8.16797 4.02539 8.16797 4.39746V6.67383C8.16504 6.74707 8.22363 6.80859 8.29688 6.80859C8.2998 6.80859 8.2998 6.80859 8.30273 6.80859H10.5791C10.9482 6.80859 11.25 7.10742 11.25 7.47949C11.25 7.85156 10.9512 8.15039 10.5791 8.15039V8.14746Z" fill="#7D7781"/>
          </svg>
          <p>Сделки</p>
        </li>
        <li :class="[currentPage === 'ads' ? 'active' : '']" @click="menuLink('ads')">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5459 0H3.4541C1.5498 0.00585938 0.00585938 1.5498 0 3.4541V11.5459C0.00585938 13.4502 1.5498 14.9941 3.4541 15H11.5459C13.4502 14.9941 14.9941 13.4502 15 11.5459V3.4541C14.9941 1.5498 13.4502 0.00585938 11.5459 0ZM10.5791 8.14746H8.30273C8.22949 8.14746 8.1709 8.20605 8.1709 8.2793C8.1709 8.2793 8.1709 8.2793 8.1709 8.28223V10.5615C8.1709 10.9307 7.87207 11.2324 7.5 11.2324C7.12793 11.2324 6.8291 10.9336 6.8291 10.5615V8.28223C6.8291 8.20898 6.77051 8.15039 6.69727 8.15039C6.69727 8.15039 6.69727 8.15039 6.69434 8.15039H4.41797C4.04883 8.15039 3.74707 7.85156 3.74707 7.47949C3.74707 7.11035 4.0459 6.80859 4.41797 6.80859H6.69434C6.76758 6.80859 6.82617 6.75 6.82617 6.67676C6.82617 6.67676 6.82617 6.67676 6.82617 6.67383V4.39746C6.82617 4.02832 7.125 3.72656 7.49707 3.72656C7.86914 3.72656 8.16797 4.02539 8.16797 4.39746V6.67383C8.16504 6.74707 8.22363 6.80859 8.29688 6.80859C8.2998 6.80859 8.2998 6.80859 8.30273 6.80859H10.5791C10.9482 6.80859 11.25 7.10742 11.25 7.47949C11.25 7.85156 10.9512 8.15039 10.5791 8.15039V8.14746Z" fill="#7D7781"/>
          </svg>
          <p>Объявления</p>
        </li>
        <li :class="[currentPage === 'reviews' ? 'active' : '']" @click="menuLink('reviews')">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8176 0H3.18236C1.42565 0.00298317 0.00298253 1.42595 0 3.18304V8.2753C0.00298253 9.78777 1.06476 11.0884 2.5441 11.3927V13.3646C2.5441 13.7166 2.82744 14 3.17938 14C3.30464 14 3.42693 13.9642 3.53132 13.8926L7.19088 11.4554H10.8176C12.5744 11.4524 13.997 10.0294 14 8.27232V3.18304C13.997 1.42595 12.5714 0.00298317 10.8176 0ZM9.5441 7.63691H4.45292C4.10098 7.63691 3.81764 7.35052 3.81764 7.00149C3.81764 6.65246 4.10396 6.36608 4.45292 6.36608H9.5441C9.89604 6.36608 10.1794 6.65246 10.1794 7.00149C10.1794 7.35052 9.89604 7.63691 9.5441 7.63691ZM10.8176 5.09227H3.18236C2.83042 5.09227 2.54708 4.80588 2.54708 4.45685C2.54708 4.10782 2.8334 3.82144 3.18236 3.82144H10.8176C11.1696 3.82144 11.4529 4.10782 11.4529 4.45685C11.4529 4.80588 11.1666 5.09227 10.8176 5.09227Z" fill="#FF9839"/>
          </svg>
          <p>Отзывы</p>
        </li>
        <li :class="[currentPage === 'edit-profile' ? 'active' : '']" @click="menuLink('edit-profile')">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.03955 7.22457C8.03271 7.22457 8.8911 6.86715 9.59422 6.16696C10.2973 5.46384 10.6518 4.60544 10.6518 3.61229C10.6518 2.61913 10.2944 1.76073 9.59422 1.05761C8.8911 0.35449 8.03271 0 7.03955 0C6.04639 0 5.188 0.35742 4.48487 1.05761C3.78175 1.7578 3.42433 2.61913 3.42433 3.61229C3.42433 4.60544 3.78175 5.46384 4.48195 6.16696C5.18507 6.87008 6.04639 7.22457 7.03955 7.22457Z" fill="#7D7781"/>
            <path d="M13.3593 11.5345C13.3388 11.2416 13.2978 10.9222 13.2392 10.5853C13.1777 10.2455 13.0986 9.92614 13.0048 9.63317C12.9081 9.33141 12.7763 9.02966 12.6122 8.74548C12.4423 8.44665 12.2431 8.18884 12.0204 7.97498C11.7861 7.75232 11.5019 7.57361 11.1708 7.44177C10.8427 7.31287 10.4765 7.24549 10.0869 7.24549C9.93452 7.24549 9.78511 7.30701 9.50093 7.49451C9.32515 7.60877 9.12007 7.7406 8.88863 7.89001C8.69234 8.01599 8.42574 8.13318 8.09762 8.23865C7.77828 8.34118 7.45016 8.39392 7.13083 8.39392C6.81149 8.39392 6.48337 8.34118 6.16403 8.23865C5.83591 8.13318 5.56931 8.01599 5.37302 7.89001C5.14451 7.74353 4.93943 7.6117 4.76072 7.49451C4.47361 7.30701 4.32713 7.24549 4.17479 7.24549C3.78514 7.24549 3.41893 7.31287 3.09081 7.44177C2.75976 7.57361 2.47558 7.75232 2.2412 7.97498C2.01855 8.18884 1.81933 8.44665 1.64941 8.74548C1.48535 9.03259 1.35351 9.33141 1.25683 9.63317C1.16308 9.92614 1.08398 10.2455 1.02246 10.5853C0.960937 10.9222 0.919922 11.2416 0.902344 11.5345C0.881836 11.8216 0.873047 12.1205 0.873047 12.4193C0.873047 13.2015 1.12207 13.8372 1.61132 14.3031C2.10058 14.766 2.74218 15.0003 3.52147 15.0003H10.7431C11.5224 15.0003 12.164 14.766 12.6503 14.306C13.1425 13.8402 13.3915 13.2044 13.3915 12.4222C13.3915 12.1175 13.3798 11.8216 13.3593 11.5345Z" fill="#7D7781"/>
          </svg>
          <p>Редактировать</p>
        </li>
        <li @click="menuLink('logout')">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74989 7.58242C8.42724 7.58242 8.16748 7.84492 8.16748 8.16484V10.5C8.16748 10.8227 7.90498 11.0824 7.58506 11.0824H5.83508V2.33242C5.83508 1.83477 5.5179 1.38906 5.03939 1.22227L4.86713 1.16484H7.58506C7.90772 1.16484 8.16748 1.42734 8.16748 1.74727V3.49727C8.16748 3.81992 8.42724 4.07969 8.74989 4.07969C9.07255 4.07969 9.33231 3.81719 9.33231 3.49727V1.75C9.33231 0.784766 8.54755 0 7.58233 0H1.31248C1.29061 0 1.27147 0.0109375 1.24959 0.0136719C1.22225 0.0109375 1.19491 0 1.16483 0C0.522259 0 0 0.522266 0 1.16758V11.6676C0 12.1652 0.317184 12.6109 0.795693 12.7777L4.30385 13.9453C4.42416 13.9809 4.54174 14 4.66479 14C5.30736 14 5.83235 13.4777 5.83235 12.8324V12.25H7.58233C8.54755 12.25 9.33231 11.4652 9.33231 10.5V8.16758C9.33231 7.84492 9.07255 7.58242 8.74989 7.58242Z" fill="#FA3939"/>
            <path d="M13.8277 5.42L11.4953 3.08758C11.3285 2.92078 11.077 2.87156 10.861 2.9618C10.6422 3.05203 10.5 3.26531 10.5 3.50047V5.25047H8.16765C7.845 5.25047 7.58523 5.51297 7.58523 5.83289C7.58523 6.15281 7.84773 6.41531 8.16765 6.41531H10.5V8.16531C10.5 8.40047 10.6422 8.61375 10.861 8.70398C11.0797 8.79422 11.3313 8.745 11.4953 8.5782L13.8277 6.24578C14.0574 6.01883 14.0574 5.64969 13.8277 5.42Z" fill="#FA3939"/>
          </svg>
          <p>Выйти</p>
        </li>
      </ul>
    </nav>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
import { defineComponent } from 'vue'
import store from "src/store";

export default defineComponent({
  name: 'MainLayout',

  data(){
    return {
      currentPage: '',
      user: {
        id: Number(localStorage.getItem('user_id')),
        image: '',
        name: '',
        surname: '',
        slogan: '',
        registration_date: '',
        registration_info: '',
        rating: 0
      },
      reviews: [],
      navbarIsActive: false
    }

  },

  methods: {

    menuLink(type){
      switch (type) {
        case 'deals':
          this.currentPage = 'deals'
          return this.$router.push('/deals')
        case 'ads':
          this.currentPage = 'ads'
          return this.$router.push('/ads')
        case 'reviews':
          this.currentPage = 'reviews'
          return this.$router.push('/reviews')
        case 'edit-profile':
          this.currentPage = 'edit-profile'
          return this.$router.push('/edit-profile')
        case 'logout':
          this.currentPage = ''
          return this.$router.push('/')
      }
    },

    getUser(){
      store.state.reviews.user.forEach(user => {
        if(user.id === this.user.id){
          this.user.image = user.image;
          this.user.name = user.name;
          this.user.surname = user.surname;
          this.user.slogan = user.slogan;
          this.user.registration_date = user.registration_date;
          this.user.registration_info = user.registration_info;
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

    toggleNavbar(){
      this.navbarIsActive === false ? this.navbarIsActive = true : this.navbarIsActive = false
    }

  },

  async mounted() {
    await store.dispatch("fetchUsers");
    await store.dispatch("fetchReviews");
    window.location.hash.includes('reviews') ? this.currentPage = 'reviews' : ''
    this.getUser()
    this.getReviewList()
  }


})
</script>
