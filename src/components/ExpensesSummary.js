import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpensesSummary = ( {listLength, sum} )=> {

    const items = listLength === 0 || 1 ? 'item': 'items'
    const totalValue = numeral(sum/100).format('$0,0.00');

    return (
        <div>
            You are viewing { listLength } {items}, the total expense is { totalValue }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}


export default connect(mapStateToProps)(ExpensesSummary)
