<template>
  <div class="row col-12 border rounded" style="padding: 20px">
      <div class="row col-12">
          <i class="fas fa-check-circle mr-2" style="font-size: 45px"></i>
          <p>
              <span class="h3">제주국제공항</span>
              <span>12:00~</span>
          </p>
      </div>
      <component v-for="(input_memory, idx) in input_memories" :is="input_memory" v-bind:key="input_memory.id"></component>
      <div class="row">
        <button type="button" class="btn btn-info" v-on:click="addMemory">이 장소에서의 추억 추가</button>
      </div>
  </div>
</template>

<script>
import InputMemory from './InputMemory.vue'

export default {
    name: 'InputPlace',
    components: {
        'input_memory': InputMemory
    },
    data () {
        return {
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
