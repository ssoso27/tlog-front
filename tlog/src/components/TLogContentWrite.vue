<template>
<div class="container">
    <form style="width:100%" @submit="submit">
        <div class="row mt-3 justify-content-center">
            <p class="h2 text-center col-12">{{ date }}</p>
        </div>
        <component v-for="(input_place, idx) in input_places" :is="input_place" v-bind:key="input_place.id" v-model="places[idx]" :seq="idx"></component>
        <div class="row">
            <button type="button" class="btn btn-primary mt-2" v-on:click="addPlace">다른 장소 추가</button>
        </div>
        <div class="row">
            <button type="submit" class="btn btn-outline-dark mt-2">다음 날짜</button>
        </div>
    </form>
</div>
</template>

<script>
import InputPlace from './InputPlace.vue'

export default {
    name: 'ContentWrite',
    components: {
        'input_place': InputPlace
    },
    data () {
        return {
            date: this.$route.params.date,
            input_places: [],
            places: []
        }
    },
    created () {
        this.date = this.$route.params.date
        this.input_places = []
        this.places = []
    },
    methods: {
        addPlace: function (event) {
            this.input_places.push('input_place')
        },
        submit: function () {
            var today = new Date(this.date).format('yyyy-MM-dd')
            alert(today)
            this.$router.push('/tlog/write/1/date/2019-03-02')
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
