<template>
<div class="w-100">
     <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
</div>
</template>

<script>

export default {
    name: 'Email',
    components: {
    }
}
</script>

<style scoped>

</style>