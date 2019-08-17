import "core-js/stable";
import "regenerator-runtime/runtime";

const axios = require('axios');
//import Vue from 'vue';
const elem1 = document.querySelector('#hoge1');
let a = 10;

elem1.innerHTML = `a: ${a+100}`;


let json_data = {};

//jsonデータの読み込み
axios.get('./test.json')
  .then(function(response) {
    json_data = response.data;
    console.log('------axios------');
    console.log(json_data);
    const elem2 = document.querySelector('#hoge2');
    elem2.innerHTML = `axios_get a: ${json_data.a}, b: ${json_data.b} `;
  })
  .catch(function(error) {
    console.log(error);
  });

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    showName: '久保田',
    firstNameFlg: true,
    firstName: '耕司',
    lastName: '久保田',
    
  },
  methods:{
    onClickBtn: function() {
      console.log('buttun clicked');
      this.showName = this.firstNameFlg ? this.lastName : this.firstName;
      this.firstNameFlg = !this.firstNameFlg;
    }
  }
})
