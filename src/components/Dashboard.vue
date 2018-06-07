<template>
  <b-container fluid>
    <b-row>
      <b-col center>
         <h2> {{user}}</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    user() {
      const {name} = this.$store.state.user
      return `Seja Bem vindo! ${name}`
    }
  }
}
</script>

<style>

</style>
