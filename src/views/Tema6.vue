<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondot6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Derechos de autor  

    p Teniendo en cuenta que los datos dentro de una organización presentan información valiosa y confidencial y son almacenadas en las bases de datos, estas deben ser protegidas. Los derechos de autor protegen las obras que se consideran creativas. Al escribir un libro, pintar un cuadro, componer una canción o esculpir una estatua, la persona creadora está inmediatamente protegida por derechos de autor. Sin embargo, al compilar una lista de datos o crear una base de datos, el trabajo creativo no se da por sentado. En ese sentido, es prudente tomar medidas para aumentar la probabilidad de que los datos de la lista o base estén protegidos por derechos de autor.
    
    .row.justify-content-center.mb-4
      .col-lg-10.sm-8
        .cajon.color-primario.colorcajontema2.p-4
            p La protección de los derechos de autor otorga al creador o la creadora de una obra creativa el derecho exclusivo de producirla, copiarla, venderla o utilizarla. Todos los demás que deseen hacer uso de material protegido por derechos de autor están legalmente obligados a obtener el permiso del titular de los derechos.

    p.mt-5 Teniendo en cuenta lo mencionado anteriormente, entonces, la protección de la propiedad intelectual se da a las creaciones resultantes del intelecto humano y comprende tanto la propiedad industrial como los derechos de autor.    
    p.mt-4 La propiedad industrial protege las creaciones como los inventos, los modelos de utilidad, los diseños industriales, los signos distintivos, entre otros, debidamente registrados ante la autoridad nacional que en Colombia se denomina la Superintendencia de Industria y Comercio (SIC).

    .col-lg-11
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--vereee")
        .row(titulo="¿Los datos tienen derechos de autor?")
          
          .col-md-6.mb-4.mb-md-0
            p.ms-5 La ley de derechos de autor no se aplica a hechos, datos o ideas. En ningún caso, la protección de los derechos de autor de una obra original de autoría se extiende a una idea, un procedimiento, un proceso, un sistema, un método de operación, un concepto, un principio o un descubrimiento, independientemente de la forma en que se describa, explique, ilustre o incorpore dentro de un trabajo. Sin embargo, los derechos de autor pueden proteger una colección de datos contenida en una base o compilación, pero solo si cumple con ciertos requisitos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img7.png', alt='Texto que describa la imagen')
              

        .row(titulo="Conceptos básicos de derechos de autor y gestión de datos")
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Para que una base de datos sea protegida por derechos de autor, la persona que la construye debe tomar decisiones sobre la selección, coordinación o disposición de los hechos o datos; estas decisiones deben ser al menos un poco creativas. Es importante recordar que incluso si una base de datos o compilación se organiza con suficiente originalidad para que se considere sujeta a protección de derechos de autor, los hechos y datos dentro de esta continúan siendo de dominio público. Cualquiera puede tomar esos datos, reutilizarlos o volver a publicarlos, siempre que estos se organicen de una manera nueva. Esto aplica en cualquier situación, salvo cuando los datos son accesibles únicamente en virtud de un contrato que condiciona el acceso a estos y limita la forma como se pueden utilizar.  
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img8.png', alt='Texto que describa la imagen')

        .row(titulo="Licencias")
          .col-md-6.mb-4.mb-md-0
            p.ms-5.mt-2 Creative Commons (CC) también tiene una biblioteca de licencias estandarizadas y algunas de ellas se pueden aplicar a datos y bases de datos. La licencia ODC-By, por ejemplo, es el equivalente a una licencia Creative Commons Attribution (CC BY). Las licencias CC BY, sin embargo, se basan en la propiedad de los derechos de autor del trabajo subyacente, mientras que la licencia ODC-By puede aplicarse a trabajos que no están protegidos por derechos de autor, como los datos fácticos.
            p.ms-5.mt-2 Las licencias CC brindan a todos, desde creadores individuales hasta grandes instituciones, una forma estandarizada de otorgar al público permiso para usar su trabajo creativo bajo la ley de derechos de autor. Desde la perspectiva de quien reutiliza datos, la presencia de una licencia Creative Commons en una obra protegida por derechos de autor responde a la pregunta de qué hacer con la obra.
            p.ms-5.mt-2 Las dos licencias CC de mayor relevancia para la gestión de datos son: CC0 y PDM. Ambas se definen a continuación.
          
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img9.png', alt='Texto que describa la imagen')


        .row(titulo="CC0")
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Cuando un propietario desea renunciar a sus derechos de autor o derechos de base de datos, se puede utilizar la marca CC0, que coloca de manera efectiva la base de datos y los datos en el dominio público. Esta marca es la equivalente funcional de una licencia ODC PDDL.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img10.png', alt='Texto que describa la imagen')



        .row(titulo="Marca de dominio público (PDM, por su nombre en inglés)")
          .col-md-6.mb-4.mb-md-0
            p.ms-5 Se utiliza para marcar obras que son de dominio público y para las cuales no existen restricciones conocidas de derechos de autor o de base de datos. Los datos fácticos en una base de datos, por ejemplo, pueden marcarse como PDM para dejar claro que su uso es gratuito.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/img11.png', alt='Texto que describa la imagen')
    .col-lg-13
      p.ms-5.mb-5 ¡Felicitaciones! Ha llegado al final. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.

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
