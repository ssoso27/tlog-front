<template>
<div class="container">
    <section>
        <div class="row">
            <div class="header-container"
                style="background: url(http://www.5viral.com/wp-content/uploads/2016/02/round-window-in-airplane.jpg);">
                <p class="header-title">
                    <span class="text-background">
                        첫 여행기
                    </span>
                </p>
                <p class="header-period">
                    <span class="text-background">
                        2019.04.03 ~ 2019.04.06
                    </span>
                </p>
                <p>
                    <span class="header-hashtag text-background">#제주여행</span>
                    <span class="header-hashtag text-background">#친구들과</span>
                </p>
            </div>
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
    name: 'TLogDetail'
}
</script>

<style>
.header-container{
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    opacity: 0.8;
}

.header-container > p.header-title {
    margin-top: 7%;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}

.header-container > span.header-hashtag {
    text-align: start;
}

.header-container > p.header-period {
    text-align: end;
}

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
