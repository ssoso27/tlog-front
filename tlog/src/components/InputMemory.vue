<template>
<div class="row col-12" style="padding: 5px">
  <div class="row col-12">
      <!-- <img
          src="https://s-ec.bstatic.com/images/hotel/max1024x768/989/98999751.jpg"
          class="rounded border"
          alt="..."
          style="width:200px; height:200px"> -->
    <div class="file-tab panel-body">
      <label class="btn btn-secondary btn-file">
          <span>Browse</span>
          <!-- The file is stored here. -->
          <input type="file" name="image-file">
      </label>
      <!-- <button type="button" class="btn btn-default">Remove</button> -->
    </div>
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

