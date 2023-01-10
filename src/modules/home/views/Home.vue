<template>
    <div class="news-platform-home" data-cy="news-platform-home">
        <header class="news-platform-main-header">
            <Logo />
        </header>
        <main class="news-platform-main row">
            <NewsCard :news="item" v-for="item in news" :key="item.title"></NewsCard>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import NewsCard from '../../../components/NewsCard.vue';
import Logo from '../../../components/Logo.vue';
import NewsRepository from '../../../infrastructure/data/repositories/NewsRepository';
import { useStore } from '../../../infrastructure/data/store/store'

export default defineComponent({
    components: {
        NewsCard,
        Logo
    },
    setup() {
        const newsRepository = new NewsRepository();
        const news = ref();
        const store = useStore()
        

        onMounted(async () => {
            news.value = await newsRepository.getNews();
            news.value = news.value.data.articles
            store.setAllNews(news.value);
        })

        return {
            news,
        }
    },
})
</script>

<style lang="scss" scoped>
.news-platform-home {
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
}

.news-platform-main-header {
    width: 100%;
    height: 8vh;
    padding: 1rem;
    background: linear-gradient(.25turn, red, rgb(240, 51, 51));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

}

.news-platform-main {
    width: 80%;
    padding: 1rem;
    margin: auto;
}

@media (min-width: 700px) {
    .news-platform-main {
        width: 90%;
    }
}
</style>
