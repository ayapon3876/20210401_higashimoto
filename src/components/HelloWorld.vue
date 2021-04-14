<template>
  <div>
    <input type="text" v-model="postcode" />
    <button @click="getAddress">住所自動入力</button>
    <p>住所：{{ address }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      postcode: "",
    };
  },
  computed: {
    ...mapState({
      postcode: (state) => state.postcode,
    }),
    address() {
      return this.$store.state.postcode.address;
    }
  },
  methods: {
    getAddress() {
      this.$store.commit("getAddress", this.postcode);
      this.$store.dispatch("getAddressAction");
    }
  }
};
</script>

