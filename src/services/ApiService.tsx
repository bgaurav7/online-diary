import axios from 'axios';

import { ArticleInfo } from '../models/ArticleInfo';

const API_BASE_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/assets/`; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const articlesInfoList = async () => {
    try {
        const response = await apiService.get('/articles/articles.json');
        const list: ArticleInfo[] = response.data;

        return list;
    } catch (error) {
        throw error;
    }
};

export const articlesContent = async (link: string) => {
    if(link.length < 1) return "# Loading...";
    try {
        const response = await apiService.get(link);
        return response.data;
    } catch (error) {
        throw error;
    }
};