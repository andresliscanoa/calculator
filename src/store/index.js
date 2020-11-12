import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state      : {
      string  : '',
      operator: '',
      values  : [],
      result  : '',
      logs    : [],
      log     : {
          string: '',
          result: ''
      },
      memory  : 0
  },
    getters  : {
        getString  : state => state.string,
        getOperator: state => state.operator,
        getValues  : state => state.values,
        getResult  : state => state.result,
        getLogs    : state => state.logs,
        getMemory  : state => state.memory
    },
    mutations: {
        setString( state, string ) { state.string += string },
        eraseString( state ) { state.string = ''},
        setOperator( state, operator ) { state.operator = operator },
        setValues( state, value ) { state.values = value },
        setResult( state, result ) { state.result = result },
        setLogs( state, log ) { state.logs.unshift( log ) },
        eraseLogs( state ) { state.logs = [] },
        setLog( state, object ) { Object.assign( state.log, object ) },
        eraseLog( state ) { state.log = {} },
        memoryAdd( state, value ) { state.memory += value },
        memorySubtract( state, value ) { state.memory -= value },
        memoryErase( state ) { state.memory = 0 }
    },
  actions    : {
      calculate( { commit, state }, payload ) {
          const { values, operator } = payload
          commit( 'eraseString' )
          commit( 'eraseLog' )
          switch ( operator ) {
              case '+':
                  commit( 'setResult', values.reduce( ( acc, val ) => acc + parseInt( val ), 0 ) )
                  commit( 'setValues', values )
                  commit( 'setOperator', operator )
                  commit( 'setLog', { string: values[0] + ' ' + operator + ' ' + values[1], result: state.result } )
                  commit( 'setLogs', state.log )
                  break
              case '-':
                  commit( 'setResult', parseInt( values[0] ) - parseInt( values[1] ) )
                  commit( 'setValues', values )
                  commit( 'setOperator', operator )
                  commit( 'setLog', { string: values[0] + ' ' + operator + ' ' + values[1], result: state.result } )
                  commit( 'setLogs', state.log )
                  break
              case '*':
                  commit( 'setResult', parseInt( values[0] ) * parseInt( values[1] ) )
                  commit( 'setValues', values )
                  commit( 'setOperator', operator )
                  commit( 'setLog', { string: values[0] + ' ' + operator + ' ' + values[1], result: state.result } )
                  commit( 'setLogs', state.log )
                  commit( 'setString', '' )
                  break
              case '/':
                  if ( values[1] === '0' ) {
                      commit( 'setString', '' )
                      commit( 'setResult', 'NAN' )
                      commit( 'setValues', values )
                      commit( 'setOperator', operator )
                      commit( 'setLog', { string: values[0] + ' ' + operator + ' ' + values[1], result: state.result } )
                      commit( 'setLogs', state.log )
                  } else {
                      commit( 'setResult', parseInt( values[0] ) / parseInt( values[1] ) )
                      commit( 'setValues', values )
                      commit( 'setOperator', operator )
                      commit( 'setLog', { string: values[0] + ' ' + operator + ' ' + values[1], result: state.result } )
                      commit( 'setLogs', state.log )
                  }
                  break
          }
      }
  },
  modules: {
  }
})
