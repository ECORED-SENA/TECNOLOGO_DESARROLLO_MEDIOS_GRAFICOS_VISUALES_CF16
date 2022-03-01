<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.shadow.rounded.bg-color1.mb-5
      .col-12.col-lg-3
        .p-4
          figure
            img(src='@/assets/curso/intro/img1.png', style="width: 300px").m-auto
      .col-12.col-lg-8
        .p-4
          p Con el paso del tiempo, el color y su medición han adquirido una gran importancia en el ámbito del desarrollo industrial. Existen muchos campos industriales donde su apreciación y control es de gran importancia para su aplicación: textiles, plásticos, pinturas, recubrimientos, impresión, industria alimentaria e industria automotriz, entre otros.
          p.mb-0 Sea bienvenido al estudio de este componente formativo #[span.txt-deco1 “Control de calidad del color”]. Para comenzar, explore el recurso que a continuación se presenta. #[span.txt-deco1 ¡Adelante y éxitos en esta experiencia!]
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center
      .col-auto
        figure
            img(src='@/assets/curso/intro/img2.svg', style="width: 100px").m-auto
      .col
        p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en control de #[span.txt-deco1 calidad de color], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de #[span.txt-deco1 desarrollo de medios gráficos visuales].

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
