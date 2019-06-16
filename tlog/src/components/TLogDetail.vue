<template>
<div class="container">
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
