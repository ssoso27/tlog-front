<template>
  <div id="app" v-if="currentRoute === '/login' || currentRoute === '/signup'">
    <router-view class="pt-5"/>
  </div>
  <div id="app" v-else>
    <top-nav class="bg-warning"></top-nav>
    <router-view class="pt-5 mx-auto" style="width:70%"/>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
    name: 'App',
    components: {
        TopNav
    },
    data () {
        return {
            currentRoute: window.location.pathname
        }
    }
}
</script>
