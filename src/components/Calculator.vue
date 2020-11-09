<template>
  <v-layout justify-center row wrap>
    <v-flex lg4 md6 sm9 xs12>
      <v-card dark elevation="10" flat>
        <v-card-title>
          <calculator-display/>
          <calculator-input/>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorInput   from './CalculatorInput'

export default {
  name      : 'Calculator',
  components: {
    CalculatorDisplay, CalculatorInput
  },
  data      : () => ({})
}
</script>
