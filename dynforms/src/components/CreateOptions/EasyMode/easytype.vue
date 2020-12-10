<template>
  <div class="easytype">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <b-form-input
            v-model="search"
            placeholder="Which type of form you want to create?"
          ></b-form-input>
          <div class="mt-2">Value: {{ search }}</div>
        </div>
        <div class="col-4">
          <b-button variant="outline-primary">Search</b-button>
        </div>
      </div>
      <div class="d-flex flex-row flex-wrap mb-3">
        <div v-for="(type, index) in filteredType" :key="index">
          <div class="p-2">
            <b-form-group>
              <b-form-radio
                v-model="radioselected"
                name="some-radios"
                :value="type.name"
              >
                <div
                  class="card text-white bg-dark mb-3"
                  style="max-width: 18rem;"
                >
                  <div class="card-body">
                    {{ type.name }}
                  </div>
                </div>
              </b-form-radio>
            </b-form-group>
          </div>
        </div>
      </div>
      <div>
        {{ radioselected }}
        <div>
          <button @click="changed">Change Value</button>
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "easytype",
  components: {},
  data() {
    return {
      search: "",
      radioselected: "",
      types: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:2022/formtype")
      .then((response) => {
        console.log(response.data);
        this.types = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    changed() {
      this.$store.commit("change", this.radioselected);
    },
  },
  computed: {
    filteredType() {
      return this.types.filter((formtype) => {
        return formtype.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    message() {
      return this.$store.getters.TypeSelected;
    },
  },
};
</script>

<style lang="scss" scoped>
.easytype {
  position: relative;
}
</style>
