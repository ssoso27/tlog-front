<template>
  <div class="container">
    <form action="" style="width:100%">
      <div class="header"
          style="background: url(http://www.5viral.com/wp-content/uploads/2016/02/round-window-in-airplane.jpg);">
          <div class="row justify-content-center">
            <label for="tite" class="lab">제목</label>
            <input type="text" placeholder="여행기록명" class="title col-6"/>
          </div>
          <div class="row justify-content-end mt-4">
            <p>
              <label for="startDate" class="lab">시작날짜</label>
              <input type="text" placeholder="0000.00.00" class="col-4">
              <span class="text-white">~</span>
              <label for="endDate" class="lab">끝난날짜</label>
              <input type="text" placeholder="0000.00.00" class="col-4">
            </p>
          </div>
          <div class="row mt-4 pl-4">
            <label for="hastag1" class="lab">해시태그1</label>
            <input type="text" placeholder="#hastag" class="hashtag col-1"/>
            <a class="btn btn-light">+</a>
          </div>
          <div class="row justify-content-end pr-4">
            <label for="image" class="lab">헤더이미지</label>
            <input type="file" name="header img" id="" class="col-1" style="font-size:14px">
          </div>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-outline-primary col-12 mt-2">여행기 기록하기</button>
      </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'HeaderWrite'
}
</script>

<style>

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
    font-size: 14px;
    padding: 0;
}
/*
.header-period {
    text-align: end;
} */

.header > p {
    color: white;
    margin-left: 10px;
    margin-right: 10px;
}

.text-background {
    background-color: rgba(6,6,6,0.3);
    text-shadow: 3px 3px 10px #000;
}
</style>
