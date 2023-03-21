<template>
    <div>
      <!-- TEST CREATE ITData -->
      <br>
      <br>
      <b-container>
        <div>
          <div>
            <div>
              D/O NUMBER
            </div>
            <div>
              <b-input aria-placeholder="Pallet ID No." v-model="itdata.pallet"></b-input>
            </div>
          </div>
          <div>
            <div>
              D/O ITEM NO.
            </div>
            <div>
              <b-input aria-placeholder="Account No." v-model="itdata.account"></b-input>
            </div>
          </div>
          <div>
            <div>
              D/O ITEM NO.2
            </div>
            <div>
              <b-input aria-placeholder="Total Box Qty on Pallet" v-model="itdata.totalbox"></b-input>
            </div>
          </div>
          <div>
            <div>
              DO KEY
            </div>
            <div>
              <b-input aria-placeholder="Invoice No." v-model="itdata.invoice"></b-input>
            </div>
          </div>
          <div>
            <div>
              CUSTOMER CODE
            </div>
            <div>
              <b-input aria-placeholder="Parts Qty in one Box" v-model="itdata.qty"></b-input>
            </div>
          </div>
          <div>
            <div>
              CUSTOMER NAME
            </div>
            <div>
              <b-input aria-placeholder="INTRANSIT QTY" v-model="itdata.intransitqty"></b-input>
            </div>
          </div>
          <div>
            <div>
              D/O DELIVERY DATE
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              CUSTOMER RECEIVING DATE
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              ITEM NUMBER
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              NUMBER OF BOXES
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              QTY/BOX
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              D/O QTY
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              ACCOUNT NUMBER
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              BACK NUMBER
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              LOCATION
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              BEARING NUMBER(BASE)
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              BEARING NUMBER(SUB)
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              SORT KEY
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
            <div>
              Customer Parts No.
            </div>
            <div>
              <b-input aria-placeholder="Item No." v-model="itdata.item"></b-input>
            </div>
          </div>
          <div>
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
  import axios from 'axios'
  export default {
    data () {
      return {
        itdata: {
          doNumber: '',
          doItem: '',
          doItem2: '',
          doKey: '',
          CustomerCode: '',
          CumtomerKey: '',
          doDeliveryDate: '',
          CustomerReceivingDate: '',
          ItemNumber: '',
          NumberofBoxes: '',
          QtyBox: '',
          doQty: '',
          AccountNumber: '',
          BackNumber: '',
          Location: '',
          BearingNumber: '',
          subBearingNumber: '',
          SortKey: '',
          CustomerPartsNo: ''
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
        try {
          const response = await axios.post('http://localhost:4000/itdata', this.itdata)
          console.log(response.data) // handle the response data
        } catch (error) {
          console.error(error) // handle the error
        }
      }
    }
  }
  </script>
  