<template>
  <div class="row col-12 border rounded mt-2" style="padding: 20px">
      <div class="row col-12">
          <i class="fas fa-check-circle mr-2" style="font-size: 45px"></i>
          <!-- <p>
              <span class="h3">제주국제공항</span>
              <span>12:00~</span>
          </p> -->
        <label for="name" class="lab">장소명</label>
        <input v-model="place.name" v-on:input="$emit('input', place)" type="text" placeholder="여행장소명" class="name col-6"/>
      </div>
      <component v-for="(input_memory, idx) in input_memories" :is="input_memory" v-bind:key="input_memory.id" v-model="place.memories[idx]" :seq="idx"></component>
      <div class="row">
        <button type="button" class="btn btn-info mt-2" v-on:click="addMemory">이 장소에서의 추억 추가</button>
      </div>
  </div>
</template>

<script>
import InputMemory from './InputMemory.vue'

export default {
    props: ['seq'],
    name: 'InputPlace',
    components: {
        'input_memory': InputMemory
    },
    data () {
        return {
            place: {
                'seq': this.seq,
                'name': '',
                'memories': []
            },
            input_memories: []
        }
    },
    methods: {
        addMemory: function (event) {
            this.input_memories.push('input_memory')
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
