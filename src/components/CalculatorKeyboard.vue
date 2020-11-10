<template>
  <v-layout align-center row wrap>
    <v-flex mx-8 xs8>
      <v-layout justify-center row wrap>
        <v-flex v-for="memory in memories" :key="memory" xs4>
          <calculator-key :color="'purple'" :value="memory"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs1>
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <calculator-key :color="'red'" :value="'MC'"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex mx-8 xs8>
      <v-layout justify-center row wrap>
        <v-flex v-for="number in numbers" :key="number" xs4>
          <calculator-key :value="number"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs1>
      <v-layout justify-center row wrap>
        <v-flex v-for="operator in operators" :key="operator" xs12>
          <calculator-key :color="'orange'" :value="operator"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import CalculatorKey from '@/components/CalculatorKey'

export default {
  name      : 'CalculatorKeyboard',
  components: {
    CalculatorKey
  },
  data      : () => ({
    numbers  : [ '7', '8', '9', '4', '5', '6', '1', '2', '3', 'Cl', '0', '=' ],
    operators: [ '/', '*', '-', '+' ],
    memories : [ 'M+', 'M-', 'MR' ]
  })
}
</script>
