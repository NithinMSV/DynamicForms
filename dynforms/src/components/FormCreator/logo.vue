<template>
<div class="container logo">
    <h3>Upload the form logo here!</h3>
  <div class="row">
      <div class="col">
    <!-- Styled -->
    <b-form-group
    description="Upload an jpg, png file max size of 5mb." >
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    </b-form-group>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        file1: null,
        file2: null
      }
    }
  }
</script>

<style lang="scss" scoped>
.logo {
    position: relative;

    h3 {
        color: white;
    }
}
</style>