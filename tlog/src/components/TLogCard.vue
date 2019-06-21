<template>
<a :href="'/tlog/' + tlog.id" class="card list-group-item-action">
  <div class="card-body">
      <h5 class="card-title">{{ tlog.title }}</h5>
      <p class="card-text">
        <small class="text-muted" v-for="hashtag in tlog.hashtags" :key="hashtag.id"> {{ hashtag }}</small>
      </p>
      
      <div class="clearfix mb-2">
          <img
              src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt=""
              class="rounded-circle border float-left mr-2"
              style="width:50px; height:50px">
          <p class="card-text mb-0">{{ tlog.account.nickname }}</p>
          <p class="card-text" style="font-size: 12px"><span class="text-muted">{{ createdAt }}</span></p>
      </div>
      <img
          :src="image"
          class="rounded border mr-3"
          alt="..."
          style="width:100%; height:300px">
  </div>
</a>
</template>

<script>
import moment from 'moment'

export default {
  props: ['tlog'],
  name: 'TLogCard',
  data () {
    return {
      tlog: this.tlog,
      image: '',
      createdAt: ''
    }
  },
  created () {
    this.image = '//127.0.0.1:8080/' + this.tlog.backgroundImg
    this.createdAt = this.formattingDate(this.tlog.dataCreated)
  },
  methods : {
    formattingDate (date) {
        return moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style>

</style>
