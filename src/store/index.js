import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: "",
    postcode: ""
  },
  mutations: {
    getAddress(state, postcode, address) {
      state.postcode = postcode;
      state.address = address;
    }
  },
  actions: {
    async getAddressAction(context) {
      const payload = {
        address: "",
        postcode: context.state.postcode
      };
      await axios
         .get("https://apis.postcode-jp.com/api/v3/postcodes/allAddress?apikey=UfA7WbUAo40UEi071uGMRp6Dm2i3CXIrUejNrqI ", {
           params: {
             zipcode: payload.postcode
           }
        })
        .then(res => {
          payload.address = res.data.data.allAddress;
        });
      context.commit("getAddress", payload);
    }
  }
});
