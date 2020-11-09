<template>
  <div>
    <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
  </div>
</template>

<script>
  export default {
      name: 'rating',
    data() {
      return {
        value: 3
      }
    }
  }
</script>