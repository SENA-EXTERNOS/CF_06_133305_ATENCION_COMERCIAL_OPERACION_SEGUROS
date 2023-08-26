<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondot6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La organización 

    .bg1
      .row.justify-content-center.align-items-start.mt-5
          .col-lg-4
              img(src='@/assets/curso/temas/tema1/tema1.png' )                   
          .col-lg-8
            p.mt-3 Una <b>organización</b> es la figura social conformada por personas que tienen un objetivo común y están organizadas dentro de una estructura para ofertar un producto o servicio requerido por una o más personas. Para la conformación de esa estructura claramente organizada es necesario contar con una serie de normas, comportamientos y procedimientos que permiten desarrollar armónicamente su misión y visión, concebidas en un momento y espacio definido.
            .cajon.color-primario.p-4
              p Para el funcionamiento de una organización es necesario disponer de los recursos básicos para su  operación —materiales, humanos y financieros— y darles a estos un adecuado uso para sacarles provecho y lograr, de manera exitosa, los objetivos sociales, económicos, comerciales y financieros que se hayan planteado.

      Separador

      #t_1_1
      
      .titulo-segundo.color-acento-contenido.mb-5
        h2 1.1 Características y tipos de las organizaciones 

      p.mt-3 Con base en los objetivos enunciados anteriormente es posible afirmar, entonces, que las organizaciones son diversas y cada una de ellas tiene sus propias características que las hacen particulares. Así, también es posible clasificarlas según su conformación.

      p.mt-3 Algunas de las características que permiten mostrar los rasgos comunes entre las organizaciones son:  
        b miembros, recursos, normas, fines y desarrollo de tareas.
      p A continuación, se desarrollan cada una de las características de la organización:



    .row.justify-content-center.mt-5
      .col-lg-9
        TabsA.color-primario
          .tarjeta.colorblue.p-4(titulo="Miembros")       
            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img1.png', alt='')
                 
              .col-xl-10
                
                p Son el recurso humano responsable de asumir los roles de la organización.

          .tarjeta.colorblue.p-4(titulo="Recursos")

            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img2.png', alt='')
                 
              .col-xl-10
               
                p Para su existencia y posterior desarrollo es necesario que una organización disponga de recursos humanos, financieros, materiales y tecnológicos, lo que facilitará el cumplimiento de sus objetivos organizacionales.
          
          .tarjeta.colorblue.p-4(titulo="Normas")
            
            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img3.png', alt='')
                 
              .col-xl-10
               
                p Son el conjunto de reglas básicas para el funcionamiento de una organización. Estas se expresan en manuales, procedimientos, políticas y estrategias, que son los lineamientos para operar y tomar decisiones.

          .tarjeta.colorblue.p-4(titulo="Fines")
            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img4.png', alt='')
                 
              .col-xl-10
                
                p Son aquellas metas y objetivos definidas para alcanzar en un periodo determinado.

          .tarjeta.colorblue.p-4(titulo="Desarrollo de tareas")
            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img5.png', alt='')
                 
              .col-xl-10
               
                p Es la unidad básica para el cumplimiento de actividades, que se enlaza con procedimientos y procesos de las áreas o departamentos de la organización.

    p.mt-5 Asimismo, se reconoce que las organizaciones son sistemas complejos que funcionan con personas. Para poder entenderlas es necesario presentar, en primera instancia, los tipos de organización existentes, sus políticas y reglas internas, así como los procesos de gestión del cambio.

    h5.mt-5 Tipos

    p.mt-5 Las organizaciones se clasifican según diversos criterios que permiten categorizarlas en distintos tipos, algunos de estos son: 
      b la estructura, los ingresos, la propiedad y el tamaño.
    
    p.mt-5 Cada uno de estos criterios de las organizaciones están conformados de la siguiente manera:


    ImagenInfografica.color-acento-botones.mb-5.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img6.png')

      .tarjeta.color-acento-puntoscalientes.p-3(x="15%" y="41%" numero="+")
        
        p.mb-0.text-left Son aquellas que cumplen con los requisitos para establecer una organización, entre estas, haber realizado su formalización ante una Cámara de Comercio.
        
      .tarjeta.color-acento-puntoscalientes.p-3(x="15%" y="57%" numero="+")
       
        p.mb-0.text-left Son aquellas que se crean como resultado de las actividades económicas realizadas directamente con los usuarios del servicio o clientes, pero no se formalizan mediante los mecanismos definidos por el Estado. 
        
      .tarjeta.color-acento-puntoscalientes.p-3(x="36.5%" y="43.9%" numero="+")
        
        p.mb-0.text-left Son aquellas organizaciones que tienen como objetivo generar utilidades para los socios.
        
      .tarjeta.color-acento-puntoscalientes.p-3(x="36.5%" y="64%" numero="+")
       
        p.mb-0.text-left Son aquellas organizaciones cuyas actividades económicas no tienen la finalidad de generar lucro o utilidades.
        
      .tarjeta.color-acento-puntoscalientes.p-3(x="58.5%" y="41.5%" numero="+")
       
        p.mb-0.text-left Se caracterizan por ser constituidas con capital privado.
        

      .tarjeta.color-acento-puntoscalientes.p-3(x="58.5%" y="57%" numero="+")
        
        p.mb-0.text-left Se caracterizan por ser constituidas con dinero de origen público y porque en su estructura participa el Estado o el Gobierno.
        
      
      .tarjeta.color-acento-puntoscalientes.p-3(x="80%" y="41%" numero="+")
        
        p Son aquellas que tienen hasta 10 trabajadores.


      .tarjeta.color-acento-puntoscalientes.p-3(x="80%" y="57%" numero="+")
        
        p.mb-0.text-left Son aquellas que tienen entre 11 y 50 trabajadores.
        

      .tarjeta.color-acento-puntoscalientes.p-3(x="80%" y="74%" numero="+")
        
        p.mb-0.text-left Son aquellas que tienen entre 51 y 200 trabajadores.
        
      .tarjeta.color-acento-puntoscalientes.p-3(x="80%" y="89%" numero="+")
        
        p.mb-0.text-left Son aquellas que tienen más de 200 trabajadores.
    

    .row.justify-content-center.mt-5
      .col-lg-7
        .cajon.color-primario.p-4
            p En Colombia, las empresas, que son un tipo específico de organización, son clasificadas por su tamaño en micro, pequeñas, medianas y grandes. Esta clasificación se encuentra reglamentada en la Ley 590 de 2000 —conocida como
              b  Ley MiPymes— 
              | y sus modificaciones (Ley 905 de 2004).


    Separador  

    #t_1_2

    .titulo-segundo.color-acento-contenido.mb-5        
      h2 1.2 Reglas y políticas de negocio

    .row.justify-content-center.align-items-start.mt-5      
        .col-lg-5
            img(src='@/assets/curso/temas/tema1/img7.png')                   
        .col-lg-6
          p.mt-3 Las organizaciones son cada vez más dinámicas en su funcionamiento y relacionamiento con otras empresas del sector externo. Al existir cambios y nuevas formas de interacción, las reglas, normas, procedimientos y políticas se ajustan al ritmo del cambio expresado por nuevos materiales, tecnologías y formas de producir e interactuar. A continuación, se aclara el concepto de reglas (o normas) y políticas, para su correcta diferenciación.
          .cajon.color-primario.p-4
            p Las reglas o normas son establecidas para que las personas que integran una organización las acaten y, con esto, se puedan llevar a cabo procedimientos, establecer comportamientos o tomar decisiones dentro la filosofía de la organización.

    h5.mt-5 Políticas


    .row.mt-5                 
      .col-lg-7
        p.mt-2 Por el contrario, las políticas hacen referencia a las directrices generales, incluyen las normas, procedimientos, procesos y estrategias; estas enmarcan los criterios de ejecución de las actividades en la organización. En su enunciado, las políticas comprenden:   
    
        
        ul.lista-ul--
          li 
            i.fas.fa-angle-right.yelllow
            | La orientación de un principio.
          
          li 
            i.fas.fa-angle-right.yelllow
            | La delimitación del alcance.
          li 
            i.fas.fa-angle-right.yelllow
            | La definición de la estructura encargada de ejecutar.
          li 
            i.fas.fa-angle-right.yelllow
            | La definición de los controles o mecanismos de verificación.

          li 
            i.fas.fa-angle-right.yelllow
            | La documentación de todo lo anteriormente expuesto y su disposición para el acceso abierto al interior de la organización.

          





      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img8.png')


    h5.mt-5 Tipos de políticas organizacionales

    p Ahora bien, existen diferentes tipos de políticas organizacionales, las cuales se pueden clasificar según su temporalidad, el ámbito de aplicación, su alcance y nivel jerárquico.

    p.mt-3 En la siguiente gráfica, observe y comprenda cada uno de los tipos de políticas organizacionales, según su clasificación:

    .row.justify-content-center.mt-3
      .col-lg-8.sm-8.mt-5
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 1</b> <br> <i>Tipos de políticas organizacionales</i>


        .row.justify-content-around.align-items-center.mt-2
          .col-11
            .tarjeta.colorgreen.p-3.mt-5
              .row.justify-content-around.align-items-center
                .col-lg-5
                  img(src="@/assets/curso/temas/tema1/img9.png")
                .col-7
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                        h3.mt-2 Según la temporalidad
                        p.mb-0 A largo plazo
                        p.mb-0 A corto plazo


        .row.justify-content-around.align-items-center.mt-2
          .col-11
            .tarjeta.colorgreen.p-3.mt-5
              .row.justify-content-around.align-items-center
                .col-lg-5
                  img(src="@/assets/curso/temas/tema1/img10.png")
                .col-7
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                        h3.mt-2 Según el ámbito de aplicación
                        p.mb-0 Financieras
                        p.mb-0 Operacionales
                        p.mb-0 Personales
                        p.mb-0 De mercado

        .row.justify-content-around.align-items-center.mt-2
          .col-11
            .tarjeta.colorgreen.p-3.mt-5
              .row.justify-content-around.align-items-center
                .col-lg-5
                  img(src="@/assets/curso/temas/tema1/img11.png")
                .col-7
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                        h3.mt-2 Según su alcance o nivel jerárquico
                        p.mb-0 Generales
                        p.mb-0 Específicas
                      

      p.mt-5 A continuación, se profundiza en cada tipo de política, según su clasificación:
        
      .row.justify-content-center.align-items-start.mt-5      
        .col-lg-6
            LineaTiempoD   
              .row(numero="1" titulo="Políticas a largo plazo")
                .col-lg-2
                  img(src='@/assets/curso/temas/tema1/img12.svg' )           
                .col-lg-9
                  p Suponen objetivos de largo alcance, apuntan a lograr sostenibilidad en el tiempo y pueden estar orientadas, por ejemplo, a lograr la participación de la organización en el mercado nacional.
              
              .row(numero="2" titulo="Políticas a corto plazo")
                .col-md-2
                  img(src='@/assets/curso/temas/tema1/img13.svg'  )
                .col-lg-9
                  p Guardan relación con situaciones que se deben resolver en un plazo corto y se presentan en el diario vivir de la organización. Como ejemplo de este tipo de política está la atención a clientes enojados.

              .row(numero="3" titulo="Políticas financieras")
                .col-md-2
                  img(src='@/assets/curso/temas/tema1/img14.svg' )
                .col-lg-9
                  p Establecen lineamientos del manejo, el direccionamiento y el control de las áreas de contabilidad, tesorería y tributaria. 

              .row(numero="4" titulo="Políticas operacionales")
                .col-md-2
                  img(src='@/assets/curso/temas/tema1/img15.svg' )
                .col-lg-9
                  p Son aplicadas en el proceso de producción de la organización y buscan garantizar el uso eficiente y eficaz de los recursos.
                  
        .col-lg-6
          LineaTiempoD
              .row(numero="5" titulo="Políticas personales ")
                .col-md-2
                  img(src='@/assets/curso/temas/tema1/5.svg' )
                .col-lg-9
                  p Establecen pautas relacionadas con el área de recursos humanos.

              .row(numero="6" titulo="Políticas de mercado ")
                .col-md-2
                  img(src='@/assets/curso/temas/tema1/img16.svg' )
                .col-lg-9
                  p Establecen lineamientos para el mercadeo, la publicidad y las ventas.

              
              .row(numero="7" titulo="Políticas generales")
                .col-md-2
                  img(src='@/assets/curso/temas/tema1/img17.svg' )
                .col-lg-9
                  p Hacen referencia a la globalidad de la organización, se basan en los principios fundantes que deben responder a la estrategia corporativa y su naturaleza, y son el referente para las políticas específicas de la organización.
                

              .row(numero="8" titulo="Políticas específicas")
                .col-md-2
                  img(src='@/assets/curso/temas/tema1/img17.svg' )
                .col-lg-9
                  p Son aplicadas en las diferentes áreas de la organización y su alcance se orienta a las acciones, los procedimientos y las decisiones que se adoptan o llevan a cabo. Entre ellas se encuentran las políticas específicas de seguridad y salud en el trabajo, gestión del cambio, recursos humanos, calidad, gestión ambiental, responsabilidad social y empresarial.  
                 

    h5.mt-5 Políticas de gestión del cambio 

    p.mt-5 Por otra parte, dentro de las políticas de una organización se encuentran 
      b las políticas de gestión del cambio, 
      | las cuales hacen referencia a acciones definidas para evitar inconvenientes en las áreas de 
      b tecnologías de la información. 
      | La consecuencia más directa se presenta en equipos,
      i  softwares, 
      |  infraestructura tecnológica, afectaciones que impacten la velocidad de procesamiento, capacidad de almacenamiento, seguridad y confidencialidad de la información, y la disponibilidad directa de los datos.
                
    p.my-5 A continuación, se presentan las acciones relacionadas con la implementación de cambios, alusivas a estas políticas:        
              
      
   
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--amarilla")
      .row(titulo="Identificación de cambios")                   
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img19.png', alt='')
            
        .col-md-5         
          p Se deben identificar los cambios efectuados en los activos de información tecnológica y verificar que los recursos tecnológicos cuenten con las autorizaciones de los responsables de las respectivas áreas.
      
      .row(titulo="Generación de la ruta de trabajo")       
               
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img23.png', alt='')
            
        .col-md-5          
          p La organización debe generar una ruta de trabajo o procedimiento para la gestión de cambios emergentes.
    

      .row(titulo="Cambios en la plataforma tecnológica")           
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img24.png', alt='')    
        .col-md-5          
          p Se debe garantizar que los cambios incorporados en la plataforma tecnológica mantengan, en primera instancia, la seguridad como criterio de modificaciones o actualizaciones implementadas.
      
      .row(titulo="Medición y seguimiento")           
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img25.png', alt='')    
        .col-md-5          
          p Se debe hacer medición y seguimiento a la configuración de la plataforma tecnológica, a fin de generar una trazabilidad de todo cambio o ajuste realizado.

      .row(titulo="Solicitud formal")           
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img26.png', alt='')    
        .col-md-5          
          p En el momento de surtir nuevas funcionalidades, nuevos servicios o ajustes, es necesario que la solicitud se haga de manera formal al área de Tecnología de la organización. Esta solicitud debe llevar soporte de cada ajuste o intervención de las solicitudes hechas por las otras áreas de la organización.



    h5.mt-5 Ingeniería de requisitos 

    .row.justify-content-center.align-items-start.mt-5    
        .col-lg-5
            img(src='@/assets/curso/temas/tema1/img20.png')                   
        .col-lg-6
          p.mt-3 A medida que las organizaciones van creciendo, su complejidad aumenta, por lo que es necesario aplicar 
            b la ingeniería de requisitos, 
            | la cual se basa en atender de manera clara y precisa las características de un desarrollo o 
            i software 
            | con el fin de satisfacer las necesidades de los usuarios o clientes. Cabe aclarar que esta debe adaptarse al contexto de funcionamiento de la empresa y para ello es necesario llevar una estricta trazabilidad de todas las especificaciones de los requerimientos y ajustes implementados.
          


    .row.mt-2.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img21.png')})`}"
          )
          .bloque-texto-g__texto3.p-4
            .col-11.col-lg-12
              p La 
                b ingeniería de requisitos 
                | es la fase más importante y de mayor cuidado de la ingeniería de 
                i software, 
                | que define las propiedades y funcionalidades del producto de 
                i software 
                | a desarrollar. Esta incluye los elementos de: práctica de educación, análisis, especificación y validación de los requerimientos del desarrollo de 
                i software. 
                | Una manera de asegurar un trabajo efectivo es que exista un trabajo colaborativo y alta comunicación entre el equipo de ingenieros desarrolladores y los usuarios o clientes del producto.
    
    

      .col-10
        h5.mt-5 Técnicas de modelado

        p La correcta evolución de un proyecto de desarrollo de 
          i software 
          | depende de que la identificación de las tareas de definición y la gestión de los requisitos sean adecuadas. En este sentido, la ingeniería de requisitos es determinante para el desarrollo del 
          i software.



    .row.justify-content-around.align-items-center.mt-5
      .col-9
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-lg-1
              img(src="@/assets/curso/temas/tema1/img22.png" )
            .col-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Técnicas de modelado de las características de ingeniería
                  p.mb-0 Para conocer sobre cada una de estas técnicas, lo invitamos a descargar el documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo1Tecnicasdemodeladodelascaracteristicasdeingenieria.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
