import axios from "axios"
import router from '../router/index'
import Cookies from 'js-cookie'
import { ElMessage } from 'element-plus';
const requests = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000
})

requests.interceptors.request.use(config => {
    var token = Cookies.get("token")
    if (token != undefined) {
        config.headers.Authorization = "token " + token;
    }
    return config
}, err => {
    return Promise.reject(err);
})

axios.interceptors.response.use((success) => {
    if (success.status && success.status == 200) {
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {   //接口请求成功，业务逻辑错误
            ElMessage.error({ message: success.data.message });
            return;
        }
        if (success.data.message) {
            ElMessage.success({ message: success.data.message });
        }
    }
    return success.data;
}, (error) => {
    if (error.response.code == 504 || error.response.code == 404) {
        ElMessage.error({ message: '服务器被吃了( ╯□╰ )' });
    } else if (error.response.code == 403) {
        ElMessage.error({ message: '权限不足，请联系管理员' });
    } else if (error.response.code == 401) {
        ElMessage.error({ message: '请登录账号' });
        router.replace('/');
    } else {
        if (error.response.message) {
            ElMessage.error({ message: error.response.message });
        } else {
            ElMessage.warning({ message: '该错误触及盲区(●ˇ∀ˇ●)' });
        }
    }
    return
});

export default requests;