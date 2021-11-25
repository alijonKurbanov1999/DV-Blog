<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input' || controlType === 'password'"
      v-bind="$attrs"
      :value="value"
      :type="controlType"
      @input="$emit('input', $event.target.value)">
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input-control {
  margin: 10px 0;

}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 2px solid #000000;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  border: 2px solid #FFFFFFA3;
  outline: none;
}
</style>


