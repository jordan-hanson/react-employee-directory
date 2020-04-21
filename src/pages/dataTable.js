import React, { Component } from 'react';
import { AppProvider, Page } from '@shopify/polaris';
import BasicTable from '../components/BasicTable';


class Data extends Component {

    state = {
        filteredRows: [],
        showFilter: false,
        rows: [
            [
                1,
                "Katelyn Brown",
                "kate077@gmail.com",
                '1-801-445-6972',
                'Engineering',
                "Jr. Developer",
                '06/2018',
                'Y',
            ],
            [
                2,
                "Justin Beck",
                "justintime@gmail.com",
                '1-801-776-9045',
                'Marketing Manager',
                "Marketing",
                '08/2010',
                'Y',],
            [
                3,
                "Jody Lloyd",
                "jlloyd7@ymail.com",
                '1-435-979-1682',
                'Engineering',
                "Sr. Developer",
                '07/2019',
                'Y',
            ],
            [
                4,
                "Curtis Woodward",
                "curtischimes@aol.com",
                '1-801-907-5893',
                'Sales',
                "Lead Sales Representative",
                '01/2016',
                'N',
            ],
        ]
    }

    updateFilteredArray(newArray) {
        this.setState({ filteredRows: newArray, showFilter: true })
    }
    render() {
        this.updateFilteredArray = this.updateFilteredArray.bind(this)
        const headings = [
            'Id',
            'Name',
            'Email',
            'Phone #',
            'Department',
            'Title',
            'Start Month',
            'Current Y/N',
        ];


        return (
            <AppProvider>
                <Page>
                    <BasicTable
                        showFilter={this.state.showFilter}
                        filteredRows={this.state.filteredRows}
                        updateFilter={this.updateFilteredArray}
                        headings={headings}
                        rows={this.state.rows}
                    />
                </Page>
            </AppProvider>
        );
    }
}

export default Data;