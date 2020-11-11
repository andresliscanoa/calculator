<template>
  <v-layout justify-center row wrap>
    <v-sheet
        height="8rem"
        max-height="8rem"
        two-line
        width="25rem"
        style="overflow: auto"
    >
      <v-flex v-for="log in logs" :key="log.id" class="textDisplay" xs12>
        <span class="display">{{ log.string }} = {{ log.result }}</span>
      </v-flex>
    </v-sheet>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name    : 'CalculatorDisplay',
  computed: {
    ...mapGetters( [ 'getLogs' ] ),
    logs() {
      return this.getLogs
    }
  }
}
</script>
<style scoped>
.textDisplay {
  text-align: right;
}
</style>
