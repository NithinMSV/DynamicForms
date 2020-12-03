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
        <h3>{{file.text}}</h3>
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    </div>
    <div class="col-sm">
    <b-button id="show-btn" class="mt-2" variant="primary" @click="$bvModal.show('file-properties')">Set Properties</b-button>

  <b-modal id="file-properties" hide-footer>
    <template #modal-title>
      File Properties
    </template>
    <div class="d-block text-center">
       <b-form-checkbox
          id="checkbox-required"
          v-model="requiredstatus"
          name="checkbox-required"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Check this to make this field required.
        </b-form-checkbox>

        <div>
          State: <strong>{{ status }}</strong>
        </div>
      <div>
          <b-form-group 
          label="Enter the file text" >
          <b-form-input
            v-model="file.text"
            placeholder="Enter the file text"
            :disabled="!isFileEditing"
            :class="{ phview: !isFileEditing }"
          ></b-form-input>
          </b-form-group>
          <div class="mt-2">Label Value entered: {{ file.text }}</div>
        </div>
        <b-button
          variant="outline-primary"
          class="mb-2"
          @click="isFileEditing = !isFileEditing"
          v-if="!isFileEditing"
        >
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button
        >
        <b-button
          @click="fileSave"
          variant="outline-primary"
          class="mb-2"
          v-else-if="isFileEditing"
        >
          <b-icon icon="check2-square" aria-hidden="true"></b-icon>
          Save</b-button
        >
        <b-button
          class="mr-auto mb-2"
          @click="fileCancel"
          variant="outline-warning"
          v-if="isFileEditing"
        >
          <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
          Cancel</b-button
        >
      </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('file-properties')">Close</b-button>
  </b-modal>
</div>
</div>
</div>
</template>

<script>
  export default {
      name: 'file',
    data() {
      return {
        file: {
          text: 'Edit to rename me!'
        },
        file1: null,
        file2: null,
        isFileEditing: false,
        requiredstatus: 'not_accepted'
      };
    },
    mounted() {
    this.cachedFile = Object.assign({}, this.file);
  },
  methods: {
    fileSave() {
      this.cachedFile = Object.assign({}, this.file);
      this.isFileEditing = false;
    },
    fileCancel() {
      this.file = Object.assign({}, this.cachedFile);
      this.isFileEditing = false;
    },
  },
  }
</script>

<style lang="scss" scoped>
.phview {
  border-color: transparent;
  background-color: initial;
  color: initial
}

h3 {
  color: white;
}
</style>