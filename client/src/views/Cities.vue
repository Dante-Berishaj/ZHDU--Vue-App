<template>
  <div class = "cities">
<h1>Cities</h1>
  <City 
    v-for="c in cityList"
    v-bind:key="c.id"
    v-bind:city="c"
  />
</div>
</template>
<script>

import City from '../components/City.vue';

export default {
  name: "Cities",
  components: { City },
  data() {
    return {
      cityList: [
        { 
          id: 1, 
          name: "Prishtina",
          // img: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/30/17/prishtina-overview.jpg?width=990&auto=webp&quality=75&crop=982:726,smart`
          img: "https://wallpaperaccess.com/full/1595904.jpg"
        },
        { 
          id: 2, 
          name: "Ferizaj",
          // img: `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/7c/44/54/getlstd-property-photo.jpg?w=900&h=-1&s=1`
          img: "https://wallpaperaccess.com/full/1595904.jpg"
        },
        { 
          id: 3, 
          name: "Gjylekreshte",
          // img: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/30/17/prishtina-overview.jpg?width=990&auto=webp&quality=75&crop=982:726,smart`
          img: "https://wallpaperaccess.com/full/1595904.jpg"
        },
        { 
          id: 4, 
          name: "Muqiverce",
          // img: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/30/17/prishtina-overview.jpg?width=990&auto=webp&quality=75&crop=982:726,smart`
          img: "https://wallpaperaccess.com/full/1595904.jpg"
        },
      ],
    };
  }
}
</script>
