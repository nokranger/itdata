<template>
  <div>
    <!-- TEST CREATE ITData -->
    <br>
    <br>
    <b-container>
      <div>
        <div>
          <div>
            Pallet ID No.
          </div>
          <div>
            <b-input aria-placeholder="Pallet ID No." v-model="itdata.pallet"></b-input>
          </div>
        </div>
        <div>
          <div>
            Account No.
          </div>
          <div>
            <b-input aria-placeholder="Account No." v-model="itdata.account"></b-input>
          </div>
        </div>
        <div>
          <div>
            Total Box Qty on Pallet
          </div>
          <div>
            <b-input aria-placeholder="Total Box Qty on Pallet" v-model="itdata.totalbox"></b-input>
          </div>
        </div>
        <div>
          <div>
            Invoice No.
          </div>
          <div>
            <b-input aria-placeholder="Invoice No." v-model="itdata.invoice"></b-input>
          </div>
        </div>
        <div>
          <div>
            Parts Qty in one Box
          </div>
          <div>
            <b-input aria-placeholder="Parts Qty in one Box" v-model="itdata.qty"></b-input>
          </div>
        </div>
        <div>
          <div>
            INTRANSIT QTY
          </div>
          <div>
            <b-input aria-placeholder="INTRANSIT QTY" v-model="itdata.intransitqty"></b-input>
          </div>
        </div>
        <div>
          <div>
            Item No.
          </div>
          <div>
            <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
          </div>
        </div>
        <div>
          <div>
            Location
          </div>
          <div>
            <b-input aria-placeholder="Location" v-model="itdata.location"></b-input>
          </div>
          <br>
          <div>
            <div>
            </div>
            <div>
              <b-button v-on:click="sendData()">Send Data</b-button>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <!-- <b-table striped hover :items="items" :fields="field"></b-table> -->
  </div>
</template>
<script>
// import axios from 'axios'
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
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: true, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  methods: {
    async sendData () {
      console.log('test Send Data', this.itdata)
      // try {
      //   const response = await axios.post('https://example.com/api/data', {
      //     // data to be sent in the request body
      //     name: 'John',
      //     email: 'john@example.com'
      //   })
      //   console.log(response.data) // handle the response data
      // } catch (error) {
      //   console.error(error) // handle the error
      // }
    }
  }
}
</script>
