import { AxiosInstance } from "axios";
import api from "../../integrations/external/Api";

export default class NewsRepository {
    
    private api?: AxiosInstance;

    constructor() {
        this.api = api;
    }

    public async getNews() {
        const result = await this.api!.get('/everything?q=a&from=2022-12-10&sortBy=publishedAt&apiKey=bb0aba7916b54508a865f8e4b3e954ed');
        return result;
    }

    public async searchNews(search: string) {
        const result = await this.api!.get(`/everything?q=${search}from=2022-12-10&sortBy=publishedAt&apiKey=bb0aba7916b54508a865f8e4b3e954ed`);
        return result;
    }
}