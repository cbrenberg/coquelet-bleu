import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import './InventoryTable.css';
import ExpandRowToEdit from '../ExpandRowToEdit/ExpandRowToEdit';
import editIcon from '../../images/edit.svg';
import closeIcon from '../../images/x.svg';


class InventoryTable extends Component {
  // state = {
  //   data: [],
  // };

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.FETCH_INVENTORY });
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ data: nextProps.beansInStock })
  // }

  render() {
    return (
      <div className="inventoryTable">
        <ReactTable
          data={this.props.beansInStock}
          SubComponent={row => (
            <ExpandRowToEdit original={row.original}/>
          )}
          columns={[
            {
              Header: "Origin",
              accessor: "name",
            },
            {
              Header: "Description",
              accessor: "origin_description",
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
            },
            {
              Header: "Other Notes",
              accessor: "notes",
            },
            {
              expander: true,
              Expander: ({ isExpanded, ...rest }) =>
                <div>
                  {isExpanded
                    ? <img src={closeIcon} alt="edit" width='50%' />
                    : <img src={editIcon} alt="edit" width='50%'/>}
                </div>,
              style: {
                cursor: "pointer",
                fontSize: 18,
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

        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = ({ inventory }) => ({ beansInStock: inventory.beansInStock })

export default connect(mapStateToProps)(InventoryTable);