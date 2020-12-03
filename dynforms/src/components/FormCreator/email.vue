<template>
<div class="container">
    <div class="row">
      <div class="col-sm">
        <div id="tooltip-target-1" v-if="requiredstatus === 'accepted'">
      <p class="h3 mb-2"><b-icon icon="exclamation-circle-fill" animation="cylon" variant="danger"></b-icon></p>
    <b-tooltip target="tooltip-target-1" triggers="hover">
        You have chosen this field as mandatory
      </b-tooltip>
    </div>
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
      <b-button id="show-btn" class="mt-2" variant="primary" @click="$bvModal.show('bv-modal-example')">Set Properties</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Email Properties
    </template>
    <div class="d-block text-center">
      <b-form-checkbox
      id="email-required-checkbox"
      v-model="requiredstatus"
      name="email-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
      <div>
      <b-form-group label="Enter the Label name">
      <b-form-input v-model="email.emailplaceholder" placeholder="Enter email placeholder" 
      :disabled="!isPlaceHolderEditing"
      :class="{view: !isPlaceHolderEditing}"></b-form-input>
      </b-form-group>
    <div class="mt-2">Enetered Placeholder Value: {{ email.emailplaceholder }}</div>
    </div>
    <b-button variant="outline-primary" class="mb-2" @click="isPlaceHolderEditing = !isPlaceHolderEditing" v-if="!isPlaceHolderEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="emailPlaceHolderSave" variant="outline-primary" class="mb-2" v-else-if="isPlaceHolderEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="emailPlaceHolderCancel" variant="outline-warning" v-if="isPlaceHolderEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
      </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
  </b-modal>
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
          emailplaceholder: 'Edit to rename me!'
        },
        isPlaceHolderEditing: false,
        placeholder: 'Edit to rename me!',
        emailtext:'Edit to rename me!',
        requiredstatus: 'not_accepted'
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