<template>
  <div class="easytemp">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Filters</h5>
              <p class="card-text">
                options
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{  }} Results</h5>
              This is some text within a card body.
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
  computed: {},
};
</script>

<style lang="scss" scoped>
.easytemp {
  position: relative;
}
</style>
