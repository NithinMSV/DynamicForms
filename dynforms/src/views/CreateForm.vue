<template>
  <div class="formcreator">
    <div class="nav"></div>
    <div class="component-stack">
      <div class="comp-head">
        <h3>Component Stack - Widgets</h3>
        <div class="widgets select" v-if="showWidgets == false">
        <h3 @click="result(widget)" v-for="(widget, index) in widgets" :key="index">
          <a href="#"><span class="badge badge-pill badge-dark" draggable="true">{{widget.name}}</span></a>
          </h3>
        </div>
      </div>
    </div>
    <div class="formarea">
      <h3>Component Creator - Drag & Drop here</h3>
      <div class="drop">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FormWidgets",
  data() {
    return{
    showWidgets: false,
    selectedWidget: {},
    widgets: [
      {
        name: 'Logo',
        type: String,
        value: 'logo'
      },
      {
        name: 'First Name',
        value: ''
      },
      {
        name: 'Last Name',
        value: ''
      },
      {
        name: 'Address',
        value: ''
      },
      {
        name: 'Mobile Number',
        value: ''
      },
      {
        name: 'Email Address',
        value: ''
      },
      {
        name: 'Dropdown',
        value: ''
      },
      {
        name: 'Checkbox',
        value: ''
      },
      {
        name: 'Radio Button',
        value: ''
      },
      {
        name: 'Message',
        value: ''
      },
      {
        name: 'Button',
        value: ''
      },
      {
        name: 'File Upload',
        value: ''
      },
      {
        name: 'Text',
        value: ''
      },
      {
        name: 'Signature Placeholder',
        value: ''
      }
    ]
  }
  },
  methods: {
    result: function(widget) {
      alert("Clicked: " + widget.name);
    }
    }
}
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

.widgets {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-self: flex-end;
  cursor: pointer;
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
