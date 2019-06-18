<template>
<div class="container">
    <form style="width:100%" @submit.prevent="submit">
        <div class="row mt-3 justify-content-center">
            <label for="date" class="lab">날짜</label>
            <datepicker v-model="date" :format="format" placeholder="select date"></datepicker>
        </div>
        <component v-for="(input_place, idx) in input_places" :is="input_place" v-bind:key="input_place.id"></component>
        <button type="button" class="btn btn-primary" v-on:click="addPlace">다른 장소 추가</button>
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
        'input_place': InputPlace
    },
    data () {
        return {
            format: 'MM월 dd일',
            date: new Date(),
            input_places: []
        }
    },
    methods: {
        addPlace: function (event) {
            this.input_places.push('input_place')
        },
        submit: function () {
            alert('submit')
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
