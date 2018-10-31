import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import './OrderTable.css';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import moment from 'moment';
import moreIcon from '../../images/more-horizontal.svg';
import OrderDetailsModal from '../OrderDetailsModal/OrderDetailsModal';


class OrderTable extends Component {
  state = {
    viewDetails: false,
    rowData: {
      original: {
        phone: '0000000000',
      }
    }
  }

  getDetails = (id) => {
    alert(`You have requested details for id: ${id}`);
  }

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.GET_ORDERS });
    this.props.dispatch({ type: ORDER_ACTIONS.FETCH_STATUS_CODES });
  }

  render() {
    return (
      <div className="orderTable">
        {/* <h1>Manage Orders</h1> */}
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
                <span style={{ textTransform: 'capitalize' }}>
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
              Cell: row => (
                // <img src={plusIcon} alt="view details" width='50%' />
                <img src={moreIcon} alt="view details" width='20%' onClick={() => this.setState({ viewDetails: true, rowData: row })} />
              ),
              style: {
                cursor: "pointer",
                padding: "0",
                textAlign: "center",
                userSelect: "none",
                margin: 'auto',
              },
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        >

        </ReactTable>

        <OrderDetailsModal 
          show={this.state.viewDetails} 
          handleClose={() => this.setState({ ...this.state, viewDetails: false })} 
          handleStatusChange={(event) => {this.props.dispatch({ type: ORDER_ACTIONS.EDIT_ORDER_STATUS, payload: { order_status : event.target.value, id: this.state.rowData.original.id }})}}
          orderData={this.state.rowData.original} 
          statusCodes={this.props.admin.statusCodes} /> 

        {/* <pre>{JSON.stringify(this.props.admin.orderList, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = ({ admin }) => ({ admin })

export default connect(mapStateToProps)(OrderTable);