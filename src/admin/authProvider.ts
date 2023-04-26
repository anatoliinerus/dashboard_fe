import { AuthProvider } from 'react-admin';
import axios from "axios";

const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const { data } = await axios.post('http://localhost:3001/api/v1/auth/login',{
            email: username,
            password: password,
        });
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('permissions', data.user.role);
        // accept all username/password combinations
        return Promise.resolve();
    },
    logout: async () => {
        await axios.post('http://localhost:3001/api/v1/auth/logout');
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
        const role = localStorage.getItem('permissions');

        return role ? Promise.resolve(role) : Promise.reject();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'Sir Shrek',
            avatar: 'https://i.insider.com/60817ec5354dde0018c06960?width=700'
        }),
};

export default authProvider;