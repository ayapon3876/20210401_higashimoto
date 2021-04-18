<template>
  <div>
    <input type="text" v-model="postcode" />
    <button @click="getAddress">住所自動入力</button>
    <p>住所: {{ address }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      postcode: "",
      address: "",
    };
  },
  methods: {
    async getAddress() {
      const test = await axios.get(
        `https://apis.postcode-jp.com/api/v3/postcodes/${this.postcode}?apikey=UfA7WbUAo40UEi071uGMRp6Dm2i3CXIrUejNrqI`
      );
      console.log(test.data["allAddress"]);
      this.address = test.data["allAddress"];
    },
  },
};
</script>