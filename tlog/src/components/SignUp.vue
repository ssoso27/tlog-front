<template>
<div class="container">
  <div class="row main">
    <div class="panel-heading">
      <div class="panel-title text-center">
          <h1 class="title">회원가입</h1>
          <hr />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="main-login main-center col-5">
      <form class="form-horizontal" method="post" action="#">

        <!-- ID -->
        <div class="form-group">
          <label for="id" class="cols-sm-2 control-label">Your ID</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-user fa mr-2" aria-hidden="true"></i></span>
              <input type="text" class="form-control" name="id" id="id"  placeholder="Enter your ID"/>
            </div>
          </div>
        </div>

        <!-- Nickname -->
        <div class="form-group">
          <label for="nickname" class="cols-sm-2 control-label">Nickname</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-users fa mr-2" aria-hidden="true"></i></span>
              <input type="text" class="form-control" name="nickname" id="nickname"  placeholder="Enter your Nickname"/>
            </div>
          </div>
        </div>

        <!-- Password -->
                <div class="form-group">
          <label for="password" class="cols-sm-2 control-label">Password</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg mr-2" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
            </div>
          </div>
        </div>

        <!-- Confirm -->
        <div class="form-group">
          <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg mr-2" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
            </div>
          </div>
        </div>

        <div class="form-group ">
          <button type="button" class="btn btn-primary btn-lg btn-block login-button">Register</button>
        </div>
        <div class="login-register">
                <a href="/login">Login</a>
            </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style>

</style>
