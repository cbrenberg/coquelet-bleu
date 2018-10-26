import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import Axios from 'axios';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import ExpandRowToEdit from '../ExpandRowToEdit/ExpandRowToEdit';


class InventoryTable extends Component {
  state = {
    data: [],
  };

  getDetails = (id) => {
    alert(`You have requested details for id: ${id}`);
  }

  renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.props.beansInStock];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
          this.props.dispatch({
            type: 'EDIT INVENTORY',
            payload: data,
          })
          Axios({
            method: 'PUT',
            url: '/inventory',
            data: {
              id: cellInfo.row.id,
              value: e.target.innerHTML,
              column: cellInfo.column.id,
            }
          })
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.FETCH_INVENTORY });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.beansInStock })
  }

  render() {
    const {data} = this.state;
    return (
      <div className="inventoryTable">
        <h1>Manage Inventory</h1>
        <ReactTable
          data={data}
          SubComponent={row => (
            <ExpandRowToEdit original={row.original}/>
          )}
          columns={[
            {
              Header: "Origin",
              accessor: "name",
              Cell: this.renderEditable,
            },
            {
              Header: "Description",
              accessor: "origin_description",
              Cell: this.renderEditable,
            },
            {
              Header: "Quantity",
              accessor: "quantity",
              Cell: row => (
                <span>{row.value} oz.</span>
              )
            },
            {
              Header: "Suggested Roasts",
              accessor: "roasts",
              Cell: row => (
                <span>{row.value.join(', ')}</span>
              )
            },
            {
              Header: "Flavor Description",
              accessor: "flavor_description",
              Cell: this.renderEditable,
            },
            {
              Header: "Other Notes",
              accessor: "roasting_notes",
              Cell: this.renderEditable,
            },
            // {
            //   Header: "Details",
            //   accessor: "id",
            //   Cell: row => (
            //     <button onClick={() => this.getDetails(row.value)}>More Details</button>
            //   )

            // }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        >

        </ReactTable>

        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = ({ inventory }) => ({ beansInStock: inventory.beansInStock })

export default connect(mapStateToProps)(InventoryTable);