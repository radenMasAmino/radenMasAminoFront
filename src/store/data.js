import axios from 'axios';
import { ipBackend } from '../config';

export default {
    namespaced: true,
    state: () => ({
        dataPertanyaan: '',
    }),

    mutations: {
        changeData(state, data) {
            state.dataPertanyaan = data
        },
    },

    actions: {
        listPertanyaan({ commit}) {
            axios.get(ipBackend + '/kecemasan/all', {
                headers: {
                    'accessToken': localStorage.getItem('token')
                }
            })
            .then( (response) => {
                console.log('.....ini vuex dispatch created......');
                commit('changeData', response)
            })
            .catch( (error) => {
                console.log(error);
            })
        },
        
    },
}