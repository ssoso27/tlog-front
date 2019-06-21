<template>
<div class="container">
    <div>
        <tlog-card v-for="tlog in tlogs" v-bind:key="tlog.id" :tlog="tlog"></tlog-card>
    </div>
</div>
</template>

<script>
// eslint-disable-next-line
import TLogCard from './TLogCard.vue'

export default {
    name: 'NewsFeed',
    components: {
        'tlog-card': TLogCard
    },
    data () {
        return {
            tlogs: []
        }
    },
    created () {
        this.refresh()
    },
    methods : {
        refresh: function () {
            this.$axios.get('/api/tlog')
            .then((response) => {
                // this.$router.push('/tlog/write/' + tlogRes.data + '/tdate/' + tdateRes.data)
                this.tlogs = response.data
                console.log(this.tlogs)
            })
            .catch(function () {
                alert('타임라인 로드에 실패했습니다. 다시 시도해주세요.')
            })
        }
    }
}
</script>
