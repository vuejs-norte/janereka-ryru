import Vue from 'vue'
import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'http://mucuas.mercadosul.org:8067'
})

Vue.prototype.$axios = axiosConfig
