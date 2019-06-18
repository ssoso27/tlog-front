<template>
  <div class="container">
    <form style="width:100%" @submit.prevent="submit">
      <div class="header"
          style="background: url(http://www.5viral.com/wp-content/uploads/2016/02/round-window-in-airplane.jpg);">
          <div class="row justify-content-center">
            <label for="tite" class="lab">제목</label>
            <input type="text" placeholder="여행기록명" class="title col-6"/>
          </div>
          <div class="row justify-content-end mt-4 pr-4">
            <datepicker v-model="start_date" :format="format" placeholder="select date"></datepicker>
            <span class="text">~</span>
            <datepicker v-model="end_date" :format="format" placeholder="select date"></datepicker>
          </div>
          <div class="row mt-4 pl-4">
            <label for="hashtag" class="lab">해시태그</label>
            <component v-for="hashtag in hashtags" :is="hashtag" v-bind:key="hashtag.id" v-bind:count="count_hashtag"></component>
            <a class="btn btn-light" v-on:click="addHashtag">+</a>
          </div>
          <div class="row justify-content-end pr-4">
            <label for="image" class="lab">헤더이미지</label>
            <input type="file" name="header img" id="" class="col-1" style="font-size:14px">
          </div>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-outline-primary col-12 mt-2">여행기 기록하기</button>
      </div>
    </form>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

var ElementHashtag = {
    props: ['count'],
    template: `<input :id="id" type="text" placeholder="#hashtag" class="hashtag col-1"/>`,
    data () {
        return {
            id: null
        }
    },
    mounted () {
        this.id = 'hashtag' + this.count
    }
}

export default {
    name: 'HeaderWrite',
    components: {
        'element_hashtag': ElementHashtag,
        Datepicker
    },
    data () {
        return {
            hashtags: [],
            count_hashtag: 0,
            format: "yyyy-MM-dd",
            start_date: new Date(),
            end_date: new Date()
        }
    },
    methods: {
        addHashtag: function (event) {
            this.count_hashtag = this.count_hashtag + 1
            this.hashtags.push('element_hashtag')
        },
        submit: function () {
            this.$router.push('/tlog/write/1')
        }
    }
}
</script>

<style>

.vdp-datepicker input{
    width: 100px;
    height: 30px;
    text-align: center;
    z-index: 100000 !important;
}

.cov-date-body{
  z-index: 100;
}

.lab{
  display: none;
}

.header{
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    opacity: 0.8;
}

.title {
    margin-top: 7%;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
}

.hashtag {
    text-align: start;
    font-size: 13px;
    padding: 0;
}
/*
.header-period {
    text-align: end;
} */

.text {
    color: white;
    margin-left: 10px;
    margin-right: 10px;
}

.text-background {
    background-color: rgba(6,6,6,0.3);
    text-shadow: 3px 3px 10px #000;
}
</style>
