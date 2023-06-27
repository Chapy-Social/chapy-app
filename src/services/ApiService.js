// Import Axios and the useRouter hook from Next.js
import axios from "axios";
export class ApiService {
  // baseURL = process.env.REACT_APP_API_URL;
  baseURL = 'https://api.chapysocial.com';
  // baseURL = 'https://api.chapysocial.com';
  
  constructor() {
    this.instance = axios.create({
      baseURL: `${this.baseURL}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  handleRequest = (config) => {
    return config;
  };

  initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response) => {
      return response;
    }, this.handleError);
  };

  handleError = async (error) => {
    return Promise.reject(error);
  };
}
