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
        CustomerName: '',
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
      }
    }
  },
  methods: {
    async sendData () {
      // console.log('test Send Data', Object.keys(this.doData))
      console.log('doNumber', this.doData.doNumber)
      if (this.doData.doNumber.length < 12) {
        const count1 = 12 - this.doData.doNumber.length
        console.log('doNumberCount: ', count1)
        for (let i = 0; i < count1; i++) {
          this.doData.doNumber += ' '
          // console.log('doNumberAfterCount: ', this.doData.doNumber)
        }
      }
      if (this.doData.doItem.length < 3) {
        const count2 = 3 - this.doData.doItem.length
        console.log('doItemCount: ', count2)
        for (let i = 0; i < count2; i++) {
          this.doData.doItem += ' '
          // console.log('doNumberAfterCount: ', this.doData.doItem)
        }
      }
      if (this.doData.doItem2.length < 3) {
        const count3 = 3 - this.doData.doItem2.length
        console.log('doItem2Count: ', count3)
        for (let i = 0; i < count3; i++) {
          this.doData.doItem2 += ' '
          // console.log('doNumberAfterCount: ', this.doData.doItem2)
        }
      }
      if (this.doData.doKey.length < 25) {
        const count4 = 25 - this.doData.doKey.length
        console.log('doKeyCount: ', count4)
        for (let i = 0; i < count4; i++) {
          this.doData.doKey += ' '
          // console.log('doNumberAfterCount: ', this.doData.doKey)
        }
      }
      if (this.doData.CustomerCode.length < 8) {
        const count5 = 8 - this.doData.CustomerCode.length
        console.log('CustomerCodeCount: ', count5)
        for (let i = 0; i < count5; i++) {
          this.doData.CustomerCode += ' '
          // console.log('doNumberAfterCount: ', this.doData.CustomerCode)
        }
      }
      if (this.doData.CustomerName.length < 30) {
        const count6 = 30 - this.doData.CustomerName.length
        console.log('CustomerNameCount: ', count6)
        for (let i = 0; i < count6; i++) {
          this.doData.CustomerName += ' '
          // console.log('doNumberAfterCount: ', this.doData.CustomerName)
        }
      }
      if (this.doData.doDeliveryDate.length < 8) {
        const count7 = 8 - this.doData.doDeliveryDate.length
        console.log('doDeliveryDateCount: ', count7)
        for (let i = 0; i < count7; i++) {
          this.doData.doDeliveryDate += ' '
          // console.log('doNumberAfterCount: ', this.doData.doDeliveryDate)
        }
      }
      if (this.doData.CustomerReceivingDate.length < 8) {
        const count8 = 8 - this.doData.CustomerReceivingDate.length
        console.log('CustomerReceivingDateCount: ', count8)
        for (let i = 0; i < count8; i++) {
          this.doData.CustomerReceivingDate += ' '
          // console.log('doNumberAfterCount: ', this.doData.CustomerReceivingDate)
        }
      }
      if (this.doData.ItemNumber.length < 30) {
        const count9 = 30 - this.doData.ItemNumber.length
        console.log('ItemNumberCount: ', count9)
        for (let i = 0; i < count9; i++) {
          this.doData.ItemNumber += ' '
          // console.log('doNumberAfterCount: ', this.doData.ItemNumber)
        }
      }
      if (this.doData.NumberofBoxes.length < 5) {
        const count10 = 5 - this.doData.NumberofBoxes.length
        console.log('doNumberCount: ', count10)
        for (let i = 0; i < count10; i++) {
          this.doData.NumberofBoxes += ' '
          // console.log('doNumberAfterCount: ', this.doData.NumberofBoxes)
        }
      }
      if (this.doData.QtyBox.length < 7) {
        const count11 = 7 - this.doData.QtyBox.length
        console.log('QtyBoxCount: ', count11)
        for (let i = 0; i < count11; i++) {
          this.doData.QtyBox += ' '
          // console.log('doNumberAfterCount: ', this.doData.QtyBox)
        }
      }
      if (this.doData.doQty.length < 9) {
        const count12 = 9 - this.doData.doQty.length
        console.log('doQtyCount: ', count12)
        for (let i = 0; i < count12; i++) {
          this.doData.doQty += ' '
          // console.log('doNumberAfterCount: ', this.doData.doQty)
        }
      }
      if (this.doData.AccountNumber.length < 7) {
        const count13 = 7 - this.doData.AccountNumber.length
        console.log('AccountNumberCount: ', count13)
        for (let i = 0; i < count13; i++) {
          this.doData.AccountNumber += ' '
          // console.log('doNumberAfterCount: ', this.doData.AccountNumber)
        }
      }
      if (this.doData.BackNumber.length < 5) {
        const count14 = 5 - this.doData.BackNumber.length
        console.log('BackNumberCount: ', count14)
        for (let i = 0; i < count14; i++) {
          this.doData.BackNumber += ' '
          // console.log('doNumberAfterCount: ', this.doData.BackNumber)
        }
      }
      if (this.doData.Location.length < 12) {
        const count15 = 12 - this.doData.Location.length
        console.log('LocationCount: ', count15)
        for (let i = 0; i < count15; i++) {
          this.doData.Location += ' '
          // console.log('doNumberAfterCount: ', this.doData.Location)
        }
      }
      if (this.doData.BearingNumber.length < 18) {
        const count16 = 18 - this.doData.BearingNumber.length
        console.log('BearingNumberCount: ', count16)
        for (let i = 0; i < count16; i++) {
          this.doData.BearingNumber += ' '
          // console.log('doNumberAfterCount: ', this.doData.BearingNumber)
        }
      }
      if (this.doData.subBearingNumber.length < 14) {
        const count17 = 14 - this.doData.subBearingNumber.length
        console.log('subBearingNumberCount: ', count17)
        for (let i = 0; i < count17; i++) {
          this.doData.subBearingNumber += ' '
          // console.log('doNumberAfterCount: ', this.doData.subBearingNumber)
        }
      }
      if (this.doData.SortKey.length < 32) {
        const count18 = 32 - this.doData.SortKey.length
        console.log('SortKeyCount: ', count18)
        for (let i = 0; i < count18; i++) {
          this.doData.SortKey += ' '
          // console.log('doNumberAfterCount: ', this.doData.SortKey)
        }
      }
      if (this.doData.CustomerPartsNo.length < 20) {
        const count19 = 20 - this.doData.CustomerPartsNo.length
        console.log('CustomerPartsNoCount: ', count19)
        for (let i = 0; i < count19; i++) {
          this.doData.CustomerPartsNo += ' '
          // console.log('doNumberAfterCount: ', this.doData.CustomerPartsNo)
        }
      }
      console.log('All Data', this.doData)
      if ((this.doData.doNumber + this.doData.doItem + this.doData.doItem2 + this.doData.doKey + this.doData.CustomerCode + this.doData.CustomerName + this.doData.doDeliveryDate + this.doData.CustomerReceivingDate + this.doData.ItemNumber + this.doData.NumberofBoxes + this.doData.QtyBox + this.doData.doQty + this.doData.AccountNumber + this.doData.BackNumber + this.doData.Location + this.doData.BearingNumber + this.doData.subBearingNumber + this.doData.SortKey + this.doData.CustomerPartsNo).length === 256) {
        console.log('This is a true sum', (this.doData.doNumber + this.doData.doItem + this.doData.doItem2 + this.doData.doKey + this.doData.CustomerCode + this.doData.CustomerName + this.doData.doDeliveryDate + this.doData.CustomerReceivingDate + this.doData.ItemNumber + this.doData.NumberofBoxes + this.doData.QtyBox + this.doData.doQty + this.doData.AccountNumber + this.doData.BackNumber + this.doData.Location + this.doData.BearingNumber + this.doData.subBearingNumber + this.doData.SortKey + this.doData.CustomerPartsNo).length)
        console.log('This is a true sum', (this.doData.doNumber + this.doData.doItem + this.doData.doItem2 + this.doData.doKey + this.doData.CustomerCode + this.doData.CustomerName + this.doData.doDeliveryDate + this.doData.CustomerReceivingDate + this.doData.ItemNumber + this.doData.NumberofBoxes + this.doData.QtyBox + this.doData.doQty + this.doData.AccountNumber + this.doData.BackNumber + this.doData.Location + this.doData.BearingNumber + this.doData.subBearingNumber + this.doData.SortKey + this.doData.CustomerPartsNo))
        console.log('Show all doData: ', this.doData)
      // try {
      //   const response = await axios.post('http://localhost:4000/doData', this.doData)
      //   console.log(response.data) // handle the response data
      // } catch (error) {
      //   console.error(error) // handle the error
      // }
      } else {
        console.log('This is false, please', (this.doData.doNumber + this.doData.doItem + this.doData.doItem2 + this.doData.doKey + this.doData.CustomerCode + this.doData.CustomerName + this.doData.doDeliveryDate + this.doData.CustomerReceivingDate + this.doData.ItemNumber + this.doData.NumberofBoxes + this.doData.QtyBox + this.doData.doQty + this.doData.AccountNumber + this.doData.BackNumber + this.doData.Location + this.doData.BearingNumber + this.doData.subBearingNumber + this.doData.SortKey + this.doData.CustomerPartsNo).length)
        console.log('This is false, please', (this.doData.doNumber + this.doData.doItem + this.doData.doItem2 + this.doData.doKey + this.doData.CustomerCode + this.doData.CustomerName + this.doData.doDeliveryDate + this.doData.CustomerReceivingDate + this.doData.ItemNumber + this.doData.NumberofBoxes + this.doData.QtyBox + this.doData.doQty + this.doData.AccountNumber + this.doData.BackNumber + this.doData.Location + this.doData.BearingNumber + this.doData.subBearingNumber + this.doData.SortKey + this.doData.CustomerPartsNo))
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
