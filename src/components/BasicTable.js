import * as React from 'react';
import Cell from './Cell';
import './DataTable.css';

export default class BasicTable extends React.Component {

    handleDropDown = () => {
        console.log('we r droping down!!!')
        var newFilteredArray = []
        for (var i = 0; i < this.props.rows.length; i++) {
            console.log('each single due!', this.props.rows[i][7])
            if (this.props.rows[i][7] === 'Y') {
                newFilteredArray.push(this.props.rows[i])
            }
        } console.log("new filtered array", newFilteredArray)
        this.props.updateFilter(newFilteredArray)
    }
    renderHeadingRow = (_cell, cellIndex) => {
        const { headings } = this.props;

        return (
            <Cell
                key={`heading-${cellIndex}`}
                content={headings[cellIndex]}
                header={true}
            />
        )
    };

    renderRow = (_row, rowIndex) => {
        let { rows } = this.props;
        if (this.props.showFilter === true) {
            rows = this.props.filteredRows
        }

        console.log('THis is the row we are about ot map', rows)
        return (
            <tr key={`row-${rowIndex}`}>
                {rows[rowIndex].map((_cell, cellIndex) => {
                    return (
                        <Cell
                            key={`${rowIndex}-${cellIndex}`}
                            content={rows[rowIndex][cellIndex]}
                        />
                    )
                })}
            </tr>
        )
    };

    render() {
        console.log('this is my props basic rtable', this.props)
        let { headings, rows } = this.props;

        if (this.props.showFilter === true) {
            rows = this.props.filteredRows
        }

        this.renderHeadingRow = this.renderHeadingRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);



        const theadMarkup = (
            <tr key="heading">
                {headings.map(this.renderHeadingRow)}
            </tr>
        );


        let tbodyMarkup = rows.map(this.renderRow);




        return (
            <div>
                <div className="row">
                    <h1>Employee Directory</h1>
                    <div className="searchBy-type">
                        <label htmlFor="type">Search By:</label>
                        <select onChange={this.handleDropDown} className="type" id="type">
                            <option defaultValue="search">Select Search By Type</option>
                            <option value="current">Currently an Employee</option>
                        </select>
                    </div>
                </div>
                <table className="Table">
                    <thead>{theadMarkup}</thead>
                    <tbody>{tbodyMarkup}</tbody>
                </table>
            </div>
        );
    }
}