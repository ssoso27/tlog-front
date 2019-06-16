<template>
<div class="mx-auto">
  <profile style="height: 40%"></profile>
  <my-logs></my-logs>
</div>
</template>

<script>
import Profile from './Profile.vue'
import MyLogs from './MyLogs.vue'

export default {
    name: 'MyPage',
    components: {
        Profile,
        MyLogs
    }
}
</script>
