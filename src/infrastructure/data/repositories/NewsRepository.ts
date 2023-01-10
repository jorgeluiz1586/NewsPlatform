import { AxiosInstance } from "axios";
import api from "../../integrations/external/Api";

export default class NewsRepository {
    
    private api?: AxiosInstance;

    constructor() {
        this.api = api;
    }

    public async getnews() {
        const result = await this.api!.get('/everything?q=tesla&from=2022-12-10&sortBy=publishedAt&apiKey=bb0aba7916b54508a865f8e4b3e954ed');
        return result;
    }
}