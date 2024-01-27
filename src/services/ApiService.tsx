import axios from 'axios';

const API_BASE_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/assets/`; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const articlesList = async () => {
    try {
        const response = await apiService.get('/articles/articles.json');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const articlesContent = async () => {
    try {
        const response = await apiService.get('/articles/Markdown-Sample.md');
        return response.data;
    } catch (error) {
        throw error;
    }
};