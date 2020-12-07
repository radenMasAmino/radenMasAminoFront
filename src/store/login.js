import axios from 'axios';
import { ipBackend } from '@/config';

export default  {
    namespaced: true,
    state: () => ({ 
        token: '',
        pesan : '',
        proses: false
     }),
  
    mutations: { 
        rubahToken (state, data) {
            // `state` is the local module state
            localStorage.setItem('token', data)
            state.token = data;
       
        },
        rubahPesan (state, data) {
          // `state` is the local module state
      
          state.pesan = data;
        },
        rubahProses (state, data) {
          // `state` is the local module state
      
          state.proses = data;
        }
     },

    actions: { 
        actLogin ({  commit }, dataLogin){
            commit('rubahProses', true)
            axios.post(ipBackend + '/users/login', {
                 username: dataLogin.email,
                 password: dataLogin.password
              })
              
              .then(function (response) {
                commit('rubahProses', false)
                commit('rubahToken', response.data.token)
                commit('rubahPesan', response.data.message)
              })
              .catch(function (error) {
                console.log(error);
                commit('rubahProses', false)
                commit('rubahToken', '')
              })
        },
        actLogout({commit}){
            commit('rubahToken', '')
        }
     },
    getters: { 
        cekLogin (state) {
            (localStorage.getItem('token'))?state.token = localStorage.getItem('token'): state.token=''
            return state.token;
        }
     }
  }

