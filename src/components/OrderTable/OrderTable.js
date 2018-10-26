import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import './OrderTable.css';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import moment from 'moment';

class OrderTable extends Component {


  getDetails = (id) => {
    alert(`You have requested details for id: ${id}`);
  }

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.GET_ORDERS });
  }

  render() {
    return (
      <div className="orderTable">
        <h1>Manage Orders</h1>
        <ReactTable
          data={this.props.admin.orderList}
          columns={[
            {
              id: "timestamp",
              Header: "Order Placed",
              accessor: data => {
                return moment(data.timestamp).format("ddd, MMM Do")
              },
            },
            {
              id: "customerName",
              Header: "Customer Name",
              accessor: nameData => {
                return nameData.first_name + ' ' + nameData.last_name
              },
            },
            {
              Header: "Quantity",
              accessor: "quantity",
              Cell: row => (
                <span>{row.value} oz.</span>
              )
            },
            {
              Header: "Bean Type",
              accessor: "name",
            },
            {
              Header: "Roast Level",
              accessor: "roast",
            },
            {
              Header: "Status",
              accessor: "status",
              Cell: row => (
                <span style={{textTransform: 'capitalize'}}>
                  <span style={{
                    color: row.value === 'Unprocessed' ? '#ff2e00'
                      : row.value === 'In progress' ? '#ffbf00'
                        : '#57d500'
                  }}> 
                    &#x25cf;
                  </span>  
                   {' ' + row.value}
                </span>
              )
            },
            {
              Header: "Details",
              accessor: "id",
              Cell: row => (
                <button onClick={() => this.getDetails(row.value)}>More Details</button>
              )

            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        >

        </ReactTable>

        {/* <pre>{JSON.stringify(this.props.admin.orderList, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = ({ admin }) => ({ admin })

export default connect(mapStateToProps)(OrderTable);