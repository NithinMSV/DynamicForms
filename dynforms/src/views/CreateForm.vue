<template>
  <div class="formcreator">
    <div class="nav"></div>
    <div class="component-stack">
      <div class="comp-head">
        <h3>Component Stack - Widgets</h3>
        <div class="widgets select">
        <div class="container">
        <div class="row">
        <div class="col-sm">
        <div class="input-group mb-3">
          <select class="custom-select" id="inputGroupSelect01" v-model="selected">
            <option selected>Choose...</option>
            <option v-for="(widget, index) in widgets" :key="index">{{widget.name}}</option>
          </select>
        </div>
        </div>
          <div class="col-sm">
          <b-button v-on:click="result(selected)" variant="outline-primary">Add Widget</b-button>
          </div>
        </div>
      </div>
    </div>
      </div>
    <div class="formarea">
      <h3>Component Creator</h3>
      <div class="drop">
        <div v-for="(select,index) in selections" v-bind:key="index">
            {{select.value}}
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-4">
        <div v-if="select.value === 'First Name'">
        <textfield placeholder="Enter First Name" v-model="fn"/>
        </div>
        <div v-if="select.value === 'Last Name'">
        <textfield placeholder="Enter Last Name" v-model="fn"/>
        </div>
        <div v-if="select.value === 'Email Address'">
        <email />
        </div>
        <div v-if="select.value === 'Message'">
        <messagefield />
        </div>
        <div v-if="select.value === 'Button'">
        <btn btnname="Submit"/>
        </div>
        </div>
        <div class="col-4">
        <b-button variant="outline-danger" class="mb-2" @click="removeSelection(select)">
          <b-icon icon="trash" aria-hidden="true"></b-icon>
        </b-button>
        </div>
        </div>
        </div>
        </div>
        <!-- @click="removeSelection(select)" -->
      <!-- <div v-for="(select,index) in selections" v-bind:key="index">
        
      </div> -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import btn from '../components/FormCreator/button'
import email from '../components/FormCreator/email'
import textfield from '../components/FormCreator/text'
import messagefield from '../components/FormCreator/message'

export default { 
  name: "FormWidgets",
  components: {
    btn,
    textfield,
    email,
    messagefield
  },
  data() {
    return{
      selected:'',
      selections: [],
    widgets: [
      {
        name: 'Logo',
        value: ''
      },
      {
        name: 'First Name',
        value: 'First name'
      },
      {
        name: 'Last Name',
        value: 'Last name'
      },
      {
        name: 'Address',
        value: 'Address'
      },
      {
        name: 'Mobile Number',
        value: 'Mobile Number'
      },
      {
        name: 'Email Address',
        value: 'Email Address'
      },
      {
        name: 'Dropdown',
        value: 'Dropdown'
      },
      {
        name: 'Checkbox',
        value: 'Checkbox'
      },
      {
        name: 'Radio Button',
        value: 'Radio Button'
      },
      {
        name: 'Message',
        value: 'Message'
      },
      {
        name: 'Button',
        value: 'Button'
      },
      {
        name: 'File Upload',
        value: 'File Upload'
      },
      {
        name: 'Custom Textbox',
        value: 'Custom Textbox'
      },
      {
        name: 'Signature Placeholder',
        value: 'Signature Placeholder'
      },
      {
        name: 'Date',
        value: 'Date'
      }
    ]
  }
  },
  methods: {
    result: function(selected) {
      // alert("Clicked: " + selected);
      console.log(selected);
      this.selections.push({
        value: this.selected
      });
      this.selected = '';
    },
    removeSelection(select) {
      const selectedIndex = this.selections.indexOf(select);
      this.selections.splice(selectedIndex, 1);
    }
    // add: function() {
    //   this.selections.push({
    //     name: this.selected
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped>
.formcreator {
  position: relative;
  width: 100%;
}

.nav {
  position: relative;
  display: block;
  height: 50px;
  background: black;
}

.component-stack {
  background-color: yellow;
  .comp-head {
    position: relative;
    height: 100px;
  }
  .comp-head h3{
    font-size: 20px;
  }
}

.formarea {
  position: relative;
}

.hovered {
  background-color: aquamarine;
  border-style: dashed;
}

.invisible {
  display: none;
}

.drop {
  position: relative;
  height: 500px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: darkseagreen;
}

@media all and (max-width: 768px) and (orientation: portrait){
.component-stack {
  background-color: yellow;
  .comp-head {
    position: relative;
    height: 200px;
  }
  .comp-head h3{
    font-size: 20px;
  }
}
}
</style>
