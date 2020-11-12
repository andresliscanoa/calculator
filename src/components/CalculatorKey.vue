<template>
  <v-layout justify-center row wrap>
    <v-flex my-1 xs12>
      <v-btn :color="color" large outlined @click.native="addValue(value)">
        {{ value }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name    : 'CalculatorKey',
  props   : {
    value: {
      type   : String,
      default: ''
    },
    color: {
      type   : String,
      default: 'yellow'
    }
  },
  computed: {
    ...mapGetters( [ 'getString', 'getOperator', 'getMemory' ] ),
    val() {
      return this.getString
    },
    operator() {
      return this.getOperator
    }
  },
  methods : {
    ...mapMutations( [ 'setString', 'setOperator', 'setResult', 'eraseString', 'eraseLogs', 'memoryAdd', 'memorySubtract', 'memoryErase' ] ),
    ...mapActions( [ 'calculate' ] ),
    addValue( input ) {
      if ( input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' ) {
        this.setString( input )
      }
      if ( input === '+' || input === '-' || input === '*' || input === '/' ) {
        this.setOperator( input )
        this.setString( input )
      }
      if ( input === '=' ) {
        const payload = {
          values  : this.val.split( this.operator ),
          operator: this.operator
        }
        if ( payload.values.length < 2 ) {
          this.setResult( 'NAN' )
        } else {
          this.calculate( payload )
        }
      }
      if ( input === 'CL' ) {
        this.eraseString()
      }
      if ( input === 'MC' ) {
        this.eraseLogs()
        this.memoryErase()
      }
      if ( input === 'M+' ) {
        this.memoryAdd( parseInt( this.val ) )
      }
      if ( input === 'M-' ) {
        this.memorySubtract( parseInt( this.val ) )
      }
      if ( input === 'MR' ) {
        this.setString( this.getMemory )
      }
    }
  }
}
</script>
