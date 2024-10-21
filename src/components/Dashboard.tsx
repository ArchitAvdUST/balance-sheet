import React, { useState } from 'react';
import Transaction from './Transaction';
import Balance from './Balance';

const ParentComponent: React.FC = () => {
    
    const [transactions, setTransactions] = useState([
        { id: 1, amount: 100, type: 'Debit', date: '2023-01-01' },
        { id: 2, amount: 200, type: 'Credit', date: '2023-01-02' }
    ]);
    const [autoId,setAutoId]=useState(3);

    const addTransaction = (newTransaction: { id: number; amount: number; type: string; date: string; }) => {
        newTransaction.id=autoId;
        setAutoId(autoId+1);
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
        // setTransactions(transactions.push(newTransaction));
    };

    return (
        <div>
            <h1>Transaction List</h1>
            <Transaction transactions={transactions} onAddTransaction={addTransaction} />
            <Balance transactions={transactions}/>
        </div>
    );
};

export default ParentComponent;
