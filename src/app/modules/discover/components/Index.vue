<template>
  <div>
    <div class="text-xs-center">
      <v-pagination
        :total-visible="7"
        :length.number="normalizedTotalPages"
        v-model="currentPage">
      </v-pagination>
    </div>
    <div class="grid">
      <div
        class="grid__item card"
        v-for="post in posts">
        <div class="card__body">
          <img
            class="card__img"
            v-img="{
              src: post.urls.regular,
              group: 'main'
            }"
            :alt="post.description"
            :src="post.urls.small" />
          <div class="card__img-placeholder"></div>
        </div>
        <div class="card__footer media">
          <img
            class="media__img"
            :src="post.user.profile_image.small">
          <div class="media__body">
            <a
              class="media__link"
              :href="post.user.portfolio_url"
              target="_blank">
              {{ post.user.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'

  const client_id = '63d38d54954444a6464ea0f78afe58384eabbdb7359aaf1977d46da2ca200ff4'

  export default {
    data: () => ({
      perPage: 16,
      currentPage: 1,
      totalPosts: null
    }),

    computed: {
      ...mapState({
        lightboxOptions: state => state.settings.lightbox
      }),

      normalizedTotalPages () {
        const normalized = this.currentPage + 4

        return (this.totalPages >= normalized)
          ? normalized
          : this.totalPages
      },
      posts: {
        get () {return this.$store.state.discover.posts},
        set (v) {this.$store.commit('discover/posts', v)}
      },
      totalPages () {
        return Math.ceil(this.totalPosts / this.perPage)
      }
    },

    created () {
      if (this.posts.length === 0) this.request(this.currentPage)
      console.log(this.posts[0].description)
      console.log(this.posts[0].urls.regular)
    },

    methods: {
      request (page) {
        /**
         * TODO:
         * 1. request for a page only once
         * 2. save to cache
         * 3. check for cache
         */
        if (page < 0 || page > this.totalPages) {
          page = this.currentPage
        }
        if (page === this.page) {
          return
        }
  
        const options = {
          params: {
            client_id,
            page,
            per_page: this.perPage
          }
        }
        axios.get(`https://api.unsplash.com/photos`, options)
          .then(response => {
            this.posts = response.data
            
            this.totalPosts = parseInt(response.headers['x-total'])
            this.currentPage = page
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
  .grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .grid__item {
    flex: 1 1 25%;
    margin: 0 20px 40px;
  }
  .card {
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
    overflow: hidden;
  }
  .card__body {
    height: 215px;
    overflow: hidden;
  }
  .card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card__img-placeholder {
    width: 100%;
    height: 100%;
    background-color: #eee;
    /* here */
  }
  .card__footer {
    padding: 10px 15px;
  }
  .media__img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 15px;
    float: left;
    background-color: #d8d8d8;
  }
  .media__body {
    height: 32px;
    line-height: 32px;
  }
  .media__link {
    font-family: Courier New, Courier, monospace, serif;
    font-size: 15px;
    color: #999;
  }
  .media__link:hover {
    text-decoration: none;
  }

  .pagination {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
</style>
