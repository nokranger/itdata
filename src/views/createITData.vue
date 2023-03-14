<template>
  <div>
    TEST CREATE ITData
    <br>
    <br>
    <b-container>
      <div>
        <div>
          <div>
            Pallet ID No.
          </div>
          <div>
            <b-input aria-placeholder="Pallet ID No."></b-input>
          </div>
        </div>
        <div>
          <div>
            Account No.
          </div>
          <div>
            <b-input aria-placeholder="Account No."></b-input>
          </div>
        </div>
        <div>
          <div>
            Total Box Qty on Pallet
          </div>
          <div>
            <b-input aria-placeholder="Total Box Qty on Pallet"></b-input>
          </div>
        </div>
        <div>
          <div>
            Invoice No.
          </div>
          <div>
            <b-input aria-placeholder="Invoice No."></b-input>
          </div>
        </div>
        <div>
          <div>
            Parts Qty in one Box
          </div>
          <div>
            <b-input aria-placeholder="Parts Qty in one Box"></b-input>
          </div>
        </div>
        <div>
          <div>
            INTRANSIT QTY
          </div>
          <div>
            <b-input aria-placeholder="INTRANSIT QTY"></b-input>
          </div>
        </div>
        <div>
          <div>
            Item No.
          </div>
          <div>
            <b-input aria-placeholder="Item No."></b-input>
          </div>
        </div>
        <div>
          <div>
            Location
          </div>
          <div>
            <b-input aria-placeholder="Location"></b-input>
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
export default {
  data () {
    return {
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
    sendData () {
      console.log('test Send Data')
    }
  }
}
</script>
