<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Medición del color
    .row.align-items-center.mb-5
      .col-lg-6
        p Podría afirmarse que el color es una imagen especulativa del mismo, con el fin de poder percibirlo y determinar cuáles serían las palabras precisas que se ajustan para asimilarlo, es decir, al momento de escuchar la descripción de un color, la mente, muy fácilmente, hace un retrato mental. No obstante, la pregunta sería: ¿lo que se cree, acerca de un color, es exactamente igual a lo que se ve?.
        .cajon.color-primario.p-4.mb-4.mb-lg-0
          p.mb-0 La comunicación del color es subjetiva; para percibir el color, el ojo humano requiere de tres elementos: luz, visión y objeto, si no existen estos tres, no se podrá percibir el color. La medición de color hace énfasis en la definición de los esquemas numéricos, con los cuales comunican dicha información electrónicamente, potenciando el control de la impresión.
      .col-lg-6
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema1/img1.png', style="width: 600px")   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")  

    .row.justify-content-center.align-items-center.bg-color2.mb-5
      .col-lg-3.mb-4.mb-lg-0
        h3.mb-0.text-center Tenga en cuenta estos aspectos conceptuales de gran importancia:
      .col-8.col-lg-3.d-flex.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img3.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-3                         
              
              p.mt-5 El ojo humano logra ver luz siempre y cuando cuente con un rango visible adecuado; sin embargo, luz no es lo mismo que color.
              br
              br
      .col-8.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-3
              p La luz podría definirse como la radiación que se encarga de estimular la retina del ojo, posibilitando la visión. Así, se genera una estimulación del ojo humano, el cual transmite al cerebro y este procesa y crea el concepto de color.
      .col-8.col-lg-3
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img4.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-3
              p El método con el cual se miden los colores se designa método triestímulo; los colorímetros que utilizan este método están delineados para medir la luz; podría decirse que es la misma forma en el que el ojo humano puede percibir la luz.
    .row.mb-5
      .col-auto.bg-color3        
        h3 El color y sus componentes
    p.mb-5 Es importante contar con tres componentes básicos para que el color exista: luz, visión y objeto. A continuación, profundice en aspectos relevantes y fundamentales sobre estos elementos y su relación con el color:
    .row.bg-color4.mb-5
      .col-12.px-5
        SlyderE(indicadores="izquierda").my-4
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Luz, visión y objeto
              p La interacción de estos elementos da sentido a un color proyectado, permitiendo distinguirlo. Las ondas electromagnéticas cuentan con distintas longitudes y, en el momento en que los picos de onda se encuentran cerca, tendrán una longitud de onda corta; por el contrario, si los picos  de onda se encuentran separados, las longitudes de onda serán más largas.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema1/img5.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 En impresión
              p Los materiales derivados del papel son impresos en prensas flexográficas y son reflectores de luz; los pigmentos y colorantes de las tintas empleadas en impresión se diseñan como absorbentes altamente efectivos de fragmentos determinados de la energía de la luz (mientras irradian, a la vez, la energía restante). Cada uno de los modelos físicos cuenta con su propia curva de reflectancia (cada curva de reflectancia es única).
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img6.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Realidad vs percepción ocular
              p Comprender los conceptos de la luz y el color es un ejercicio complicado, ya que, cuando estos se observan, en realidad lo que el ojo humano percibe es una parte muy pequeña del espectro electromagnético, a esto se le conoce como rango visible.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img7.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Espectro visible
              p En las mediciones del color, este, a menudo, se caracteriza por la longitud de onda, y así el espectro visible varía desde la luz roja (longitud de onda larga) hasta la luz violeta (longitud de onda corta), haciendo posible, entre ellas, todos los colores que el ojo humano percibe.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img8.png')
    .row.mb-5
      .col-auto.bg-color3
        h3 Tipos de instrumentos
    p.mb-5 En cuanto a los medidores de luz y color, existen dos subcategorías. Las de la primera categoría son herramientas basadas en filtros, mientras que las segundas son herramientas basadas en espectros.
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema1/img9.png', style="width: 700px").m-auto
    p.mb-5 Preste atención a los aspectos que se mencionan a continuación. Procure llevar registro en su libreta personal de apuntes:
    h3.text-center.txt-deco1.mb-5 Instrumentos de medición del color
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
        h3.text-center Sobre las herramientas de medición
        p.text-center Estas pueden calcular el color de la luz usando los mismos valores de rojo, verde y azul que aprecia el ojo humano.
        br
        br
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
        h3.text-center Colorímetro
        p.text-center Instrumento basado en filtros. Contiene tres filtros para separar la luz roja, azul y verde y está diseñado para adaptarse a la respuesta del ojo humano. La luz pasa a través de estos filtros y, cuando alcanza el sensor, los tres valores de color corresponden a lo que percibe el ojo humano.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
        h3.text-center El espectrómetro
        p.text-center Funciona a la inversa, dividiendo la luz en longitudes de onda individuales (al igual que la luz blanca se divide en sus propias longitudes de onda cuando brilla a través de un prisma, crea un arcoíris).
        br.mb-3
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
        h3.text-center Cuando la luz se divide
        p.text-center El espectrómetro contiene varios sensores que miden las propiedades de cada longitud de onda de luz para calcular el color de luz original.
        br
        br
        br
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img7.svg' alt='AvatarTop')
        h3.text-center Particularidades, dispositivos de filtros
        p.text-center Los dispositivos basados en filtros son más simples, más rápidos y con menor costo que sus contrapartes espectroscópicas, pero no brindan mucha información sobre la luz.
        br.mb-3
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
        h3.text-center Particularidades, dispositivos de espectro
        p.text-center Los dispositivos espectroscópicos determinan no sólo la intensidad del color, sino también la energía en cada longitud de onda del espectro visible.
        br
        br.mb-2
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1  Sistemas de medición
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p La colorimetría primaria se basa en la comparación con estándares de color existentes. El ojo humano es un indicador de color muy individual, por ejemplo, para determinar si algo es verde o si, en cambio, es ligeramente amarillo. #[span.txt-deco1 El color reproducible es indistinguible si no se mide en condiciones específicas. El rango de longitud de onda visible es de aproximadamente 380-740 nm, mientras que el ojo humano no puede ver los rayos ultravioleta e infrarrojos].
        p.mb-5 Amplíe sus conocimientos, en lo referente a sistemas de medición, explorando con atención el recurso que se le presenta a continuación:
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Modos de color") Existen algunas definiciones de modos de color, tal como RGB (coloración aditiva) o CMYK (coloración sustractiva), no solo tratan del color en sí, también hay cuantificaciones que se encargan de describir las diferencias entre: luminosidad, saturación y brillo. 
          p.text-small(numero="2" titulo="Normatividad asociada al color") Para señales de tráfico y seguridad, por ejemplo, existe la norma DIN EN ISO 7010, la cual determina los colores que se utilizarán. Existen muchos estándares con definiciones de color para la mayoría de los productos.
          p.text-small(numero="3" titulo="Control de calidad de productos") En caso de comparar dos productos de la industria para comprobar que tengan el 100% del mismo color, se necesita una técnica de medición precisa para comprobar si los colores son repetibles; para ello, es importante realizar un control de calidad con el fin de obtener acertadamente la medición del color.
          p.text-small(numero="4" titulo="En procesos de limpieza") Si se inicia un paso de limpieza (CIP), un sensor de color puede identificar rápidamente si la muestra de color aún está presente en la línea de producción o si las tuberías y los recipientes están limpios.
      .col-lg-4
        figure.mb-4(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema1/img9.svg', style="width: 700px").m-auto
        .row.justify-content-end
          .col-auto
            a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
              span Ampliar 
                i.fas.fa-search
              .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-12
              figure
                img(src='@/assets/curso/tema1/img9.svg', style="width: 1000px").m-auto
    .row.mb-5
      .col-auto.bg-color3
          h3 Selección del sistema de medición
    .row
      .col-lg-7.mb-4.mb-lg-0
        p Cuando se tiene conocimiento del proceder de la muestra, se podrá elegir la longitud de la onda con el fin de establecer el sensor del tono. En caso de no tener claridad de cuál será la longitud de onda a seleccionar, es importante efectuar un escaneo de extensión de onda VIS con un espectrofotómetro especializado del espectro. #[span.txt-deco1 Se puede elegir la mejor longitud de onda para distinguir la muestra de otras fracciones].

      .col-lg-5
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema1/img10.png', style="width: 600px")   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ") 

        
    p.mb-5 Algunos sensores de color cuentan con longitudes de onda específicas:
    figure.mb-5
      img(src='@/assets/curso/tema1/img11.png', style="width: 800px").m-auto
    p.mb-5 Las siguientes son las escalas de color con sus respectivas definiciones:
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Escala de color de Saybolt")
            h4 Escala de color de Saybolt
            p Con el fin de poder comprobar si el combustible, gasolina, queroseno o diesel, presenta algún tipo de contaminación o degradado por su período de almacenamiento, es viable hacer una prueba de medición de color concreta (escala de color Saybolt ASTM D156, ASTM D6045), la escala de colores de Saybolt varía de 30 (agua clara / blanco) a -16 (amarillo oscuro).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Escala APHA")
            h4 Escala APHA
            p Para valorar el nivel de contaminación en aguas residuales y monitorear aguas potables, se utiliza una escala colorimétrica específica, conocida como escala Pt / Co, escala APHA-Hazen o escala APHA. Las pruebas de color APHA se realizan en industrias químicas, farmacéuticas, petroleras y del plástico, así como en la industria de bebidas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Color Gardner")
            h4 Color Gardner
            p Esta escala de colores describe el color amarillo que presenta un líquido transparente, el cual varía de 1 a 18, siendo 1 amarillo claro y 18 marrón oscuro. La norma ASTM D 1544 (método de prueba estándar para el color de líquidos claros) describe un filtro de vidrio, en comparación con un líquido amarillo, y la norma ASTM D6045 define la relación con un colorímetro Gardner.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Color CIELAB")
            h4 Color CIELAB
            p El espacio de color L*a*b* (CIELAB, CIEL*a*b*, Lab colors) hace una descripción detallada de todos los colores visibles, manejando un área tridimensional. Allí la luminosidad L* se ubica verticalmente sobre la capa de color (a*, b*), dicha escala de colores se representa en EN ISO 11664-4 “Colorimetría CIE 1976 L*a*b* Espacio de color”.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Método ICUMSA")
            h4 Método ICUMSA
            p Dentro del libro de métodos ICUMSA, se podrán encontrar instrucciones precisas con el fin de analizar todo tipo de azúcares, melazas y otros obteniendo la evaluación del color, la extinción se examina a 420 nm a lo largo de una ruta óptica específica. El azúcar blanco puro absorbe menos luz (valor 45) que el azúcar moreno en alta absorción (valor 1000).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cálculo valor ICUMSA")
            h4 Cálculo valor ICUMSA
            p.mb-0 Para calcular el valor ICUMSA, se deben verificar parámetros adicionales, como la densidad y el índice de refracción.
            figure.my-4
              img(src='@/assets/curso/tema1/img10.svg', style="width: 300px").m-auto
            p E (420): extinción medida a 420 nm
            p d: longitud del camino óptico (cm)
            p D: densidad
            p Bx: índice de refracción (p. ej. BRIX)
      .col-lg-4
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema1/img12.png', style="width: 600px").m-auto
    .separador.mb-5
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2  Densitómetro y espectrofotómetro
    .row.mb-5(data-aos="zoom-in")
      .col-lg-4
        p La colorimetría es una ciencia que trata de medir y cuantificar los colores mediante números, para operar con ellos y deducir características de aquellos colores obtenidos mediante mezclas, a partir de tres colores considerados como primarios.
      .col-lg-8
        .row
          .col-lg-4.bg-color5
          .col-lg-8.bg-color6
            .p-4
              p #[span.txt-deco1 La colorimetría permite saber la cantidad de color primario que se debe mezclar para obtener otros].  Asimismo, estudia aspectos físicos del color, como la longitud de onda dominante (tono), la pureza de la excitación (saturación) y luminancia (brillo de los cuerpos que emiten luz y claridad de los cuerpos que reflejan la luz).
    p.mb-5 Estas son algunas generalidades que usted debe conocer sobre el densitómetro:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-5(titulo="Densidad óptica o grado de oscuridad")
        .row.align-items-center
          .col
            h4 Densidad óptica o grado de oscuridad
            p El densitómetro es un dispositivo con el cual se puede medir la densidad óptica o grado de oscuridad en materiales semitransparentes o con superficies reflejantes; también se le conoce como espectrodensitómetro.
          .col-auto
            img(src='@/assets/curso/tema1/img20.svg', style="width: 100px").m-auto
      .tarjeta.color-acento-botones--borde.p-5(titulo="Emisión y reflexión de luz")
        .row.align-items-center
          .col
            h4 Emisión y reflexión de luz
            p El proceso de densitometría hace énfasis en la emisión de luz a un punto específico de la superficie que se encuentre en análisis. Esto se logra a través de una serie de lentes que registran los niveles de emisión y reflexión de la luz.
          .col-auto
            img(src='@/assets/curso/tema1/img21.svg', style="width: 100px").m-auto
      .tarjeta.color-acento-botones--borde.p-5(titulo="Interpretación de los valores")
        .row.align-items-center
          .col
            h4 Interpretación de los valores
            p La luz resultante es captada por una serie de lectores encargados de interpretar, electrónicamente, los valores. Los resultados obtenidos se comparan con algunas otras referencias y la medición arrojará un resultado final, el cual se reflejará en la pantalla principal.
          .col-auto
            img(src='@/assets/curso/tema1/img22.svg', style="width: 100px").m-auto
    p.mb-5 Las principales lecturas densitométricas son las siguientes:
    .row.justify-content-center.mb-5
      .col-10.col-lg-4
        .p-2
          .row
            .col-12.bg-top
              .p-4
                figure
                  img(src='@/assets/curso/tema1/img11.svg', style="width: 200px").m-auto
            .col-12.bg-botton
              .p-4
                p.text-center #[b Densidad]
                p.text-center Se encarga de hacer una lectura, la cual indica la cantidad de tinta que se deposita sobre una superficie.
      .col-10.col-lg-4
        .p-2
          .row
            .col-12.bg-top
              .p-4
                figure
                  img(src='@/assets/curso/tema1/img12.svg', style="width: 200px").m-auto
            .col-12.bg-botton
              .p-4
                p.text-center #[b Ganancia de punto]
                p.text-center Hace referencia a valores establecidos en las ganancias mecánica y óptica, los cuales generan un punto de mayor dimensión de la que tenía, también podría entenderse como imágenes oscuras que tienen un alto nivel de tono.
      .col-10.col-lg-4
        .p-2
          .row
            .col-12.bg-top
              .p-4
                figure
                  img(src='@/assets/curso/tema1/img13.svg', style="width: 200px").m-auto.mt-4
            .col-12.bg-botton
              .p-4
                p.text-center #[b Atrape]
                p.text-center Atrape que hace una tinta sobre otra que esté recientemente impresa, es decir, cuando ambas tintas están frescas, esto lo afecta el tono del impreso y por lo general tiende a confundir a un operario, ya que, al momento de observar un impreso, el operario no diferencia con claridad qué tono impreso es. Ello puede generar reprocesos.
      .col-10.col-lg-4
        .p-2
          .row
            .col-12.bg-top
              .p-4
                figure
                  img(src='@/assets/curso/tema1/img14.svg', style="width: 200px").m-auto.mt-4
            .col-12.bg-botton
              .p-4
                p.text-center #[b Balance de grises]
                p.text-center Al momento de realizar una combinación de colores CMYK con todos los valores iguales, se puede producir un gris neutro; cualquier defecto en uno de estos colores durante el proceso de cuatricromía, dará como resultado un color azulado, rojizo, amarillento o gris verdoso, que podrá medirse con un densitómetro.
      .col-10.col-lg-4
        .p-2
          .row
            .col-12.bg-top
              .p-4
                figure
                  img(src='@/assets/curso/tema1/img15.svg', style="width: 200px").m-auto
            .col-12.bg-botton
              .p-4
                p.text-center #[b Error de matiz y grisura de las tintas]
                p.text-center Generalmente, las tintas CMY generan cierto porcentaje de error de matiz (de cian, está contaminado con rojo, magenta muy contaminado con verde, y amarillo, ligeramente con rojo también). Al medir una de estas tintas con un densitómetro, arrojará un valor determinado para cada componente mezclado.
      .col-10.col-lg-4
        .p-2
          .row
            .col-12.bg-top
              .p-4
                figure
                  img(src='@/assets/curso/tema1/img16.svg', style="width: 200px").m-auto.mt-2
            .col-12.bg-botton
              .p-4
                p.text-center #[b Valores más altos o más bajos de matiz]
                p.text-center Si se encuentran valores más altos de matiz o grisura de las tintas en otro lote impreso, se puede saber con certeza que el tono de la impresión será diferente, lo que resultará en una mala calidad de impresión y posiblemente la decisión de devolver el producto.
    .row.mb-5
      .col-auto.bg-color3
          h3 Tipos y usos de densitómetros
    p.mb-5 Principalmente, se encuentran dos tipos de densitómetros:
    .row.bg-color8
      .col-12.px-5
        .p-4
          .row.justify-content-evenly
            .col-lg-4.bg-color7.mb-4.mb-lg-0
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img14.png', style="width: 300px").m-auto
                p.text-center #[b Densitómetros de reflexión]
                p.text-center Realizan medidas de acuerdo con la cantidad de reflexión de luz que se encuentra sobre las superficies opacas de los materiales que han sido impresos. De igual forma, se pueden localizar aquellos que realizan lecturas a color.
            .col-lg-4.bg-color7.d-flex
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img15.png', style="width: 300px").m-auto
                p.text-center #[b Densitómetros de transmisión]
                p.text-center Son aquellos que se encargan de medir la luz que una superficie transparente tiene la capacidad de transmitir.
    .row.bg-color9.mb-5
      .col-12.px-5
        .p-4
          p.text-center.mb-5 Dentro de la gama de los densitómetros, existen dos tipos de uso, los cuales son aplicados en #[span.txt-deco1 fotografía] e #[span.txt-deco1 impresión…]
          .row.justify-content-center
            .col-lg-6
              .p-4
                .row
                  .col-12.bg-top1
                    p.text-center.mb-4 #[b.txt-deco1 En fotografía]
                    p.text-center Establece cuál es el tipo de papel adecuado a utilizar cuando se va a realizar una impresión o un revelado.
                    p.text-center Determina la medición adecuada de los negativos.
                    p.text-center Establece la medición de la saturación de los colores durante el proceso de la impresión.
                    p.text-center Determina el tiempo de exposición que se requiere cuando se va a realizar una impresión o un revelado.
                    p.text-center Al momento de obtener la correcta calibración de los equipos y materiales a utilizar, el resultado será lo que el fotógrafo desea conseguir con la fotografía.
                  .col-12
                    figure
                      img(src='@/assets/curso/tema1/img16.png', style="width: 400px").m-auto
            .col-lg-6.bg-div
              .p-4
                .row
                  .col-12.bg-top1
                    p.text-center.mb-4 #[b.txt-deco1 En impresión]
                    p.text-center Permite un mejor control de la calidad de la saturación del color en el momento de la impresión. En este caso, se utiliza un densitómetro para determinar el estándar de medición de la tinta utilizada.
                    p.text-center Existen varios métodos que no pueden aplicar los valores del densitómetro, por lo que dependen de los valores obtenidos del colorímetro, esto se debe especialmente a que sus resultados son precisos.
                  .col-12
                    figure
                      img(src='@/assets/curso/tema1/img17.png', style="width: 400px").m-auto
    .row.mb-5
      .col-auto.bg-color3
          h3 Espectrofotómetros
    .row.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Un espectrofotómetro es un dispositivo colorimétrico utilizado para conseguir y evaluar colores. Hace énfasis en un programa de control del color; los dueños y diseñadores de marcas lo utilizan para identificar y comunicar los colores determinados y los fabricantes lo utilizan para controlar la precisión del color durante todo el proceso de producción.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Estas herramientas están en capacidad de medir cualquier objeto, entre ellos: papeles, líquidos, telas, metales, plásticos, garantizando que el color se conserve estable y consistente desde el momento de realizar la idea inicial hasta la entrega final del producto. La curva de reflectancia espectral proporcionada por un espectrofotómetro a menudo se denomina #[strong “huella digital de color”].
        p.mb-0 Tenga en cuenta que la elección del tipo de espectrofotómetro depende de la aplicación que se quiera dar, las funciones requeridas y la portabilidad. Estos tienen variedad de tamaños y pueden ser portátiles o para escritorio. Estos son los tipos de espectrofotómetros más comunes y usados:

      .col-lg-6.mb-5
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema1/img18.png', style="width: 600px").m-auto   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")         
       

    .row.bg-color4.mb-5
      .col-12.px-5
        SlyderE(indicadores="izquierda").my-4
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Espectrofotómetro de tipo 0°/45° (o 45°/0°)
              p Es el más común. Mide la luz que se refleja en un ángulo fijo, por lo general a 45°; tiene la ventaja de no permitir brillos y esto es lo que capta el ojo humano como color, se utiliza para medir en zonas suaves o mate.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema1/img19.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Espectrofotómetro de esfera
              p Los instrumentos esféricos pueden medir la luz reflejada desde cualquier ángulo para calcular las medidas de color que mejor se adaptan a lo que ve el ojo humano. Por lo general, se utilizan para medir colores que se han aplicado a superficies texturizadas, como plásticos, telas y alfombras, así como superficies brillantes o reflectantes, incluidas tintas metálicas, impresiones de láminas y otras superficies muy brillantes.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img20.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Espectrofotómetro multiángulo
              p Permite ver el color de la muestra a medida que se mueve hacia adelante y hacia atrás, de forma que la muestra gira con el fin de observar el color desde otros ángulos. Se utilizan, actualmente, en pigmentos de pintura especiales y colores con cualidades específicas, con aditivos de nácar (pintura de automóviles y esmaltes para uñas).
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/img21.png')
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 Los espectrofotómetros cuentan con varios componentes importantes. A continuación, se enuncia y define cada uno de ellos; recuerde llevar registro de los aspectos más relevantes en su libreta personal de apuntes:
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Cubetas de espectrofotometría") Están compuestas, en un primer plano, con dos elementos de cuarzo aptos para el trabajo con luz ultravioleta; en un segundo plano, son de plástico y son utilizados para colorimetría, manejando luz visible.
          p.text-small(numero="2" titulo="Fuente de luz") Debe cumplir una serie de condiciones: direccionalidad, distribución de energía espectral continua y estabilidad. Se requiere un tipo de fuente: lámpara de wolframio (tungsteno), lámpara de deuterio (para laboratorios atómicos) y lámpara de arco de xenón.
          p.text-small(numero="3" titulo="Monocromador") La radiación monocromática aísla de la longitud de onda deseada que está enfocada o reflejada y puede capturar luz monocromática; se compone de rendijas de entrada y salida, colimadores (lentes de luz) y elementos de dispersión.
          p.text-small(numero="4" titulo="Compartimiento de muestra") Aquí es donde tiene lugar la reacción R.E.M. (radiación electromagnética) con la materia (debe ocurrir donde no hay absorción o dispersión de longitud de onda).
          p.text-small(numero="5" titulo="Detector") Se encarga de detectar algún tipo de radiación, dejando la evidencia de su existencia con el fin de ser estudiada (cuenta con dos tipos: unos responden al calor y otros a fotones).
          p.text-small(numero="6" titulo="Registrador") Transforma el fenómeno físico en números iguales al analito, que es el componente (elemento, compuesto o ion) en cuestión de estudio.
          p.text-small(numero="7" titulo="Fotodetectores") Son instrumentos modernos, cuentan con una serie de 16 fotodetectores que detectan, simultáneamente, señales en 16 longitudes de onda, permitiendo cubrir el espectro visible, reduciendo los tiempos de medida.

      .col-lg-4
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema1/img22.png', style="width: 500px").m-auto   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")

    .separador.mb-5
    #t_1_3
    .titulo-segundo.color-secundario
      h2 1.3 Ajustes para la gestión de color
    .row
      .col-lg-8
        p.mb-4 Con el fin de alcanzar un resultado satisfactorio en el proceso de la gestión de color, es importante efectuar una serie de requerimientos, en cuanto a la calibración, estabilidad y caracterización.
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img19.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Ajustes gestión del color
                  p.text-small.text-white Amplíe su saber sobre los aspectos clave de los ajustes para la gestión del color. Estudie y tome nota del contenido del Anexo_1_AjustesGestionDelColor.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_AjustesGestionDelColor.docx')" target="_blank")
                    span(style="color: #000000 !important") Descargar
                    i(style="color: #000000 !important").fas.fa-file-download
      .col-lg-4
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema1/img23.png', style="width: 500px").m-auto   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")

  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    indicadorTarjetaFlip: true,
    modal1: false,
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
