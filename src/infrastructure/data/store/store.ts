import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return { allNews: [], news: {} }
  },
  actions: {
    setAllNews(news: []) {
        news.forEach(element => {
            this.allNews.push(element);
        });
    },

    setNews(news: Record<string, any> /*{ author: string, content: string, description: string, publishedAt: string, source: { id?: number, name?: string }, title: string, url: string, urlToImage?: string }*/) {
        this.news = news;
    },
  },
});