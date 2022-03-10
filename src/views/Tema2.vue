<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Control de calidad del proceso
      
    .half_bg
      .row
        .col-lg-8
          p Un atributo de calidad es una característica que contribuye a la idoneidad y propósito de un producto, servicio o proceso. La primera acción a realizar es establecer un sistema de control de calidad con el fin de identificar sus usuarios y las necesidades del producto.
          p.txt-deco1.mb-5 En este sentido, existen varios tipos de mediciones, que dependen de las características tecnológicas, de calidad, características del producto, en relación con errores, etc. Las más comunes son:
          SlyderF.mb-5(columnas="col-12 col-lg-6")
            .tarjeta.color-secundario.p-4.hc-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop' style="width:90px; margin: 0 auto;")
              p.text-center Las mediciones continuas (especialmente para el producto).
              br.mb-3
            .tarjeta.color-secundario.p-4.hc-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop', style="width:90px; margin: 0 auto;")
              p.text-center De características (el porcentaje del producto elaborado sin defectos; se trata del estado de defectos claramente completos o incompletos).
            .tarjeta.color-secundario.p-4.hc-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop' style="width:90px; margin: 0 auto;")
              p.text-center Discapacidad (su magnitud es el número de defectos).
              br.mb-3
            .tarjeta.color-secundario.p-4.hc-100
              .row.justify-content-center.mb-3
                .col-8.mb-3
                  img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop' style="width:90px; margin: 0 auto;")
              p.text-center.mb-4 Según el número de defectos (insuficientes por acumulación de defectos).

        .col-lg-4
          .imagen-adornos-flotantes          
            img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto   
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")
         

    .row.bg-gradient
      .col-12.px-5
        p.my-5 A continuación, entérese de cuáles son los instrumentos más relevantes para evaluar la calidad de un proceso gráfico, los cuales se encuentran diferenciados así: dispositivos para medición y control de materiales, medidores en los equipos e indicadores de control de calidad:
        .row.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width: 450px").m-auto
          .col-lg-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
              .row(titulo="Dispositivos para medición y control de materiales")
                .col-12
                  .p-4
                    ul.lista-ul
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Higrómetro de espada]: mide humedad de pilas, excesos de problemas de registro y defectos de problemas de plegado.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Micrómetro]: mide volumen de materiales.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Medidor de pH]: mide el potencial de hidrógeno de recursos de mojado y de papel.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Conductímetro]: hace una relación del paso de corriente con el aspecto de un nivel determinado de sales.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p #[b Medidor de gramaje]: mide peso del papel, de acuerdo con su unidad de superficie, la cual está dada en gramos.
              .row(titulo="Medidores en los equipos")
                .col-12
                  .p-4
                    ul.lista-ul
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Medidor de presión] plancha-mantilla.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Medidor de espesor de tinta]: hace referencia a la medida de rodillo distribuidor de la batería de entintado.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Galgas para ajuste de rodillos]: se encarga de medir la presión sobre la plancha.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p #[b Durómetro]: mide la dureza de los rodillos de tinta en grados SHORE, con una escala de 0 a 100.
              .row(titulo="Dispositivos para medición y control de materiales")
                .col-12
                  .p-4
                    ul.lista-ul
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Tiras de control]: conjunto de imágenes de prueba longitudinales para medir y controlar parámetros de impresión, como la densidad. Se deben usar al momento de hacer pruebas y formas (grafías) de impresos para cada función.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Tramado]: cuenta con una serie de indicadores que definen la calidad de la trama (imágenes retocadas en pantalla con el fin de ser impresas).
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Resolución del dispositivo de salida]: spots por pulgada (número de unidades mínimas que puede dibujar el dispositivo).
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p.mb-0 #[b Lineatura (lpi)]: forma del punto, puede ser redondo, cuadrado o elíptico. Es importante utilizar mezclas de las formas.
                      li 
                        i.fas.fa-square-full(style="color: #F57C00")
                        |
                        p #[b Tipo de tramado]: puede ser convencional o am, estocástico o fm e híbrido (fm en altas luces y transición y am en medios tonos y sombras).
        .row.mb-5
          .col-auto.bg-color3
            h3 Influencia de los materiales
        .row.mb-5
          .col-lg-8
            p La evaluación puede basarse en dos tipos de parámetros: #[span.txt-deco1 la calidad de la copia], en términos de qué tan precisa es con respecto al original, y en #[span.txt-deco1 aplicabilidad]; de esta forma, los aspectos cualitativos se pueden agrupar con los que estén relacionados con la estructura (registro, escalado, soporte, tramado), de acuerdo con el comportamiento de la tinta (transparencia, diferencia de color, nivel de grises), para la transmisión de imágenes (ganancia, ajuste fino, contraste) y color de la imagen (equilibrio, intensidad).
            p.txt-deco1.mb-5 El progreso hacia el cambio cultural se atribuye, técnicamente, a la calidad general de poder medir a través del equipo apropiado:
            ul.lista-ul
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p.mb-0 La coherencia entre los métodos.
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p.mb-0 La previsibilidad de los resultados: a través de la estandarización, mediante la cual se realizan  las impresiones para que los valores sean medibles y aplicables en el proceso de producción.
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p La consistencia y/o uniformidad en la calidad de los gráficos, sin importar dónde se impriman.
          .col-lg-4
            .titulo-sexto.color-acento-contenido
              p.mb-0.text-small Programas de estandarización de la calidad y del control del producto
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema2/img2.png', style="width: 450px").m-auto
    .row.bg-color9.mb-5
      .col-12.px-5
        .p-4
          .row.justify-content-center.mt-4
            .col-lg-6
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                    p.text-center.mb-4 #[b.txt-deco1 ¡Atención!]
                    p.text-center La estandarización pretende sustituir la valoración subjetiva por unos parámetros objetivos que se ajusten a unos niveles consensuados o estándares, que son algo dinámico. Existen organismos que se dedican a esta función.
            .col-lg-6.bg-div
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img4.svg', style="width: 100px").m-auto
                    p.text-center.mb-4 #[b.txt-deco1 ¡Importante!]
                    p.text-center La estandarización tiene como objetivo dar los parámetros objetivos con niveles normativos, haciendo que se establezcan las especificaciones básicas, definiendo las características visuales de la forma y su rango de tolerancia. De esto surgen estándares como ISO 12647.
    #t_2_1
    .titulo-segundo.color-secundario
      h2 2.1 Control de procesos previos
    .row
      .col-lg-8
        p.mb-4 Previendo probables variaciones o afectaciones en el producto final esperado, los controles de procesos previos intentan reducir tales posibilidades de daño, incorrección, distorsión y mala calidad. Es por ello que, al igual que en cualquier sector productivo, tienen tanta importancia en la gestión del color. Para favorecer el control de procesos previos en la gestión del color, existe una normativa asociada, que ofrece directrices, líneas y orientaciones sistemáticas para tal efecto.
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img19.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Control de procesos previos
                  p.text-small.text-white Entérese de la lista de lineamientos, normas y estándares para el control de procesos previos. Lea atentamente el Anexo_2_ControlDeProcesosPrevios. Si lo requiere, lleve registro de algunos datos clave en su libreta personal de apuntes.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_ControlDeProcesosPrevios.docx')" target="_blank")
                    span(style="color: #000000 !important") Descargar
                    i(style="color: #000000 !important").fas.fa-file-download
      .col-lg-4
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema2/img3.png', style="width: 500px").m-auto   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")
        
    .separador.mb-5
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Control de procesos de elaboración
    p.mb-5 En todo proceso gráfico se deben tener en cuenta dos etapas: #[span.txt-deco1 el proceso creativo y el proceso industrial]. En ello, la digitalización es un proceso constantemente evolutivo, que ha venido transformando la industria de los medios visuales.
    .row.bg-color9.mb-5
      .col-12.px-5
        .row.align-items-center
          .col-lg-6
            .p-4
              p.mb-0 La producción gráfica juega un papel muy importante en el campo del diseño gráfico. La diversidad de medios impresos, catálogos, folletos, revistas, prensa y #[i flyers], entre otros, conservan una alta demanda de profesionales que se encarguen de crear y dominar los procesos de producción gráfica, puesto que se requieren conocimientos específicos al momento de diseñar material gráfico.
          .col-lg-6
            figure.mb-4.mb-lg-0
              img(src='@/assets/curso/tema2/img5.svg', style="width: 600px").m-auto
    .row.mb-5
      .col-lg-4
        
        figure.mb-4.mb-lg-0(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img4.png', style="width: 600px").m-auto

      .col-lg-8
        .row.mb-5
          .col-auto.bg-color3
            h3.mb-0.mt-3 El proceso de producción gráfica
        p La producción gráfica es un proceso complejo, que integra numerosas fases. Se inicia con la redacción del #[i briefing] por parte del cliente y concluye con la entrega del producto impreso.
        p Para profundizar en los elementos clave de las fases del proceso de producción gráfica, explore el recurso que se muestra a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TxWr2PiJ0R0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5
      .col-lg-4
        figure.mb-4.mb-lg-0(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img5.png', style="width: 600px").m-auto
      .col-lg-8
        .row.mb-5
          .col-auto.bg-color3
            h3.mb-0.mt-3 Postimpresión
        p.mb-5 Al concluir la impresión de un producto, suelen quedar detalles de acabados por revisar; algunos de los más comunes son:
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Tratamiento de superficie") Esta función hace referencia a la protección del producto. Protegerlo de suciedades y proteger los acabados que lleve el producto impreso.
          p.text-small(numero="2" titulo="Tratamiento de protección") En el tratamiento de protección, se organiza el material para generar la correspondiente aplicación; organizar los pliegos para la aplicación de lacados, protección contra la humedad, etc.
          p.text-small(numero="3" titulo="Manipulados de estructura y encuadernación") Esta tarea está relacionada con el proceso de manipulación y modificación del producto impreso, es decir, dar forma a su estructura. Ejemplo: corte, plegado, encolado, engrapado, alzado, fresado.
          p.text-small(numero="4" titulo="Estructura de los pliegos") Consiste en el proceso de organizar las hojas o pliegos impresos que conforman una unidad gráfica. Ejemplo: organizar las hojas de una revista para su proceso de grapado.
          p.text-small(numero="5" titulo="Acabados especiales") Aquí se pueden encontrar varios acabados a realizar, como, por ejemplo, plegados, encuadernación, guillotinado, perforado, barnizado, troquelados, grabados, entre otros.
          p.text-small(numero="6" titulo="Distribución y entrega") Los diseñadores gráficos no pueden perderse un solo detalle. Como tal, deben asegurarse de que las impresiones se entreguen en el lugar y en la fecha acordada con el cliente. Para hacer esto, deben asegurarse de que la imprenta brinde este servicio.
    p.mb-5 Visualice el video que aquí se propone; fue elaborado para que usted ahonde en los aspectos y elementos más importantes de la producción gráfica. ¡Adelante!
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-GO_Y76R6kY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .separador.mb-5
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Organización de ficheros
    .row.mb-5
      .col-lg-7
        p Un fichero o archivo de datos es una recopilación de registros, afines entre sí, con aspectos en común y organizados con un propósito concreto.
        p.txt-deco1.mb-5 Un fichero, en un ordenador, es una estructura creada para la contención de datos; y se encuentra organizado de tal manera que se puede recuperar, actualizar, eliminar y volver a almacenar fácilmente en el archivo con cualquier cambio realizado.
        .row.mb-4
          .col-auto.bg-color3
            h3 Organización de archivos
        p Cuando se habla de archivos u organización de archivos, se hace referencia a los soportes, en medio físico, donde se almacenan los datos. En la gestión de ficheros, suele haber dos tipos principales de soportes: soportes secuenciales y soportes direccionables.
        p En la organización de archivos o ficheros, se deben tener en cuenta los siguientes aspectos:

      .col-lg-5
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema2/img6.png', style="width: 600px").m-auto   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")        

    .row.bg-color4.mb-5
      .col-12.px-5
        SlyderE(indicadores="izquierda").my-4
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Soportes secuenciales
              p Son los que, a través de sus registros de información, se escriben uno a uno, y para llegar a un registro en particular, es necesario pasar por los n-1 registros anteriores.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema2/img7.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Disposición física
              p Secuencialmente, pueden corresponder a la disposición física de los registros en un archivo (organización secuencial) o al orden clave (ascendente o descendente) de los registros (organización indexada).
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema2/img8.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Soportes direccionales
              p Se trata de discos magnéticos. No obstante, pueden proceder como soporte secuencial y están organizados para que la información grabada se pueda localizar directamente por su dirección, no requiere pasar por registros anteriores.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema2/img9.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Identificación de soportes direccionales
              p En estos soportes, los registros deben poseer un campo único para distinguirlos del resto de registros del archivo. La dirección en los soportes direccionales se podrá ubicar por el número de sección del disco o el número de pista.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema2/img10.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Accesos a los archivos
              p Dependiendo de las propiedades de los medios utilizados y de cómo se organizan los archivos, se esperan dos tipos de acceso a los archivos: acceso secuencial y acceso directo.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema2/img11.png')
          .row
            .col-md-6.mb-4.mb-md-0
              h3.mt-5.txt-deco1 Acceso secuencial y acceso directo
              p El acceso secuencial consiste en acceder a un archivo en el orden en que se almacenan sus registros, uno por uno. Mientras que el acceso directo significa el acceso a un archivo específico, que no está destinado a volver a archivos anteriores. Este segundo tipo de acceso sólo es posible con medios enrutables.
            .col-md-6
              .p-1
                figure
                  img(src='@/assets/curso/tema2/img12.png')
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              h2.mb-0.text-center Atención
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p La organización de ficheros define cómo se organizan los registros en los medios de almacenamiento; o la organización también define cómo se organizan los datos en el archivo.
    .row.mb-4
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img13.png', style="width: 600px").m-auto
      .col-lg-7
        .row.mb-5
          .col-auto.bg-color3
            h3 Organización secuencial
        p Un fichero de organización secuencial es una continuación de registros que se encuentran almacenados, consecutivamente, sobre el soporte externo. Para poder acceder a un registro #[span.txt-deco1 N] transmitido es necesario recorrer todos los #[span.txt-deco1 N-1] artículos que le anteceden.
        p.txt-deco1.mb-4 Los registros se graban de forma consecutiva en el momento en que el archivo es creado y se debe acceder consecutivamente al momento de leer los registros. Es decir:
        ul.lista-ul
          li 
            i.fas.fa-square-full(style="color: #F57C00")
            |
            p.mb-0 La disposición física y la forma en que se grabaron (escritos) los registros será el orden para darle la lectura a los mismos.
          li 
            i.fas.fa-square-full(style="color: #F57C00")
            |
            p.mb-0 Un dispositivo de memoria auxiliar soporta una organización secuencial.
          li 
            i.fas.fa-square-full(style="color: #F57C00")
            |
            p.mb-0 Los ficheros secuencialmente organizados cuentan con un registro específico, ya que el último presenta una marca fin de archivo (EOF o bien FF). El cual cuenta con carácter especial, como ‘ * ‘.
    .row.mb-5
      .col-auto.bg-color3
        h3.mb-0.mt-3 Organización directa
    .row.mb-4.mb-lg-0
      .col-lg-7
        p En los ficheros que se organizan con carácter directo, puede no coincidir el orden físico con el orden lógico. Los datos están en el archivo y se puede acceder directamente a ellos de forma aleatoria, según su ubicación, es decir, la ubicación relativa que ocupa.
        p.txt-deco1 La organización directa ofrece la gran ventaja de que los registros pueden ser leídos y escritos en cualquier posición y orden. De igual forma, se puede acceder muy rápido a la información que contienen. La organización directa tiene el inconveniente de tener que programar la relación entre el contenido del registro y la ubicación que ocupa.
        p.mb-4 Estos son otros aspectos que, sobre la organización directa, usted debe tener en cuenta:
        SlyderF.mb-5(columnas="col-12 col-lg-6")
          .tarjeta.color-secundario.p-4.hc-100
            .row.justify-content-center.mb-3
              .col-8|
                img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop', style="width:90px; margin: 0 auto;")
            p.text-center Acceder a los registros en modo directo significa que puede haber espacios libres en el entorno y, por lo tanto, puede haber espacios entre los registros.
            br
            br
            br
          .tarjeta.color-secundario.p-4.hc-100
            .row.justify-content-center.mb-3
              .col-8.mb-3
                img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop' style="width:90px; margin: 0 auto;")
            p.text-center.mb-5 Un fichero de organización directa debe estar almacenado en un soporte direccionable. Los registros deben tener un campo específico llamado clave que identifique de forma única cada registro.
          .tarjeta.color-secundario.p-4.hc-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop' style="width:90px; margin: 0 auto;")
            p.text-center Dos registros diferentes no pueden tener el mismo valor de clave.
            br
            br
            br.mb-5
          .tarjeta.color-secundario.p-4.hc-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop' style="width:90px; margin: 0 auto;")
            p.text-center Un soporte direccionable es un disco o un paquete de discos. Cada posición se identifica por su dirección absoluta, que en el caso de un disco, está determinada por dos parámetros: número de sector y número de pista, sector y número de cilindro.
          .tarjeta.color-secundario.p-4.hc-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop' style="width:90px; margin: 0 auto;")
            p.text-center Un cilindro i es el conjunto de pistas de número i de cada plano de almacenamiento de la pila.
            br
            br
            br
            br.mb-3
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img6.svg', style="width: 600px").m-auto
    .row.bg-color9.mb-5
      .col-12.px-5
        .p-4
          .row.justify-content-center.mt-4
            .col-lg-4
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img8.svg', style="width: 100px").m-auto
                    p.text-center.mb-4 #[b.txt-deco1 ¡Tenga en cuenta!]
                    p.text-center Cuadro de diálogo que despliega la siguiente información:
                    p.text-center En la experiencia, el encargado de programar no gestiona direcciones absolutas, sino direcciones referentes, de acuerdo con el comienzo del archivo.
            .col-lg-4.bg-div
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                    p.text-center.mb-4 #[b.txt-deco1 ¡Atención!]
                    p.text-center Cuadro de diálogo que despliega la siguiente información:
                    p.text-center La operación de direcciones admite diseñar el programa con autonomía de la posición absoluta del archivo en el soporte.
            .col-lg-4.bg-div
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img4.svg', style="width: 100px").m-auto
                    p.text-center.mb-4 #[b.txt-deco1 ¡Importante!]
                    p.text-center Cuadro de diálogo que despliega la siguiente información:
                    p.text-center El programador crea una relación bien definida entre el enrutamiento principal de cada registro y su ubicación física en el dispositivo de almacenamiento.
    .row.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img14.png', style="width: 450px").m-auto
      .col-lg-8
        .row.mb-5
          .col-auto.bg-color3
            h3.mb-0.mt-3 Organización secuencial indexada
        p Un diccionario es un archivo secuencial cuyos registros son entradas y sus claves son palabras definidas por las entradas. Para buscar una palabra (clave), no se busca una palabra en secuencia (de la “a” hasta “z”), sino que la acción que se realiza, por lo general, es la de buscar una palabra del diccionario de acuerdo con la letra inicial de la palabra.
        p.txt-deco1 Este es un ejemplo de archivo secuencial-indexado con dos niveles de índices. Las iniciales del nivel superior y el nivel inferior hacia arriba, se almacenarán en un archivo de índice separado de las entradas del diccionario (archivos de datos). Por tal razón, un archivo secuencialmente indexado se constituye en un archivo de datos y un archivo índice.
    .row.justify-content-center.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido
          p.mb-0 Archivo secuencial indexado
        figure
          img(src='@/assets/curso/tema2/img9.svg', style="width: 450px").m-auto
    p Para saber si un fichero se encuentra organizado en forma secuencial-indexada, es importante tener presente:
    .row.bg-color10.mb-5
      .col-12.px-5
        .row.align-items-end
          .col-lg-7.mb-4.mb-lg-0
            ul.lista-ul
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p.mb-0 El tipo de registros, el cual contiene un campo clave identificador.
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p.mb-0 Que los registros deben estar situados en un soporte que permite dar dirección de acuerdo con el orden de los valores que son indicados por la clave.
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p Que cuente con un índice por cada posición direccionable, de igual forma, por la dirección de la posición y el valor de la clave; es decir, que el índice contenga una clave del último registro y, de igual forma, que cuente con la dirección de acceso al primer registro del bloque.
            p.mb-4 Un fichero en organización secuencial-indexada se constituye con las siguientes partes:
            ul.lista-ul
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p.mb-0 #[span.txt-deco1 Área de datos o primaria]: contiene registros secuencialmente y organizados en una secuencia de teclas sin espaciar.
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p.mb-0 #[span.txt-deco1 Área de índices]: Es una tabla con niveles de índice, contiene algunos índices asociativos a los que se les llama nivel de indexación.
              li 
                i.fas.fa-square-full(style="color: #F57C00")
                |
                p #[span.txt-deco1 Área de desbordamiento o excedentes]: Se utiliza en caso de realizar actualizaciones

            .row.justify-content-center.mt-0.mt-lg-5.mb-0.mb-lg-5.mt-5
              .col-6
                figure.mb-4
                  img(src='@/assets/curso/tema2/img8.svg', style="width: 100px").m-auto
                p.text-center.txt-deco1 ¡Tenga en presente!
                p.text-center Funcionalmente, el espacio del índice es equivalente al índice del libro. Refleja el valor de clave más alto definido para cada grupo de registros en el archivo y la dirección de almacenamiento del grupo.

          .col-lg-5
            .imagen-adornos-flotantes          
              img(src='@/assets/curso/tema2/img15.png', style="width: 480px").m-auto   
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")        
            

    .separador.mb-5
    #t_2_4
    .titulo-segundo.color-secundario
      h2 2.4 Generación de PDF
    .row.mb-5
      .col-lg-7
        p PDF (Portable document format) fue desarrollado por Adobe System y se trata de una herramienta estándar para compartir archivos, publicar en línea e imprimir documentos. Un documento PDF es una copia exacta de un documento original, un archivo de texto, un archivo de diseño gráfico, una imagen, un mapa o incluso un video. Además, se puede proteger con contraseña para restringir el acceso a funciones como la edición y la impresión.
        p.txt-deco1 Para crear y ver un PDF, se recomienda contar con el #[i software] adecuado, instalado en un computador. Adobe Acrobat es la herramienta más conocida y con mejores resultados al momento de enviar los archivos al proceso de impresión.
        p A continuación, se mencionan los términos relacionados para una impresión en un formato PDF:
      .col-lg-5
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema2/img11.svg', style="width: 450px").m-auto   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")     

    .row.mb-5
      .col-lg-6
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img12.svg', style="width: 50px").m-auto
          .col.bg-color11
            .p-4
              p.mb-4 #[b Tamaño de archivo] 
              p Milímetros agregados al sangrado. Cuando se corten con guillotina o troquel, tendrán las dimensiones de diseño deseadas. Así, la pieza final no queda con borde blanco alrededor del trabajo terminado.
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img13.svg', style="width: 50px").m-auto
          .col.bg-color11
            .p-4
              p.mb-4 #[b Marcas de corte o recorte] 
              p Hace énfasis en las líneas que se encargan de indicar el borde de la pieza; permitiendo delimitar el área de trabajo.
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img14.svg', style="width: 50px").m-auto
          .col.bg-color11
            .p-4
              p.mb-4 #[b Marcas de doblado] 
              p Líneas pequeñas que indican dónde se dobla el material, delimitando las partes del mismo.
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img15.svg', style="width: 50px").m-auto
          .col.bg-color11
            .p-4
              p.mb-4 #[b Margen de seguridad] 
              p Área muy cercana a los bordes; las líneas que la señalan permiten que el contenido que es legible no se corte con la guillotina.
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img16.svg', style="width: 50px").m-auto
          .col.bg-color11
            .p-4
              p.mb-4 #[b Marcas de registro] 
              p Hace la función de indicador, el cual supone un color sobre otro al momento de imprimir un trabajo a color.
      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img16.png', style="width: 550px").m-auto
    p.mb-5 Cabe resaltar que los procesadores de texto, como MS-Word, no pueden generar PDF con marcas ni área de sangrado, puesto que dichos programas no son desarrollados para artes gráficas; por tal razón, no pueden desarrollar estas opciones.
    .row.bg-color9.mb-5
      .col-12.px-5
        .p-4
          .row.justify-content-center.mt-4
            .col-lg-4
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                    p.text-center.mb-4 #[b.txt-deco1 ¡Atención!]
                    p.text-center Al momento de llevar el arte final a una imprenta, el operario podrá solicitar los archivos a imprimir con marcas de impresión; sin embargo, no será necesario incluir todas las marcas que están disponibles en los programas de diseño.
            .col-lg-4.bg-div
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img4.svg', style="width: 100px").m-auto
                    p.text-center.mb-4 #[b.txt-deco1 ¡Muy importante!]
                    p.text-center Lo que se busca es incorporar las marcas necesarias para elaborar la impresión, siendo las más importantes las marcas de corte, registro y sangrado.
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img17.svg', style="width: 450px").m-auto
      .col-lg-8
        .row.mb-5
          .col-auto.bg-color3
            h3.mb-0.mt-3 Crear un archivo PDF para imprenta
        p Existen varias formas de crear un archivo PDF adecuado para poder imprimir documentos y artes finales en el ámbito del diseño y sus vertientes; el estándar que más se ha utilizado en artes gráficas es el PDF/X, esta es la forma recomendada para llevar un proyecto de una empresa a la imprenta.
        p.txt-deco1 Por lo general, los programas de diseño exportan y guardan los archivos directamente como PDF/X. Lo recomendado es que las letras (fuentes) se deben convertir a curvas (vectores) y toda imagen debe contener un mínimo de 300 ppp (pixeles por pulgada) de resolución.
    .row.bg-color9.mb-5
      .col-12.px-5
        .p-4
          .row.justify-content-center.mt-4
            .col-lg-4
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img18.svg', style="width: 100px").m-auto
                    p.text-center De igual forma, estar en colores CMYK y prestar atención al tamaño de la página, evitando que se reduzca al momento de ser manipulada.
            .col-lg-4.bg-div
              .p-4
                .row
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/tema2/img18.svg', style="width: 100px").m-auto
                    p.text-center El paso siguiente es abrir el archivo PDF generado y realizar comprobaciones: textos acordes, tamaños, colores, chequear si hay alguna sobreimpresión que no es del arte final y revisar si las imágenes cuentan con la cantidad de color y tinta adecuada.
    p.mb-5 Afiance los conceptos y acciones operativas relacionados con la creación de archivos PDF para impresión en #[i software] de diseño. Observe el vídeo que aquí se propone.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/v2tHOqnqh60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-end.mb-5
      .col-lg-8
        .row.mb-5
          .col-auto.bg-color3
              h3 Errores frecuentes en PDFs para imprenta
        p Al momento de llevar un documento a la impresora, es mejor enviar un archivo PDF que un archivo abierto, esto evita el riesgo de problemas como errores tipográficos o errores de enlaces e imágenes, entre otros. Pero, incluso un archivo PDF, debe tener los requisitos mínimos para obtener una impresión precisa del arte final, sin importar qué #[i software] utiliza para crearlo.
        p Estos son los errores más comunes al momento de hacer el proceso de impresión:
      .col-lg-4
        .imagen-adornos-flotantes          
          img(src='@/assets/curso/tema2/img19.svg', style="width: 450px").m-auto   
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 0% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 2% ; width: 60px ")
        

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 1] Errores comunes en impresión de PDF
    .tabla-b.color-acento-contenido
      .tabla-b__header
        h5.mb-0  Errores comunes en impresión de PDF
      table
        tr
          th Envío de archivo pdf de baja calidad a la imprenta
          td En ocasiones, el archivo PDF no cumple con las características adecuadas de alta calidad para impresión, esto se puede generar por las imágenes que no son las adecuadas, puede ser porque son de baja calidad, por lo general, son imágenes web con 72 dpi, no cumpliendo con la resolución requerida de 300 dpi para una impresión.
        tr
          th El diseño no cuenta con el sangrado adecuado para impresión
          td Esto se puede dar por dos situaciones: uno, que el diseño no cuente con la sangría adecuada desde el principio, y dos, que al momento de crear el archivo PDF no se active la casilla correspondiente al sangrado.
        tr
          th No hay marcas de corte
          td En ocasiones, no se activa la casilla de marcas de los cortes, de igual forma, no se especifican parámetros de distancia entre marcas y los bordes del papel.
        tr
          th Imágenes en RGB
          td En muchas ocasiones, no se realizan las conversiones de las imágenes del diseño de RGB a CMYK, esto aplica para impresión #[i offset] o digital. La mejor manera de convertir imágenes RGB a CMYK es usar Photoshop, ya que combina tonos y colores mejor que cualquier otro programa. Es una buena costumbre abrir todas las imágenes utilizadas en el documento y comprobar, antes de crear el archivo PDF, que estén en formato CMYK.
        tr
          th Elementos cerca de la línea de corte de página
          td En ocasiones, se numera o dejan márgenes en un archivo y se convierte en PDF, lo cual limitará que no se pueda arreglar; para ello, se recomienda cuadrar la paginación o márgenes en el documento previo, con el fin de que no queden elementos cerca de la línea de corte.

</template>

<script>
export default {
  name: 'Tema2',
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
