<template>
  <v-layout justify-center row wrap>
    <v-flex md4 sm9 xs12>
      <v-card dark elevation="10" flat>
        <v-card-title>
          <calculator-display/>
          <calculator-input/>
        </v-card-title>
        <v-card-text>
          <calculator-keyboard/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import CalculatorDisplay  from './CalculatorDisplay'
import CalculatorInput    from './CalculatorInput'
import CalculatorKeyboard from '@/components/CalculatorKeyboard'

export default {
  name      : 'Calculator',
  components: {
    CalculatorDisplay, CalculatorInput, CalculatorKeyboard
  },
  data      : () => ({})
}
</script>
