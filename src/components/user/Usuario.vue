<template>
<b-container fluid  >
  <h4>Meus Dados Cadastrais</h4>
  <b-row>
    <b-col cols="3">
        <mmUserMenu />
    </b-col>
    <b-col cols="9" md="" class="my-menu">
      <h1>Teste2</h1>
    </b-col>
  </b-row>

</b-container>
</template>

<script>
import mmUserMenu from './UserMenu.vue'

export default {
  name: 'meus-dados-cadastrais',
    components: {
    mmUserMenu
  }
}
</script>

<style>
</style>
