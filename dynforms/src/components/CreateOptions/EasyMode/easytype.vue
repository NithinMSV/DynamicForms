<template>
  <div class="easytype mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <el-input
            placeholder="Please Search the form type you want to create!"
            v-model="search"
            size="medium"
            clearable
          >
          </el-input>
          <div class="mt-2">Value: {{ search }}</div>
        </div>
      </div>

      <div class="d-flex flex-row flex-wrap mb-3 justify-content-evenly">
        <div v-for="(type, index) in filteredType" :key="index">
          <div class="p-2">
            <!-- <b-form-group> -->
            <!-- <b-form-radio
                v-model="radioselected"
                name="some-radios"
                :value="type.name"
                v-on:change="set"
              > -->
            <!-- <div
                  class="card text-white bg-dark mb-3"
                  style="max-width: 18rem;"
                >
                  <div class="card-body"> -->
            <!-- {{ type.name }} -->
            <!-- </div>
                </div> -->
            <!-- </b-form-radio> -->
            <!-- </b-form-group> -->

            <!-- Element Radio Design 1 -->
            <!-- <el-radio
              v-model="radioselected"
              :label="type.name"
              v-on:change="set"
              border
              >{{ type.name }}
            </el-radio> -->

            <!-- Element Radio Design 2 -->
            <el-radio-group
              v-model="radioselected"
              fill="darkorange"
              v-on:change="set"
            >
              <el-radio-button :label="type.name"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div>
        {{ radioselected }}
        <div>
          <!-- <b-button variant="primary" @click="set">Change Value</b-button> -->
          Vuex State: {{ get }}
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
      selected: this.radioselected,
    };
  },
  created() {
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
  methods: {},
  computed: {
    filteredType() {
      return this.types.filter((formtype) => {
        return formtype.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    get() {
      return this.$store.state.TypeSelected;
    },
    set(evt) {
      this.$emit("change", evt);
      return this.$store.commit("setType", this.radioselected);
    },
  },
};
</script>

<style lang="scss" scoped>
.easytype {
  position: relative;
}
</style>
