<template>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/newsfeed">
    <img src="./../assets/logo.png" width="30" height="30" class="d-inline-block align-top mr-2" alt="logo">
    TLog
  </a>
  <ul class="nav justify-content-end">
    <li class="nav-item">
        <a class="nav-link active" href="/newsfeed">뉴스피드</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/mypage" tabindex="-1" aria-disabled="true">마이페이지</a>
    </li>
</ul>
</nav>
</template>

<script>
export default {
    name: 'TopNav'
}

</script>
