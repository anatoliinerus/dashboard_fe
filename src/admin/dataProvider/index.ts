// import crudProvider from 'ra-data-nestjsx-crud';
import crudProvider from './dataProvider';
import {  fetchUtils } from 'react-admin';

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

export default crudProvider('http://localhost:3001/api/v1', httpClient);