<template>
<div class="container">
    <div class="row">
      <div class="col-sm">
        <h3>Email Layout</h3>
     <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="emailtext"
          type="email"
          required
          :placeholder="email.emailplaceholder"
        ></b-form-input>
      </b-form-group>
      <div class="mt-2">Entered Email: {{ emailtext }}</div>
      </div>
      <div class="col-sm">
        <h3>Properties</h3>
        <div>
      <b-form-input v-model="email.emailplaceholder" placeholder="Enter email placeholder" 
      :disabled="!isPlaceHolderEditing"
      :class="{view: !isPlaceHolderEditing}"></b-form-input>
    <div class="mt-2">Enetered Placeholder Value: {{ email.emailplaceholder }}</div>
    </div>
    <b-button variant="outline-primary" class="mb-2" @click="isPlaceHolderEditing = !isPlaceHolderEditing" v-if="!isPlaceHolderEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="emailPlaceHolderSave" variant="outline-primary" class="mb-2" v-else-if="isPlaceHolderEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="emailPlaceHolderCancel" variant="outline-warning" v-if="isPlaceHolderEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
      </div>
</div>
</div>
</template>

<script>

export default {
    name: 'Email',
    components: {
    },
    data() {
      return {
         email: {
          emailplaceholder: ''
        },
        isPlaceHolderEditing: false,
        placeholder: '',
        emailtext:''
      }
    },
     mounted() {
    this.cachedPlaceholder = Object.assign({},this.email);
  },
  methods: {
    emailPlaceHolderSave() {
      this.cachedPlaceholder = Object.assign({}, this.email);
      this.isPlaceHolderEditing = false;
    },
    emailPlaceHolderCancel() {
      this.email = Object.assign({}, this.cachedPlaceholder);
      this.isPlaceHolderEditing = false;
    }
  }
}
</script>

<style scoped>
h3 {
  color: white;
}
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>