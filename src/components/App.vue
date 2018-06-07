<template>
<b-container fluid class="">
  <b-row>
    <b-col cols="12">
      <b-row>
        <b-col class="sidebar" sm="2">
          <b-navbar-brand class="brand" to="/"> <h3>{{msg}}</h3></b-navbar-brand>
        </b-col>
        <b-col class="main">
          <b-navbar>
          <!-- Campo de busca -->
            <b-navbar-nav>
              <b-nav-form>
                <b-btn v-b-toggle.search variant="link">
                  <img src="../assets/icons/icon_search.svg">
                </b-btn>
                <b-collapse id="search" class="md-2">
                  <b-form-input size="md" class="mr-sm-2" placeholder="sua pesquisa" type="text"/>
                </b-collapse>
                <b-button size="lg" variant="link" class="my-2 my-sm-0" type="submit">Busca</b-button>
              </b-nav-form>
            </b-navbar-nav>
            <!-- Botão do perfil do usuário -->
            <b-navbar-nav right class="ml-auto">
              <b-dropdown id="perfil_options" text="Meu perfil" variant="link" class="m-md-2" >
                <b-dropdown-item>Opções</b-dropdown-item>
              </b-dropdown>
           </b-navbar-nav>
           <!-- ICONE DE USUÁRIO -->
           <b-navbar-nav right class="ml-3">
             <img src="../assets/icons/noun.svg">
           </b-navbar-nav>
          <!-- ICONE DE NOTIFICATIONS -->
           <b-navbar-nav class="ml-5">
             <img src="../assets/icons/notifications.svg">
           </b-navbar-nav>

          </b-navbar>
        </b-col>
      </b-row>

     <b-row>
        <b-col cols="12" md="2" class="main sidebar">
          <b-nav vertical>
            <b-button variant="outline-secondary" class="btn-menu" to="/nova-transacao">
                  <img src="../assets/icons/first.svg" class="svg"/>
                  <span>Nova Transação</span>
            </b-button>
            <b-button variant="outline-secondary" class="btn-menu" to="/fazer-simulacao">
                  <img src="../assets/icons/card.svg" class="svg"/>
                  <span>Fazer simulação</span>
            </b-button>
            <b-button variant="outline-secondary" class="btn-menu" to="/painel-do-cliente">
                  <img src="../assets/icons/painel.svg" class="svg"/>
                  <span>Painel do cliente</span>
            </b-button>
             <b-button variant="outline-secondary" class="btn-menu" to="/meus-dados-cadastrais">
                  <img src="../assets/icons/fingerprint.svg" class="svg" />
                  <span>Meus dados cadastrais</span>
              </b-button>
              <b-button variant="outline-secondary" class="btn-menu" to="/configuracoes">
                  <img src="../assets/icons/config.svg" class="svg"/>
                  <span>Configuração</span>
              </b-button>
            </b-nav>
        </b-col>
    <!-- CONTENT -->
        <b-col md="10" cols="12" class="content">
           <router-view></router-view>
        <footer>
          <p>® 2018 Logox Tecnologia S.A. Todos os direitos reservados. </p>
        </footer>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  data() {
    return {
    msg: 'LOGO X'
    }
  }
}
</script>

<style>

.brand {
  color: #fff;
}

.main {
  padding:0px;
}

.sidebar {
  background-color: #343a40;
}

.btn-menu {
  background-color: #1e2431;
  height: 53px;
  text-align: left;
  border: 0px;
  border-radius: 1px;
}


.btn-menu:hover, .btn-menu:not(:disabled):not(.disabled).active {
  background-color: #ffffff;
  color: #000;
  border-left: 6px solid #0385db;
}
/*
.btn-menu img:hover{
  filter: invert(.9);
}*/

.navbar{
   padding: 10px;
   height: 70px;
   box-shadow: 1px 1px 5px 2px #E8E8E8;

}

.content {
 background-color: #f5f5f5;
}

footer p{
  margin-top: 1px;
  text-align: right;
}



</style>
