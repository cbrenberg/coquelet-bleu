import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import './OrderTable.css';
import ORDER_ACTIONS from '../../redux/actions/orderActions';

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
              Header: "First Name",
              accessor: "first_name",
            },
            {
              Header: "Last Name",
              accessor: "last_name",
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