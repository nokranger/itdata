<template>
  <div>
    <!-- TEST CREATE doData -->
    <br>
    <br>
    <b-container>
      <div>
        <div>
          <div>
            D/O NUMBER
          </div>
          <div>
            <b-input v-model="doData.doNumber"></b-input>
          </div>
        </div>
        <div>
          <div>
            D/O ITEM NO.
          </div>
          <div>
            <b-input v-model="doData.doItem"></b-input>
          </div>
        </div>
        <div>
          <div>
            D/O ITEM NO.2
          </div>
          <div>
            <b-input v-model="doData.doItem2"></b-input>
          </div>
        </div>
        <div>
          <div>
            DO KEY
          </div>
          <div>
            <b-input v-model="doData.doKey"></b-input>
          </div>
        </div>
        <div>
          <div>
            CUSTOMER CODE
          </div>
          <div>
            <b-input v-model="doData.CustomerCode"></b-input>
          </div>
        </div>
        <div>
          <div>
            CUSTOMER NAME
          </div>
          <div>
            <b-input v-model="doData.CustomerName"></b-input>
          </div>
        </div>
        <div>
          <div>
            D/O DELIVERY DATE
          </div>
          <div>
            <b-input v-model="doData.doDeliveryDate"></b-input>
          </div>
        </div>
        <div>
          <div>
            CUSTOMER RECEIVING DATE
          </div>
          <div>
            <b-input v-model="doData.CustomerReceivingDate"></b-input>
          </div>
        </div>
        <div>
          <div>
            ITEM NUMBER
          </div>
          <div>
            <b-input v-model="doData.ItemNumber"></b-input>
          </div>
        </div>
        <div>
          <div>
            NUMBER OF BOXES
          </div>
          <div>
            <b-input v-model="doData.NumberofBoxes"></b-input>
          </div>
        </div>
        <div>
          <div>
            QTY/BOX
          </div>
          <div>
            <b-input v-model="doData.QtyBox"></b-input>
          </div>
        </div>
        <div>
          <div>
            D/O QTY
          </div>
          <div>
            <b-input v-model="doData.doQty"></b-input>
          </div>
        </div>
        <div>
          <div>
            ACCOUNT NUMBER
          </div>
          <div>
            <b-input v-model="doData.AccountNumber"></b-input>
          </div>
        </div>
        <div>
          <div>
            BACK NUMBER
          </div>
          <div>
            <b-input v-model="doData.BackNumber"></b-input>
          </div>
        </div>
        <div>
          <div>
            LOCATION
          </div>
          <div>
            <b-input v-model="doData.Location"></b-input>
          </div>
        </div>
        <div>
          <div>
            BEARING NUMBER(BASE)
          </div>
          <div>
            <b-input v-model="doData.BearingNumber"></b-input>
          </div>
        </div>
        <div>
          <div>
            BEARING NUMBER(SUB)
          </div>
          <div>
            <b-input v-model="doData.subBearingNumber"></b-input>
          </div>
        </div>
        <div>
          <div>
            SORT KEY
          </div>
          <div>
            <b-input v-model="doData.SortKey"></b-input>
          </div>
        </div>
        <div>
          <div>
            Customer Parts No.
          </div>
          <div>
            <b-input v-model="doData.CustomerPartsNo"></b-input>
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
// import axios from 'axios'
export default {
  data () {
    return {
      doData: {
        doNumber: '',
        doItem: '',
        doItem2: '',
        doKey: '',
        CustomerCode: '',
        CumtomerName: '',
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
      console.log('test Send Data', this.doData)
      console.log('doNumber', this.doData.doNumber)
      if (this.doData.doNumber.length < 12) {
        const count = 12 - this.doData.doNumber.length
        console.log('doNumberCount: ', count)
        for (let i = 0; i < count; i++) {
          this.doData.doNumber += ' '
          console.log('doNumberAfterCount: ', this.doData.doNumber)
        }
      } else {
        console.log('doNumberReturn: ', this.doData.doNumber)
        return this.doData.doNumber
      }
      // console.log('doNumberAfterCount: ', this.doData.doNumber)
      // try {
      //   const response = await axios.post('http://localhost:4000/doData', this.doData)
      //   console.log(response.data) // handle the response data
      // } catch (error) {
      //   console.error(error) // handle the error
      // }
    }
  }
}
</script>
