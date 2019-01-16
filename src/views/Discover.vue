<style scoped>
  .discover, .columns {
    height: 100%;
  }

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .k-card {
    width: 75%;
    height: 75%;
    transition: transform 300ms ease-in-out;
    position: relative;
    cursor: pointer;
  }

  .k-card:hover {
    transform: scale(1.1);
  }

  .k-card-image {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(100%);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
    transition: filter 300ms ease-in-out, box-shadow 300ms ease-in-out;
  }

  .k-card-image:hover {
    filter: grayscale(0%);
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
  }
  
  .k-card-label {
    position: absolute;
    bottom: -10px;
    right: -10px;
  }
  .search {
    height: 57px;
  }
</style>

<template>
  <div class="discover">
    <div class="search">
      Search
    </div>

    <div class="columns is-multiline">
      <div class="column is-4" v-for="card in enrichedCards">
        <div class="k-card" @click="goToAnimal(card.slug)">
          <div class="k-card-image" :style="card.style"></div>
          <div class="k-card-label">
        <span class="tag is-dark is-large">
          {{ card.name }}
        </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from '@sindresorhus/slugify';

export default {
  name: 'Discover',
  created() {
    this.cards = [
      {
        name: 'Tiger Shark',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tiger_shark.jpg/1200px-Tiger_shark.jpg'
      },
      {
        name: 'Raccoon',
        image: 'https://images.unsplash.com/photo-1524246009948-6dddf3f8fc23'
      },
      {
        name: 'Whale',
        image: 'https://images.unsplash.com/photo-1454991727061-be514eae86f7'
      },
      {
        name: 'Honey Bee',
        image: 'https://timedotcom.files.wordpress.com/2017/10/honey-bees-insecticide.jpg'
      },
      {
        name: 'Säbelschnäbler',
        image: 'https://en.zopix.net/image_upload/214161-tiere-saebelschnaebler-watvoegel-nordsee.jpg'
      },
      {
        name: 'Sea Angel',
        image: 'https://external-preview.redd.it/KbaEgZN451GG9u0qgJwpOwMYo_EM7Ir5Uwy9tQsSCBs.jpg?auto=webp&s=379e945e4d8e970491b6916116f303fe00e1ef4b'
      }
    ];
  },
  computed: {
    enrichedCards() {
      return this.cards.map(card => ({
        ...card,
        slug: slugify(card.name),
        style: {
          backgroundImage: `url('${card.image}')`
        }
      }));
    }
  },
  methods: {
    goToAnimal(slug) {
      this.$router.push(`/${slug}`);
    }
  }
};
</script>
