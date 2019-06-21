<template>
  <form class="row col-12 border rounded mt-2" style="padding: 20px">
      <div class="row col-12">
          <i class="fas fa-check-circle mr-2" style="font-size: 45px"></i>
        <label for="name" class="lab">장소명</label>
        <input v-model="place.name" v-on:input="$emit('input', place)" type="text" placeholder="여행장소명" class="name col-6"/>
        <button type="button" class="btn btn-success ml-2" @click="savePlace">장소 저장</button>
      </div>
      <component v-for="(input_memory, idx) in input_memories" :is="input_memory" v-bind:key="input_memory.id" v-model="place.memories[idx]" :seq="idx"></component>
      <div class="row">
        <button type="button" class="btn btn-info mt-2" v-on:click="addMemory">이 장소에서의 추억 추가</button>
      </div>
  </form>
</template>

<script>
import InputMemory from './InputMemory.vue'

export default {
    props: ['seq', 'tdateId'],
    name: 'InputPlace',
    components: {
        'input_memory': InputMemory
    },
    data () {
        return {
            place: {
                'tdateId': this.tdateId,
                'seq': this.seq,
                'name': ''
            },
            input_memories: []
        }
    },
    created () {
        this.createPlace()
    },
    methods: {
        addMemory: function (event) {
            this.input_memories.push('input_memory')
        },
        createPlace: function (evnet) {
            this.$axios.post('/api/places', this.place)
            .then((response) => {
                this.place = response.data
            })
            .catch(function () {
                alert('장소를 추가할 수 없습니다.')
            })
        },
        savePlace: function (event) {
            this.$axios.put('/api/places', this.place)
                .then((response) => {
                    this.place = response.data
                    alert(this.place.name)
                })
                .catch(function () {
                    alert('장소를 저장할 수 없습니다.')
                })
        }
    }
}
</script>

<style>
.name {
    text-align: start;
    font-weight: bold;
    font-size: 18px;
}
</style>
