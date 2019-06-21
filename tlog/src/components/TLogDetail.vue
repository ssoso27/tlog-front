<template>
<div class="container">
    <section>
        <div class="row">
            <div class="header-container"
                style="background-size: 1100px 300px;"
                :style="{ 'background-image': 'url(//127.0.0.1:8080/' + tlog.imageUrl + ')' }">
                <p class="header-title">
                    <span class="text-background">
                        {{ tlog.title }}
                    </span>
                </p>
                <p class="header-period">
                    <span class="text-background">
                        {{ tlog.startDate }} ~ {{ tlog.lastDate }}
                    </span>
                </p>
                <p>
                    <span v-for="hashtag in tlog.hashtags" :key="hashtag.id" class="header-hashtag text-background">{{ hashtag }} </span>
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
    name: 'TLogDetail',
    data () {
        return {
            tlogId: this.$route.params.id,
            tlog: '',
            tdate: ''
        }
    },
    created () {
        this.getTLog()
    },
    methods: {
        getTLog: function () {
            this.$axios.get('/api/tlog/' + this.tlogId)
            .then((response) => {
                this.tlog = response.data
                console.log(this.tlog)
            })
            .catch(function (err) {
                alert('해당 날짜의 기록을 가져올 수 없습니다.')
                console.log(err)
            })
        }
    }
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
