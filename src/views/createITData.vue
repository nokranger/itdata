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
      if (this.itdata.pallet.length < 6) {
        const count1 = 6 - this.itdata.pallet.length
        console.log('palletCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.pallet += ' '
          // console.log('palletAfterCount: ', this.itdata.pallet)
        }
      }
      if (this.itdata.account.length < 7) {
        const count1 = 7 - this.itdata.account.length
        console.log('accountCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.account += ' '
          // console.log('accountAfterCount: ', this.itdata.account)
        }
      }
      if (this.itdata.totalbox.length < 3) {
        const count1 = 3 - this.itdata.totalbox.length
        console.log('totalboxCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.totalbox += ' '
          // console.log('totalboxAfterCount: ', this.itdata.totalbox)
        }
      }
      if (this.itdata.invoice.length < 13) {
        const count1 = 13 - this.itdata.invoice.length
        console.log('invoiceCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.invoice += ' '
          // console.log('invoiceAfterCount: ', this.itdata.invoice)
        }
      }
      if (this.itdata.qty.length < 5) {
        const count1 = 5 - this.itdata.qty.length
        console.log('qtyCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.qty += ' '
          // console.log('qtyAfterCount: ', this.itdata.qty)
        }
      }
      if (this.itdata.intransitqty.length < 7) {
        const count1 = 7 - this.itdata.intransitqty.length
        console.log('intransitqtyCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.intransitqty += ' '
          // console.log('intransitqtyAfterCount: ', this.itdata.intransitqty)
        }
      }
      if (this.itdata.item.length < 15) {
        const count1 = 15 - this.itdata.item.length
        console.log('itemCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.item += ' '
          // console.log('itemAfterCount: ', this.itdata.item)
        }
      }
      if (this.itdata.location.length < 10) {
        const count1 = 10 - this.itdata.location.length
        console.log('locationCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.itdata.location += ' '
          // console.log('locationAfterCount: ', this.itdata.location)
        }
      }
      console.log('All Data', this.itdata)
      if ((this.itdata.pallet + this.itdata.account + this.itdata.totalbox + this.itdata.invoice + this.itdata.qty + this.itdata.intransitqty + this.itdata.item + this.itdata.location).length === 66) {
        console.log('This is a true sum', (this.itdata.pallet + this.itdata.account + this.itdata.totalbox + this.itdata.invoice + this.itdata.qty + this.itdata.intransitqty + this.itdata.item + this.itdata.location).length)
        console.log('This is a true sum', (this.itdata.pallet + this.itdata.account + this.itdata.totalbox + this.itdata.invoice + this.itdata.qty + this.itdata.intransitqty + this.itdata.item + this.itdata.location))
        console.log('Show all itdata: ', this.itdata)
      // try {
      //   const response = await axios.post('http://localhost:4000/itdata', this.itdata)
      //   console.log(response.data) // handle the response data
      // } catch (error) {
      //   console.error(error) // handle the error
      // }
      } else {
        console.log('This is false, please', (this.itdata.pallet + this.itdata.account + this.itdata.totalbox + this.itdata.invoice + this.itdata.qty + this.itdata.intransitqty + this.itdata.item + this.itdata.location).length)
        console.log('This is false, please', (this.itdata.pallet + this.itdata.account + this.itdata.totalbox + this.itdata.invoice + this.itdata.qty + this.itdata.intransitqty + this.itdata.item + this.itdata.location))
      }
      // try {
      //   const response = await axios.post('http://localhost:4000/itdata', this.itdata)
      //   console.log(response.data) // handle the response data
      // } catch (error) {
      //   console.error(error) // handle the error
      // }
    }
  }
}
</script>
