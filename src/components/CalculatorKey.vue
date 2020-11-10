<template>
  <v-layout justify-center row wrap>
    <v-flex my-1 xs12>
      <v-btn :color="color" large outlined>
        {{ value }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name : 'CalculatorKey',
  props: {
    value: {
      type   : String,
      default: ''
    },
    color: {
      type   : String,
      default: 'yellow'
    }
  }
}
</script>
