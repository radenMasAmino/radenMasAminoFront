import axios from "axios";
import { ipBackend } from '@/config.js';

export default {
    namespaced: true,
    state: () => ({
        stateGetApi: '',
    }),

    mutations: {
        muttDepresiApi(state, data){
            state.stateGetApi = data
        }
    },

    actions: {
        actGetApi({ commit }) {
            axios
                .get(
                    ipBackend + "/depresi/all",
                    {
                        headers: {
                            accesstoken: localStorage.getItem("token"),
                        },
                    }
                )
                .then(function (response) {
                    // commit('muttGetApi', response)
                    commit('muttDepresiApi', response)

                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}