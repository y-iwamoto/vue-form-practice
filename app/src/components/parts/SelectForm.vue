<template>
  <div class="select">
    <select :name="name" @change="updateValue">
      <template v-for="(option, index) in options">
        <option :value="option.value" :key="index" :selected="value == option.value">
          {{ option.label }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectForm",
  props: {
    value: { type: String, require: true },
    options: { type: Array, require: true },
    name: { type: String, require: true }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  },
};
</script>
