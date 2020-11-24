<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h3>Check Box Layout</h3>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ checkbox.text }}
        </b-form-checkbox>

        <div>
          State: <strong>{{ status }}</strong>
        </div>
      </div>
      <div class="col-sm">
        <h3>Properties</h3>
        <div>
          <b-form-input
            v-model="checkbox.text"
            placeholder="Enter the checkbox text"
            :disabled="!isCheckBoxEditing"
            :class="{ phview: !isCheckBoxEditing }"
          ></b-form-input>
          <div class="mt-2">Value: {{ checkbox.text }}</div>
        </div>
        <b-button
          variant="outline-primary"
          class="mb-2"
          @click="isCheckBoxEditing = !isCheckBoxEditing"
          v-if="!isCheckBoxEditing"
        >
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button
        >
        <b-button
          @click="CheckBoxSave"
          variant="outline-primary"
          class="mb-2"
          v-else-if="isCheckBoxEditing"
        >
          <b-icon icon="check2-square" aria-hidden="true"></b-icon>
          Save</b-button
        >
        <b-button
          class="mr-auto mb-2"
          @click="CheckBoxCancel"
          variant="outline-warning"
          v-if="isCheckBoxEditing"
        >
          <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
          Cancel</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  data() {
    return {
      checkbox: {
        text: 'Edit to rename me!',
      },
      status: "not_accepted",
      isCheckBoxEditing: false,
    };
  },
  mounted() {
    this.cachedCheckBox = Object.assign({}, this.checkbox);
  },
  methods: {
    CheckBoxSave() {
      this.cachedCheckBox = Object.assign({}, this.checkbox);
      this.isCheckBoxEditing = false;
    },
    CheckBoxCancel() {
      this.checkbox = Object.assign({}, this.cachedCheckBox);
      this.isCheckBoxEditing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: white;
}
</style>