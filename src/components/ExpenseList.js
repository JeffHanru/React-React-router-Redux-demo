import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses, {toSum} from '../selectors/expenses';
import ExpensesSummary from './ExpensesSummary';
import numeral from 'numeral';

const ExpenseList = (props) => (
  <div>
      <h1>Expense List</h1>
      <ExpensesSummary listLength={props.expenses.length} sum={props.sum} />
      {props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
      })}
  </div>
);

const mapStateToProps = (state) => {
  return {
      expenses: selectExpenses(state.expenses, state.filters),
      sum:toSum(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpenseList);
