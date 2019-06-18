<template>
<div class="container">
    <form style="width:100%" @submit.prevent="submit">
        <div class="row mt-3 justify-content-center">
            <label for="date" class="lab">날짜</label>
            <datepicker v-model="date" :format="format" placeholder="select date"></datepicker>
        </div>
        <div class="row">
            <div class="row col-12">
                <i class="fas fa-check-circle mr-2" style="font-size: 45px"></i>
                <p>
                    <span class="h3">제주국제공항</span>
                    <span>12:00~</span>
                </p>
            </div>
            <div class="row col-12" style="padding: 5px">
                <div class="row col-12">
                    <img
                        src="https://s-ec.bstatic.com/images/hotel/max1024x768/989/98999751.jpg"
                        class="rounded border"
                        alt="..."
                        style="width:200px; height:200px">
                </div>
                <div class="row col-12">
                    <p class="font-weight-normal mt-2">
                        바다에 갈 기대중~
                    </p>
                </div>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import InputPlace from './InputPlace.vue'

export default {
    name: 'ContentWrite',
    components: {
        Datepicker,
        InputPlace
    },
    data () {
        return {
            format: 'MM월 dd일',
            date: new Date(),
            input_places: []
        }
    }
}
</script>

<style>
.lab{
  display: none;
}

.vdp-datepicker input{
    width: 150px;
    height: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
}
</style>
