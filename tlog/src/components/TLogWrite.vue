<template>
<div class="container">
    <section>
        <div class="row">
            <form class="header-container"
                style="background: url(http://www.5viral.com/wp-content/uploads/2016/02/round-window-in-airplane.jpg);">
                <div class="row justify-content-center">
                  <input type="text" placeholder="여행기록명" class="header-title col-6"/>
                </div>
                <div class="row justify-content-end mt-4">
                  <p>
                    <input type="text" placeholder="0000.00.00" class="col-4">
                    ~
                    <input type="text" placeholder="0000.00.00" class="col-4">
                  </p>
                </div>
                <div class="row mt-4 pl-4">
                  <input type="text" placeholder="#hastag" class="header-hashtag col-1"/>
                  <a class="btn btn-light">+</a>
                </div>
                <div class="row justify-content-end pr-4">
                  <input type="file" class="form-control-file col-1" id="exampleFormControlFile1">
                </div>
            </form>
        </div>
    </section>
    <section>
        <div class="row mt-3">
            <p class="h2 text-center col-12">4월 3일</p>
        </div>
        <div class="row">
            <i class="fas fa-check-circle mr-2" style="font-size: 45px"></i>
            <p>
                <span class="h3">제주국제공항</span>
                <span>12:00~</span>
            </p>
        </div>
        <div class="row" style="padding: 5px">
            <div class="col-12 row">
                <img
                    src="https://s-ec.bstatic.com/images/hotel/max1024x768/989/98999751.jpg"
                    class="rounded border"
                    alt="..."
                    style="width:200px; height:200px">
            </div>
            <div class="col-12 row">
                <p class="font-weight-normal mt-2">
                    바다에 갈 기대중~
                </p>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'TLogWrite'
}
</script>

<style>
.header-container{
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    opacity: 0.8;
}

.header-title {
    margin-top: 7%;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
}

.header-container > span.header-hashtag {
    text-align: start;
}
/* 
.header-period {
    text-align: end;
} */

.header-container > p {
    color: white;
    margin-left: 10px;
    margin-right: 10px;
}

.text-background {
    background-color: rgba(6,6,6,0.3);
    text-shadow: 3px 3px 10px #000;
}

</style>
