import createStore from 'unistore';
import axios from 'axios';

const apiKey = "31e59cd2d87747ddbfb14d1c08412411";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=31e59cd2d87747ddbfb14d1c08412411";
const urlNews = "https://newsapi.org/v2/everything?q=rampage&apiKey=31e59cd2d87747ddbfb14d1c08412411";

const initialState = {
    apiKey: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    listNews: [],
    blog: []
};

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },

    postLogin: async state => {
        const data = {username: state.username, password: state.password };
        await axios
            .post("https://altaevi.free.beeceptor.com/login", data)
            .then(response => {
                console.log("postLogin resp aaaaaaaaaaaaa", response.data);
                if (response.data.hasOwnProperty("apiKey")) {
                    store.setState({
                        is_login: true,
                        apiKey: response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email
                    })
                }
            })
            .catch(function(error) {
                console.log(error);
        });
    },

    searchNews: async (state, keywords) => {
        // console.log("searchNews", keywords);
        // const self = this;
        if (keywords.length > 2) {
          try {
            const response = await axios.get(
              baseUrl + "everything?q=" + keywords + "&apiKey=" + apiKey
            );
            console.log(response);
            store.setState({ blog : response.data.articles })
          } catch (error) {
            console.error(error);
          }
        }
      },

    listNews5: async state => {
        await axios
        .get(urlHeadline).then(function(response){
            store.setState({listNews : response.data.articles});
        }).catch(function(error){
            console.log(error);
        })},

    blog5: async state => {
        await axios
        .get(urlNews).then(function(response){
            store.setState({blog : response.data.articles});
            console.log('response data', response.data.articles);
        }).catch(function(error){
            console.log(error);
        })}
    

})