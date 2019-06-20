<template>
<div class="row col-12" style="padding: 5px">
  <div class="row col-12">
      <img
          :src="image_url"
          class="rounded border"
          :class="{ 'd-none': image_url === '' }"
          alt="..."
          style="width:200px; height:200px">

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file"
              @change="changeImage"
              ref="memory_img"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01">
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div>

      <!-- <button type="button" class="btn btn-default">Remove</button> -->
  </div>
  <div class="row col-12">
    <label for="content" class="lab">추억 내용</label>
    <textarea v-model="memory.content" v-on:input="$emit('input', memory)" placeholder="이 장소에서의 추억을 기록해보세요." class="form-control" rows="3"></textarea>
  </div>
</div>
</template>

<script>
export default {
    props: ['seq'],
    name: 'InputMemory',
    data () {
        return {
            memory: {
                'seq': this.seq,
                'image': '',
                'content': ''
            },
            image_url: ''
        }
    },
    methods: {
        changeImage (event) {
            var input = event.target

            if (input.files && input.files[0]) {
                var reader = new FileReader()
                reader.onload = e => {
                    this.memory.image = this.$refs.memory_img.files[0]
                    this.image_url = e.target.result
                }
                reader.readAsDataURL(input.files[0])
            } else {
                this.image_url = ''
            }
        }
    }
}
</script>

<style>
.btn-file input[type="file"] {
    cursor: inherit;
    display: block;
    font-size: 100px;
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}
</style>
