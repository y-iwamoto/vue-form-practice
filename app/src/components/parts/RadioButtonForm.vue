<template>
  <div class="control mb-4">
    <template v-for="(option, index) in options">
      <label :key="index" class="radio">
        <input
          type="radio"
          :name="name"
          :value="option.value"
          @change="updateValue"
        />{{ option.label }}
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: 'RadioButtonForm',
  props: {
    value: { type: String, required: true },
    options: { type: Array, required: true },
    name: { type: String, required: true },
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  }
}
</script>