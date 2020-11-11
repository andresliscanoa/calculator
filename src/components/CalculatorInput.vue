<template>
  <v-layout justify-center row wrap>
    <v-text-field
        v-model="stringToCalculate"
        color="yellow"
        outlined
        reverse
        height="5rem"
        disabled
    />
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name    : 'CalculatorInput',
  computed: {
    ...mapGetters( [ 'getString' ] ),
    stringToCalculate() {
      return this.getString
    }
  }
}
</script>
