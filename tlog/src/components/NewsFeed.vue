<template>
<div class="clearfix mx-auto" style="width: 70%">
    <time-line class="bg-danger float-left" style="width: 70%"></time-line>
    <news-feed-nav class="bg-primary float-left" style="width: 30%"></news-feed-nav>
</div>
</template>

<script>
import TimeLine from './TimeLine.vue'
import NewsFeedNav from './NewsFeedNav.vue'

export default {
    name: 'NewsFeed',
    components: {
        TimeLine,
        NewsFeedNav
    }
}
</script>
