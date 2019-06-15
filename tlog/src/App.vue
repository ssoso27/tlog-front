<template>
  <div id="app">
    <top-nav class="bg-warning"></top-nav>
    <router-view class="pt-5" style="width:70%"/>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
    name: 'App',
    components: [
        TopNav
    ]
}
</script>
