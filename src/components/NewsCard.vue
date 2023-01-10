<template>
    <div class="news-platform-card col-12 col-sm-5 col-md-4 col-lg-4 col-xl-3">
        <div class="image-area">
            <img :src="news.urlToImage" alt="" />
        </div>
        <h2>{{ news.title.slice(0, 35) }}</h2>
        <p>{{ news.description.slice(0, 150)  }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../infrastructure/data/store/store';

export default defineComponent({
    props: {
        news: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const router = useRouter();
        const store = useStore();

        return {
            router,
            store,
        };
    },
});
</script>

<style lang="scss" scoped>
.news-platform-card{
    width: 100%;
    height: 50vh;
    margin: 1rem auto;
    border-radius: 8px;
    box-shadow: 1px 1px 2px 1px rgb(172, 172, 172);
    img, .image-area, p {
        width: 100%;
    }

    .image-area {
        background-color: transparent;
        height: 40%;
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

.background-modal {
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .news-post {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
}

@media (min-width: 500px) {
    .news-platform-card{
        height: 60vh;
    }
}

@media (min-width: 600px) {
    .news-platform-card{
        width: 65%;
        height: 60vh;
        margin: 1rem;
        .image-area {
            height: 40%;
        }
    }
}

@media (min-width: 750px) {
    .news-platform-card{
        width: 45%;
        height: 600px;
        .image-area {
            height: 35%;
        }
    }
}

@media (min-width: 800px) {
    .news-platform-card{
        width: 45%;
        height: 450px;
        .image-area {
            height: 45%;
        }
    }
}

@media (min-width: 900px) {
    .news-platform-card{
        width: 29%;
        .image-area {
            height: 40%;
        }
    }
}

@media (min-width: 1200px) {
    .news-platform-card{
        .image-area {
            height: 55%;
        }
    }
}

@media (min-width: 1500px) {
    .news-platform-card{
        width: 22%;
        .image-area {
            height: 45%;
        }
    }
}

@media (min-width: 1700px) {
    .news-platform-card{
        height: 500px;
        .image-area {
            height: 50%;
        }
    }
}

@media (min-width: 2000px) {
    .news-platform-card{
        height: 600px;
        .image-area {
            height: 50%;
        }
    }
}
</style>
