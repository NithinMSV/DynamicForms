<template>
  <div class="easytemp mt-5">
    <div class="container">
      <div class="row">
        <div class="col">
          Filter by:
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
            >+ Add New Filter</el-button
          >
        </div>
        <div class="col">
          Sort by:
          <el-select v-model="sortValue" placeholder="Sort by" size="small">
            <el-option
              v-for="item in sortoptions"
              :key="item.sortValue"
              :label="item.label"
              :value="item.sortValue"
            >
            </el-option>
          </el-select>
        </div>
        <div class="col">
          Popularity:
          <el-select
            v-model="popularityValue"
            placeholder="Popularity by"
            size="small"
          >
            <el-option
              v-for="item in popularityoptions"
              :key="item.popularityValue"
              :label="item.label"
              :value="item.popularityValue"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="row d-flex flex-row flex-wrap mb-3 justify-content-evenly">
        <div v-for="(template, index) in templates" :key="index.id">
          <div class="card mt-5 ml-5" style="width: 18rem;">
            <img src="/d" class="card-img-top" alt="aaa" />
            <div class="card-body">
              <h5 class="card-title">{{ template.name }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a-radio-group v-model="selectedTemplate">
                <a-radio-button :value="template.name">
                  Select Template
                </a-radio-button>
              </a-radio-group>
            </div>
          </div>
        </div>
      </div>
      <ol>
        <li>Template Selected: {{ selectedTemplate }}</li>
        <li>Tags Selected: {{ dynamicTags }}</li>
        <li>Sort by Selected: {{ sortValue }}</li>
        <li>Popularity Selected: {{ popularityValue }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "easytemp",
  components: {},
  data() {
    return {
      selectedTemplate: "",
      tags: [],
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      templates: [
        {
          id: 1,
          name: "one",
        },
        {
          id: 2,
          name: "two",
        },
        {
          id: 3,
          name: "three",
        },
        {
          id: 4,
          name: "four",
        },
        {
          id: 5,
          name: "five",
        },
        {
          id: 6,
          name: "six",
        },
      ],
      sortoptions: [
        {
          sortValue: "AZ",
          label: "AZ",
        },
        {
          sortValue: "ZA",
          label: "ZA",
        },
        {
          sortValue: "Price: High",
          label: "Price: High",
        },
        {
          sortValue: "Price: Low",
          label: "Price: Low",
        },
      ],
      sortValue: "",
      popularityoptions: [
        {
          popularityValue: "Most Popular",
          label: "Most Popular",
        },
        {
          popularityValue: "Most Searched",
          label: "Most Searched",
        },
        {
          popularityValue: "Seasonal",
          label: "Seasonal",
        },
        {
          popularityValue: "Price: Low",
          label: "Price: Low",
        },
      ],
      popularityValue: "",
    };
  },
  mounted() {},
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.easytemp {
  position: relative;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
