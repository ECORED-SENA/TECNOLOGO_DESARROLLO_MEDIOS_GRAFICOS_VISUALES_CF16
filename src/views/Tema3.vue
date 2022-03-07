<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Áreas de control de impresión y estándares
    .row.mb-4(data-aos="zoom-in-up")
      .col-lg-4
        p Un profesional de la impresión calificado es alguien que cuenta con la experticia, conocimientos y habilidades para realizar operaciones y técnicas avanzadas de trabajos de impresión. #[span.txt-deco1 Es muy importante que, al momento de entregar un arte final, quede en las mejores manos].
      .col-lg-8
        .row
          .col-lg-4.bg-color12
          .col-lg-8.bg-color6
            .p-4
              p.mb-0 Existen unos estándares de las áreas de impresión que intentan cubrir tanto las habilidades tradicionales de impresión como las propiedades de los ordenadores modernos que se utilizan en toda la industria gráfica y se seguirán utilizando en el futuro previsible.
    p.mb-5 A continuación, ahonde en las generalidades y aspectos clave de las principales áreas de trabajo de impresión y de los estándares de impresión:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/AWJoSe3euUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_3_1
    .titulo-segundo.color-secundario
      h2 3.1 Densidad tonal
    .row
      .col-lg-8
        p La densidad de la tinta es la cantidad de tinta utilizada para la impresión de un diseño, es decir, si se quisiera un área amarilla en un diseño determinado, se recomienda usar 100% amarillo. En este caso, la densidad de la tinta será del 100%. El amarillo es un buen ejemplo, puesto que corresponde a uno de los cuatro colores CMYK.
        p.txt-deco1 Entérese, ahora, de algunos aspectos que, sobre densidad tonal, hay que tener en cuenta en los procesos de impresión de diseño:
      .col-lg-4
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema3/img2.png', style="width: 450px").m-auto
    .row.bg-color4
      .col-12.px-5
        SlyderE(indicadores="izquierda").my-4
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Densidad
              p Elemento principal de control utilizado en la imprenta. Refiere a medición de luz que refleja en el papel impreso. El densitómetro calcula la absorción óptica de una tinta ubicada en la barra de color, lo que le permite al operador saber cómo ajustar el nivel de tinta. Los valores exactos de densidad son comprobados en cada zona de tinta empleando una barra de color y demás áreas de tinta de color sólido y color único.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema3/img3.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Ganancia de punto
              p Diferencia de puntos entre el punto de la trama en la plancha y el punto que la impresora reproduce durante el proceso de impresión. Los detalles están en tres rangos: medio, sombras y claros o altas luces. Los mismos pueden manejarse con parches de porcentajes de 25-50-75 o 40-80 puntos. Equilibrar los valores de cada color es fundamental para lograr el tono y el equilibrio de grises correctos, debido al exceso de tinta.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema3/img4.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Atrape (Trap)
              p Indicación de capacidad o incapacidad de la tinta para aceptar la tinta siguiente, en relación con cómo el papel aceptará esa tinta. Varios factores que afectan el trap: grosor de tinta, viscosidad de tinta, secuencia de impresión de la tinta y los ajustes mecánicos de la prensa. Dado que la fórmula de la trampa aparente utiliza valores de densidad medidos por filtros de tinta adicionales, el orden de las tintas de impresión es esencial.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema3/img5.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Balance de grises
              p Proporción de combinaciones porcentuales de las tintas Cyan, Magenta y Amarillo, al momento de seleccionar un color para conseguir un gris neutro. Realizado el balance de grises, todos los colores obtenidos en las sobreimpresiones se obtendrán mediante la interacción de los parámetros especificados en la escala de grises. Se debe medir el balance de grises porque la percepción del color en cada individuo es diferente.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema3/img6.png')
    separador.mb-5
    #t_3_2
    .titulo-segundo.color-secundario
      h2 3.2 Aplicación y tira de control
    p.mb-5 La tira de control es un conjunto de imágenes de prueba longitudinales aplicadas para medir y controlar parámetros de impresión como la densidad. Debe usarse en todos las pruebas y formas   durante un proceso de impresión.
    figure.mb-5
      img(src='@/assets/curso/tema3/img7.png', style="width: 650px").m-auto
    p.mb-5 Tenga en cuenta:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Medición")
        h4 Medición
        p Se debe medir con ellas al configurar la máquina y tomar la primera página, a intervalos regulares, mientras se ejecuta la impresión, para verificar las áreas de volumen para cada color, percentiles 25 y 50, el contraste de impresión y la superposición de colores a granel, y después de los ajustes de tinta o después de parar, para comprobar la relación punto y contraste 25-50%.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tira de control")
        h4 Tira de control
        p La tira de control está impresa en un extremo del papel y está destinada a proporcionar al impresor instrucciones sobre la calidad de impresión; se ubica de modo perpendicular a la orientación del papel en la máquina.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ajustes de campos de tono")
        h4 Ajustes de campos de tono
        p Las tiras de control ajustan campos de tono lleno y varios campos de trama en las tintas de impresión; cuentan con elementos guía (señales) para el control visual. Algunos impresores modifican y crean tipos especiales de tiras de control para trabajos específicos, pero comúnmente se utilizan algunas convenciones estándar.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Reproducción del color")
        h4 Reproducción del color
        p Las tiras ocupan una pequeña parte del papel de impresión, pero siempre es necesario incluir un mínimo que permita controlar la reproducción del color; este rango mínimo debe incluir, al menos, parches de tono uniforme y un 75% de puntos para cada tinta impresa. El ancho de las tiras de control puede variar de 3 a 12 mm.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Oportunidad de la tira en la impresión")
        h4 Oportunidad de la tira en la impresión
        p Para determinar qué tira de control es la apropiada para una impresión de un diseño, es importante tener en cuenta estos cuatro parámetros: ancho máximo de pliego, número de llaves para entintado, ancho de las llaves para entintado y tamaño de parche que puede medir el instrumento.
    .row.mb-5
      .col-lg-8
        .row.mb-4
          .col-12.col-lg-6.bg-color3
            .p-4
              h3.mb-0.mt-3 Tipos de parche
        p Los parches son un elemento que se usa para hacer verificación de las particularidades y características que tienen las tintas de selección. Buscan determinar si estas características son las adecuadas cuando interactúan entre sí.
        p Estos son los tipos de parches utilizados en una tira de control, al momento de realizar un impreso:
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Parches de sólido")
            .col-12
              p Se utilizan para conseguir la medida de la consistencia y el color de las tintas para impresión. Al momento de imprimir, es importante ubicar uno por cada color.
          .row(titulo="Parches con trama")
            .col-12
              p Porcentaje de puntos representativos que, generalmente, se eligen como 25 %, 40 %, 50 % 75 % y 80 %, los cuales se encargan de vigilar el proceso de impresión y la ganancia de punto que se obtiene en el proceso.
          .row(titulo="Parches de atrape")
            .col-12
              p Usados para trabajos de selección CMYK. Se componen de un 100% de dos de los tres colores de selección; este tipo de parche se utiliza para comprobar la consistencia de las propiedades mecánicas de las tintas seleccionadas cuando interactúan entre sí.
          .row(titulo="Parches de balance de grises")
            .col-12
              p Se encargan de ser neutros al momento de imprimir. Sólo se utilizan en tiras de frecuencia para trabajos de selección y se utilizan, principalmente, para certificados de clase G7.
          .row(titulo="Parches de deslizamiento y doblado")
            .col-12
              p Usados para establecer la ganancia de punto agregado que se genera a partir de una falla en el envío y la recepción de pliegos entre los módulos de impresión.
          .row(titulo="Densitometría")
            .col-12
              p Con la densitometría, se podrá controlar la calidad de impresión, identificando cualquier problema que pueda surgir durante el proceso de impresión. Las mediciones se hacen en pequeñas muestras.
          .row(titulo="Factores que afectan color de impresión")
            .col-12
              p Las mediciones brindan un diagnóstico de los factores que afectan el color de la impresión, los cuales pueden ser: contraste en la impresión, #[i trapping], error de los tonos, equilibrio de grises, ganancia de punto, comportamiento de las tintas, doble impresión o grisado.
      .col-lg-4
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema3/img8.png', style="width: 450px").m-auto
    .row.align-items-center.mb-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img9.png', style="width: 450px").m-auto
      .col-lg-8
        .row.mb-4
          .col-12.col-lg-6.bg-color3
            .p-4
              h3.mb-0.mt-3 Dispositivo de control
        p La tira de control de medios CMYK V2.0 de Ugra/FOGRA es adecuada para controlar pruebas de impresiones digitales. También se puede utilizar como un sistema de control digital para monitorear los efectos del procesamiento de imágenes CMYK y otros tipos de impresión.
        p Para aceptar pruebas de color vinculantes, se deben seguir las recomendaciones de la agencia del organismo Medien Standard Druck. Una prueba vinculante se considerará como tal cuando, por ejemplo, contenga una tira de control de medios CMYK de Ugra/FOGRA y los valores CIELAB obtenidos no excedan los límites de tolerancia. Los valores tonales CMYK de la tira de control versión 2.0 de Ugra/FOGRA se basan en los valores de la norma internacional #[span.txt-deco1 ISO 12642].
    p.mb-5 A continuación, se muestran las tiras de control y la aplicación correspondiente en cada impresión:
    .row
      .col-lg-8
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Tira de control color negro")
            .col-12
              p se utiliza únicamente para impresos de un solo color.
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width: 450px")
          .row(numero="2" titulo="Tira de control color sólido")
            .col-12
              p Se utiliza únicamente para impresos de un solo color.
              figure
                img(src='@/assets/curso/tema3/img2.svg', style="width: 450px")
          .row(numero="3" titulo="Tira de control de escala de tramas")
            .col-12
              p Se utiliza únicamente para impresos de color sólido.
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width: 450px")
      .col-lg-4
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema3/img10.png', style="width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
