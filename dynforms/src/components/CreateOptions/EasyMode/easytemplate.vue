<template>
  <div class="easytemp">
    <div class="container">
      <div class="row">
        <div class="col">
          Filters
        </div>
        <div class="col">
          Sort
        </div>
        <div class="col">
          Popularity
        </div>
      </div>
      <div class="row d-flex flex-row flex-wrap mb-3 justify-content-evenly">
        <div v-for="(template, index) in templates" :key="index.id">
          <div class="card" style="width: 18rem;">
            <img src="/d" class="card-img-top" alt="aaa" />
            <div class="card-body">
              <h5 class="card-title">{{ template.name }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <b-button
                name="single"
                :pressed.sync="template.state"
                variant="outline-primary"
                >Select template</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "easytemp",
  components: {},
  data() {
    return {
      selectedTemplate: "",
      templates: [
        {
          id: 1,
          name: "one",
          state: false,
        },
        {
          id: 2,
          name: "two",
          state: false,
        },
        {
          id: 3,
          name: "three",
          state: false,
        },
        {
          id: 4,
          name: "four",
          state: false,
        },
        {
          id: 5,
          name: "five",
          state: false,
        },
        {
          id: 6,
          name: "six",
          state: false,
        },
      ],
    };
  },
  mounted: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.easytemp {
  position: relative;
}
</style>
