<template>
  <div class="easymode">
    <!-- <h1>Easy Mode</h1> -->
    <!-- <p>{{steps[incr]}}</p>
        <p>{{incr}}</p> -->
    <div v-if="incr === 0">
      <h1>Choose your form type!</h1>
      <EasyType />
    </div>

    <div v-if="incr === 1">
      <h1>Find your {{ get.toLowerCase() }} templates here!</h1>
      <EasyTemplate />
    </div>
    <div v-if="incr === 2">
      <h1>I'm Fields</h1>
    </div>
    <b-button
      class="mb-2"
      variant="success"
      @click="prev"
      v-show="!incr == 0"
      :disabled="incr <= 0 && isDataExist"
      >
      <b-icon icon="chevron-double-left"></b-icon>
      Back
      </b-button
    >
    <b-button
      class="ml-2 mb-2"
      variant="success"
      @click="next"
      :disabled="incr >= steps.length - 1 || !isDataExist"
      >
      Next
      <b-icon icon="chevron-double-right"></b-icon>
      </b-button>
  </div>
</template>

<script>
import EasyType from "../components/CreateOptions/EasyMode/easytype";
import EasyTemplate from "../components/CreateOptions/EasyMode/easytemplate";

export default {
  name: "EasyMode",
  components: {
    EasyType,
    EasyTemplate,
  },
  data() {
    return {
      search: "",
      types: [],
      radioselected: '',
      incr: 0,
      steps: ["Type", "Template", "Fields"],
      selected: "first",
    };
  },
  methods: {
    prev() {
      return this.incr--;
    },
    next() {
      return this.incr++;
    },
  },
  computed: {
    get() {
      return this.$store.state.TypeSelected;
    },
    isDataExist() {
      return this.$store.state.TypeSelected !== '';
    }
  },
};
</script>

<style lang="scss" scoped>
.easymode {
  position: relative;
}

b-form-group {
  opacity: 0;
}
</style>
