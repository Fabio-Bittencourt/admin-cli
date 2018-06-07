<template>
    <b-row>
      <b-col class="my-menu" cols="auto" >
        <div class="user-info-main">
          <div class="user-photo"></div>
          <div class="user-info">
            <p class="name-user">{{this.$store.state.user.name}}</p>
            <p>{{this.$store.state.user.email}}</p>
            <p>{{this.$store.state.user.companyName}}</p>
          </div>
        </div>
        <hr>
        <div class="user-info-main">
          <b-nav vertical class="user-info-nav">
            <b-button variant="link" to="/minha-conta-listo">
              <img src="../../assets/icons/noun_conf.svg" class="icon">
              <span>Minha conta listo</span>
            </b-button>
            <b-button variant="link">
              <img src="../../assets/icons/bank.svg" class="icon">
              <span>Domicilio bancário</span>
            </b-button>
            <b-button variant="link">
              <img src="../../assets/icons/update.svg" class="icon">
              <span>Editar cadastro</span>
            </b-button>
            <b-button variant="link">
              <img src="../../assets/icons/key.svg" class="icon">
              <span>Alterar senha</span>
            </b-button>
            <b-button variant="link">
              <img src="../../assets/icons/photo.svg" class="icon">
              <span>Editar foto</span>
            </b-button>
          </b-nav>
        </div>
        <hr>
        <div class="user-info-main">
          <div class="user-rodape">
            <img src="../../assets/icons/headset.svg" class="icon">
            <span>Dúvidas? Fale conosco</span>
            <p>0800.942.1835</p>
            <p>11 3078.0876</p>
            <p>11 3078.0914</p>
          </div>
        </div>
      </b-col>
    </b-row>
</template>

<script>
import userForm from './userForm.vue'

export default {
  data(){
    return {

    }
  },
  components: {
    userForm
  },
 }
</script>

<style>

.my-menu{
  background-color: #ffffff;
  margin: 10px 15px;
  box-shadow: 1px 1px 5px 2px #E8E8E8;
  padding: 20px;
}
.user-info-main {
  margin: 25px;
  padding: 5px 20px;
}

.user-photo {
  width: 200px;
  height: 200px;
  opacity: 0.22;
  background-color: #0385db;
  border-radius: 100px;
  margin: 20px auto;
}
.name-user{
  font-size: 36px;
}

.user-info {
  text-align: center;
}

.user-info-nav {
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: start;
}

.user-rodape p, .user-rodape span {
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  text-align:center;

}

.icon{
  padding-right: 10px;
}

</style>
