<template>
<div class="wrapper">
    <div class="w-100">
        <b-form-input v-model="save.asklabel" placeholder="ask a question?" :disabled="!isEditing"
           :class="{view: !isEditing}"></b-form-input>
        <b-button variant="outline-primary" class="mb-2" @click="isEditing = !isEditing" v-if="!isEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="labelSave" variant="outline-primary" class="mb-2" v-else-if="isEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="labelCancel" variant="outline-warning" v-if="isEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Question Entered: {{ save.asklabel }}</div>
        <Message placeholder="Answer Area" />
    </div>
</div>
</template>

<script>

import Message from './message'

export default {
    name: 'askquestions',
    components: {
        Message
    },
    data() {
        return{
          isEditing: false,
          selected: '',
          save: {
            asklabel: ''
          },
          text: ''
      }
    },
    mounted() {
    this.cachedLabel = Object.assign({},this.save);
    },
  methods: {
    labelSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isEditing = false;
    },
    labelCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isEditing = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>