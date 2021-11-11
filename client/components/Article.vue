<template>
  <div class="pt-28 sm:20 md:pt-64px max-w-1800px h-auto">
    <div class="mx-24px md:mx-64px">
      <div v-for="(article, index) in articles"  :key="index" class="flex overflow-x-hidden py-10" >
        <div class="">
          <img class="w-full h-auto sm:w-1/2" :class="[ numIsEven(index) ? 'float-right' : 'float-left']" :src="article.url" alt="">
          <div class="">
            <h2>{{ article.title }}</h2>
            <p class="block text-justify">{{ article.paragraph}} </p>
          </div>
        </div>
      </div>
      <!-- <h2 class="my-24px">Lorem Ipsum Dolor Foro</h2>
      <div class="floats flex-col md:flex-row">
        <img class="w-full sm:w-1/2 h-auto" src="/funerals/funeral-3-600x900px.jpg" alt="">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur, optio ab illo libero molestiae eaque voluptatum fugiat repellendus temporibus, mollitia in fuga eveniet veritatis, quas saepe voluptates porro vitae.</p>
        <img class="even:float-right odd:float-left w-1/2 h-auto" src="/funerals/funeral-3-600x900px.jpg" alt="">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur, optio ab illo libero molestiae eaque voluptatum fugiat repellendus temporibus, mollitia in fuga eveniet veritatis, quas saepe voluptates porro vitae.</p>
      </div>
      <div class="floats flex-col md:flex-row">
      </div>
      <div class="floats flex-col md:flex-row">
        <img class="even:float-right odd:float-left w-1/2 h-auto" src="/funerals/funeral-3-600x900px.jpg" alt="">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur, optio ab illo libero molestiae eaque voluptatum fugiat repellendus temporibus, mollitia in fuga eveniet veritatis, quas saepe voluptates porro vitae.</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",

  data: () => ({
    articles: [
      {
        category: 'wedding',
        title: 'LOrem Ipsum Dolor',
        url: '/weddings/wedding-1-600x750px.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecatim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        category: 'funeral',
        title: 'LOrem Ipsum Dolor',
        url: '/weddings/wedding-1-600x750px.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex itaque obcaecatim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        category: 'occasion',
        title: 'LOrem Ipsum Dolor',
        url: '/weddings/wedding-1-600x750px.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecatim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      }
    ]
  }),
  methods: {
    numIsEven(index) {
      if(index % 2 === 0 ) {
        return true;
      } else {
        return false;
      }
    }
  },

}
</script>

<style>

</style>
