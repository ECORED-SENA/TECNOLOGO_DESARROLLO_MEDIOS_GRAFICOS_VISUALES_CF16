<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Analice el siguiente mapa mental y elabore su propia síntesis sobre los contenidos estudiados en este componente formativo. Recuerde que puede hacer uso de su libreta personal de apuntes para registrar cualquier aspecto de importancia. #[span.txt-deco1 ¡Adelante!]
    figure
      img(src='@/assets/curso/sintesis.svg', style="width: 1200px")

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
