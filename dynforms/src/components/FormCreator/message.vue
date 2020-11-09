<template>
    <b-form-textarea
      id="textarea"
      v-model="text"
      :placeholder="placeholder"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
</template>

<script>
export default {
    name: 'messagefield',
    props: ['placeholder'],
    components: {
        
    }
}
</script>