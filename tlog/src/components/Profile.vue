<template>
<div class="container">
  <div class="row">
      <div class="profile-header-container">
        <img class="rounded-circle" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
        <p class="h4">김여행 <small class="text-muted">@HelloMan</small></p>
        <p>여행 다니기를 좋아하는 김여행입니다.</p>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style>
/**
 * Profile image component
 */
.profile-header-container{
    width: 100%;
    margin: 0 auto;
    padding: 54px;
    text-align: center;
    background-repeat: no-repeat;
    background-color: #D6E7F7;
}

.profile-header-container > img.rounded-circle {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
    border: 1px solid #495057;
}

.profile-header {
    margin-top: 43px;
}

/**
 * Ranking component
 */
.rank-label-container {
    margin-top: -19px;
    /* z-index: 1000; */
    text-align: center;
}

.label.label-default.rank-label {
    background-color: rgb(58,174,232);
    padding: 5px 10px 5px 10px;
    border-radius: 27px;
}
</style>
