// Get visible expenses
import moment from 'moment';


export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const createAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate? startDate.isSameOrBefore(createAtMoment, 'day'):true;
      const endDateMatch = endDate? endDate.isSameOrAfter(createAtMoment, 'day'): true
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export const toSum = (expenses) => {
    let sum = 0;
    // for(let item of expenses){
    //     sum += item.amount;
    // }
    if(expenses.length===0){
        return sum = 0;
    }else{
        return sum =expenses.map((expense)=>{
            return expense.amount
        }).reduce((sum,value)=>{
            return sum+value
        },0);
    }
};



