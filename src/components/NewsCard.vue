<template>
    <div class="news-platform-card col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" @click="() => router.push('/news')">
        <img :src="news.urlToImage" alt="" v-if="news.urlToImage !== null"/>
        <div class="image-area" v-else> </div>
        <h2>{{ news.title }}</h2>
        <p>{{ news.description  }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    props: {
        news: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const router = useRouter();
        return {
            router
        }
    }
});
</script>

<style lang="scss" scoped>
.news-platform-card{
    width: 100%;
    height: 80vh;
    margin: auto;
    border-radius: 8px;
    box-shadow: 1px 1px 2px 1px rgb(172, 172, 172);
    img, .image-area, p {
        width: 100%;
    }

    .image-area {
        background-color: gray;
        height: 25vh;
    }
    img, .image-area {
        display: block;
        margin: 0 auto;
    }

    &, h2, p {
        padding:  1rem;
    }

    h2 {
        font-size: 1rem;
    }

    p {
        font-size: 0.8rem;
        text-align: justify;
    }
}

@media (min-width: 700px) {
    .news-platform-card{
        width: 45%;
        height: 45vh;
        margin: 1rem;
    }
}

@media (min-width: 1000px) {
    .news-platform-card{
        width: 30%;
        height: 70vh;
        margin: 1rem;
    }
}

@media (min-width: 1300px) {
    .news-platform-card{
        height: 80vh;
        margin: 1rem;
    }
}

@media (min-width: 1300px) {
    .news-platform-card{
        width: 22%;
        height: 60vh;
    }
}
</style>
