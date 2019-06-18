<template>
<div class="row col-12" style="padding: 5px">
  <div class="row col-12">
      <!-- <img
          src="https://s-ec.bstatic.com/images/hotel/max1024x768/989/98999751.jpg"
          class="rounded border"
          alt="..."
          style="width:200px; height:200px"> -->

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div>

      <!-- <button type="button" class="btn btn-default">Remove</button> -->
  </div>
  <div class="row col-12">
    <label for="content" class="lab">추억 내용</label>
    <textarea v-model="content" placeholder="이 장소에서의 추억을 기록해보세요." class="form-control" rows="3"></textarea>
  </div>
</div>
</template>

<script>
export default {
    name: 'InputMemory',
    data () {
        return {
            content: ''
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

