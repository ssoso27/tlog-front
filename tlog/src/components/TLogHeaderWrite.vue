<template>
  <div class="container">
    <form style="width:100%" @submit.prevent="submit">
      <div class="header"
          v-bind:style="{ 'background': 'url(' + image_url + ')' }" >
          <div class="row justify-content-center">
            <label for="title" class="lab">제목</label>
            <input v-model="title" type="text" placeholder="여행기록명" class="title col-6"/>
          </div>
          <div class="row justify-content-end mt-4 pr-4">
            <datepicker v-model="start_date" :format="format" placeholder="select date"></datepicker>
            <span class="text">~</span>
            <datepicker v-model="end_date" :format="format" placeholder="select date"></datepicker>
          </div>
          <div class="row mt-4 pl-4">
            <label for="hashtag" class="lab">해시태그</label>
            <component v-for="(hashtag, idx) in hashtag_elements" :is="hashtag" v-bind:key="hashtag.id" v-model="hashtags[idx]"></component>
            <a class="btn btn-light" v-on:click="addHashtag">+</a>
          </div>
          <div class="row justify-content-end pr-4">
            <label for="image" class="lab">헤더이미지</label>
            <input type="file" name="header img" ref="header_img" class="col-1" style="font-size:14px" @change="changeImage">
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
import moment from 'moment'

var ElementHashtag = {
    props: ['model'],
    template: `<input ref="input" v-on:input="updateValue($event.target.value)" type="text" value="#" placeholder="#hashtag" class="hashtag col-1"/>`,
    methods: {
        updateValue: function (value) {
            if (value.trim().slice(0, 1) !== '#') {
                value = '#' + value
                this.$refs.input.value = value
            }
            this.$emit('input', value)
        }
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
            title: '',
            image_url: 'http://www.5viral.com/wp-content/uploads/2016/02/round-window-in-airplane.jpg',
            image: '',
            hashtag_elements: [],
            hashtags: [],
            count_hashtag: 0,
            format: 'yyyy-MM-dd',
            start_date: new Date(),
            end_date: new Date()
        }
    },
    methods: {
        addHashtag: function (event) {
            this.count_hashtag = this.count_hashtag + 1
            this.hashtag_elements.push('element_hashtag')
        },
        submit: function () {
            var config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
            var frm = new FormData()

            frm.append('title', this.title)
            frm.append('accountId', 1)
            frm.append('hashtags', this.hashtags)
            frm.append('startDate', this.formattingDate(this.start_date))
            frm.append('lastDate', this.formattingDate(this.end_date))
            if (this.image !== '') frm.append('backgroundImg', this.image)

            this.$axios.post('/api/tlog', frm, config)
                .then((tlogRes) => {
                    // 응답 처리
                    this.$axios.post('/api/tdate',
                        {'date': this.formattingDate(this.start_date), 'tlogId': tlogRes.data}
                    )
                    .then((tdateRes) => {
                        this.$router.push('/tlog/write/' + tlogRes.data + '/tdate/' + tdateRes.data)
                    })
                    .catch(function () {
                        alert('여행기 작성에 실패했습니다. 다시 시도해주세요.')
                    })
                })
                .catch(function () {
                    // 예외 처리
                    alert('여행기 작성에 실패했습니다. 다시 시도해주세요.')
                })
        },
        formattingDate (date) {
            return moment(date).format('YYYY-MM-DD')
        },
        changeImage (event) {
            var input = event.target

            if (input.files && input.files[0]) {
                var reader = new FileReader()
                reader.onload = e => {
                    this.image = this.$refs.header_img.files[0]
                    this.image_url = e.target.result
                }
                reader.readAsDataURL(input.files[0])
            }
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
