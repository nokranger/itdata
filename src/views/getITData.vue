<template>
  <div>
    <!-- TEST CREATE ITData -->
    <br>
    <br>
    <b-container>
      <div>
        <b-button v-on:click="getData()">Get Data</b-button>
        <b-button v-on:click="exportData()">Export Data</b-button>
        <b-button v-on:click="exportData2()">Export Data 2</b-button>
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
    },
    async exportData2 () {
      // Your data to be exported
      // const data = '2300379     0010012300379     001001       QTMIA   TOYOTA DAIHATSU               20230110        53363                         00040000002400000096053363       F20-21      PU107529RMZY      FGP0/08K8KBKJP2300379     001'
      const data = [['aaabbbeee'], 'data2', 'data3', 'data4', 'data5']
      try {
        const response = await axios.get('http://localhost:4000/getitdata')
        console.log(response.data) // handle the response data
        this.items = response.data.result
        // Create a new Blob object with the data
        // const dataString = JSON.stringify(this.items)
        const blob = new Blob([data[0]], { type: 'text/plain' })

        // Create a new URL for the blob
        const url = URL.createObjectURL(blob)

        // Create a new anchor tag with the URL
        const a = document.createElement('a')
        a.href = url

        // Set the anchor tag's attributes
        a.download = 'data.txt'
        a.style.display = 'none'

        // Append the anchor tag to the document body
        document.body.appendChild(a)

        // Click the anchor tag to trigger the download
        a.click()

        // Remove the anchor tag from the document body
        document.body.removeChild(a)

        // Revoke the URL object to free up memory
        URL.revokeObjectURL(url)
      } catch (error) {
        console.error(error) // handle the error
      }
    }
  }
}
</script>
