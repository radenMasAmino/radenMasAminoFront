import axios from 'axios';
import { ipBackend } from '../config';

export default {
    namespaced: true,
    state: () => ({
        dataPertanyaan: '',
    }),

    mutations: {
        changeData(state, data) {
            // console.log(data);
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
            .then(res => {
                console.log('.....ini vuex dispatch created......');
                commit('changeData', res)
            })
            .catch(err => {
                console.log(err);
            })
        },
        
    },
}