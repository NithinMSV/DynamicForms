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
      <!-- <b-form-select v-model="selected">
      <b-form-select-option v-for="(widget, index) in widgets" :key="index">{{widget.name}}</b-form-select-option>
      </b-form-select> -->
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
        <draggable class="list-group" :list="selections" group="components">
        <div v-for="(select,index) in selections" v-bind:key="index">
        <div class="container style" id="element">
          <a-tooltip placement="right" title="I'm Draggable :)">
        <div class="row justify-content-around">
        <div class="col-4">
          {{select.value}}
        <div v-if="select.value === 'Name'">
        <name />
        </div>
        <div v-if="select.value === 'Text Box'">
        <Textfield labelplaceholder="Enter Text Box Name" placeholder="Value goes here" :test="fn"/>
        <p>{{printValue(fn)}}</p>
        </div>
        <div v-if="select.value === 'Email Address'">
        <email />
        </div>
        <div v-if="select.value === 'Address (Single Text Box)'">
        <Messagefield placeholder="Enter Address"/>
        </div>
        <div v-if="select.value === 'Dropdown'">
        <dropdown />
        </div>
        <div v-if="select.value === 'Checkbox'">
        <checkbox />
        </div>
        <div v-if="select.value === 'Radio Button'">
        <radio />
        </div>
        <div v-if="select.value === 'Date'">
        <date />
        </div>
        <div v-if="select.value === 'File Upload'">
        <file />
        </div>
        <div v-if="select.value === 'Message'">
        <Messagefield placeholder="Enter Message"/>
        </div>
        <div v-if="select.value === 'Ask Questions'">
        <askquestions />
        </div>
        <div v-if="select.value === 'Rating'">
        <rating />
        </div>
        <div v-if="select.value === 'Signature Placeholder'">
        <file />
        </div>
        <div v-if="select.value === 'Button'">
        <Btn btnname="Submit"/>
        </div>
        </div>
        <div class="col-4">
        <b-button variant="outline-danger" class="mb-2" @click="removeSelection(select)">
          <b-icon icon="trash" aria-hidden="true"></b-icon>
        </b-button>
        </div>
        </div>
        </a-tooltip>
        </div>
        </div>
        </draggable>
        </div>
        <!-- @click="removeSelection(select)" -->
      <!-- <div v-for="(select,index) in selections" v-bind:key="index">
        
      </div> -->
      </div>
  </div>
  </div>
</template>

<script>

import Name from '../components/FormCreator/name'
import Btn from '../components/FormCreator/button'
import email from '../components/FormCreator/email'
import Textfield from '../components/FormCreator/text'
import Messagefield from '../components/FormCreator/message'
import dropdown from '../components/FormCreator/dropdown'
import checkbox from '../components/FormCreator/checkbox'
import radio from '../components/FormCreator/radio'
import file from '../components/FormCreator/file'
import date from '../components/FormCreator/date'
import rating from '../components/FormCreator/rating'
import askquestions from '../components/FormCreator/askquestion'

import draggable from 'vuedraggable'

export default { 
  name: "FormWidgets",
  components: {
    Name,
    Btn,
    Textfield,
    email,
    Messagefield,
    dropdown,
    checkbox,
    radio,
    file,
    date,
    rating,
    askquestions,
    draggable
  },
  data() {
    return{
      fn: '',
      ln: '',
      text: '',
      selected:'',
      selections: [],
    widgets: [
      {
        name: 'Logo',
        value: ''
      },
      {
        name: 'Name',
        value: 'Name'
      },
      {
        name: 'Text Box',
        value: 'Text Box'
      },
      {
        name: 'Address (Single Text Box)',
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
        name: 'Signature Placeholder',
        value: 'Signature Placeholder'
      },
      {
        name: 'Date',
        value: 'Date'
      },
      {
        name: 'Rating',
        value: 'Rating'
      },
      {
        name: 'Ask Questions',
        value: 'Ask Questions'
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
    },
    printValue(fn) {
      console.log(fn);
    },
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
    height: 100%;
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

.style {
  border: 2px solid blueviolet;
  border-radius: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
  cursor: all-scroll;
}

.col-4 {
  margin-top: 25px;
  margin-bottom: 25px;
}

.container {
    margin-top: 25px;
}

.drop {
  position: relative;
  height: 500px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: white;
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
