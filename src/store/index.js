import Vue from 'vue'
import Vuex from 'vuex'
import apiService from '../services/EmployeDataService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personnel: [],
    staff: [],
    employee: {},
    show: true,


    newEmployee: {
      fullName: '',
      departament: '',
      position: '',
      sex: '',
      birthd: ''
    }
  },
  mutations: {
    EMPTY_STATE: (state) => {
      state.fullName = ''
      state.position = ''
      state.birthd = ''
      state.departament = ''
      state.sex = ''
    },
    SET_EMPLOYEES: (state, employees) => {
      state.personnel = employees
      state.staff = employees
    },

    SET_EMPLOYE: (state, employe) => {
      state.employee = employe
    },

    FILTER_BY_DEPARTAMENT: (state, dep_employees) => {
      state.personnel = state.staff
      let newObj = state.personnel.filter(x => x.departament === dep_employees)
      state.personnel = newObj
    },

    FILTER_BY_SEX: (state, dep_employees) => {
      state.personnel = state.staff
      let newObj = state.personnel.filter(x => x.sex === dep_employees)
      state.personnel = newObj
    },
    FILTER_CANCEL: (state) => {
      state.personnel = state.staff
    }
  },
  actions: {
    GET_EMPLOYEES: ({ commit }) => {
      apiService.getAll()
        .then((response) => {
          commit('SET_EMPLOYEES', response.data)
        })
    },

    GET_BY_ID: ({ commit }, id) => {
      apiService.getById(id)
        .then((res) => {
          commit('SET_EMPLOYE', res.data)
        })
    },
    DELETE_BY_ID: (id) => {
      console.log(id)
      apiService.deleteById(id)
      this.$router.push({name: 'EmployeList'}) 
    },
    EDIT_BY_ID: (state, id) => {
      apiService.update(id,state.employee)
    },
    ADD: ({ commit, state }) => {
      apiService.create(state.newEmployee)

      commit('EMPTY_STATE', state.newEmployee)
    }
  },

  getters: {
    PERSONNEL: (state) => {
      return state.personnel
    },

    EMPLOYE: (state) => {
      return state.employee
    },

    STAFF: (state) => {
      return state.staff
    },

    NEWEMPLOYEE: (state) => {
      return state.newEmployee
    }
   }
})

