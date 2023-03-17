<template>
  <div>
    <!-- TEST CREATE ITData -->
    <br>
    <br>
    <b-container>
      <div>
        <b-button v-on:click="getData()">Get Data</b-button>
        <b-button v-on:click="exportData()">Export Data</b-button>
        <b-table striped hover :items="items"></b-table>
        <!-- <div v-for="(item, index) in items" :key="index">
            {{ item.pallet}}
        </div> -->
      </div>
    </b-container>
    <!-- <b-table striped hover :items="items" :fields="field"></b-table> -->
  </div>
</template>
<script>
import axios from 'axios'
import * as XLSX from 'xlsx'
export default {
  data () {
    return {
      itdata: {
        pallet: '',
        account: '',
        totalbox: '',
        invoice: '',
        qty: '',
        intransitqty: '',
        item: '',
        location: ''
      },
      field: [
        {
          key: 'age',
          sortable: true
        },
        {
          key: 'first_name',
          sortable: true
        },
        {
          key: 'lastname',
          sortable: true
        }
      ],
      items: []
    }
  },
  methods: {
    async getData () {
      console.log('test Send Data')
      try {
        const response = await axios.get('http://localhost:4000/getitdata')
        console.log(response.data) // handle the response data
        this.items = response.data.result
      } catch (error) {
        console.error(error) // handle the error
      }
    },
    async exportData () {
      console.log('export data')
      try {
        const response = await axios.get('http://localhost:4000/getitdata')
        console.log(response.data) // handle the response data
        this.items = response.data.result
        // const data = [
        //   { name: 'John', age: 28, city: 'New York' },
        //   { name: 'Jane', age: 35, city: 'Los Angeles' },
        //   { name: 'Bob', age: 42, city: 'Chicago' }
        // ]
        const worksheet = XLSX.utils.json_to_sheet(this.items)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
        XLSX.writeFile(workbook, 'data.xlsx')
      } catch (error) {
        console.error(error) // handle the error
      }
    }
  }
}
</script>
