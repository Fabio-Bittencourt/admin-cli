<template>
<div id="app">
    <b-navbar class="sidebarBG">
      <b-navbar-brand class="brand" href="#" >{{msg}}</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>

<!-- conteudo -->
    <b-container class="main" fluid>
      <b-row>
    <!-- side bar -->
        <b-row class="sidebar">
          <b-col cols="8" sm="6">
            <b-nav vertical class="">
              <b-nav-item >
                <b-button class="" to="/data/nova-transacao">
                  <img src="../assets/icons/first.svg" />
                    Nova Transação
                </b-button>
              </b-nav-item>
              <b-nav-item >
                <b-button class="" to="/data/fazer-simulacao">
                  <img src="../assets/icons/card.svg" />
                    Fazer simulação
                </b-button>
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
<!-- side bar -->
<!-- content -->
        <b-row class="">
          <b-col cols="4" sm="6" >
          <router-view></router-view>
          </b-col>
        </b-row>
  <!-- content -->
      </b-row>
    </b-container>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'LOGO X'
    }
  }

}
</script>

<style lang="scss">
$menu-font-color: #fff;

.main{
  background: #f5f5f5;
}
.brand{
  padding: 10px;
}

.sidebar{
   background-color: #343a40;
}

</style>
