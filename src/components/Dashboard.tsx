import React, { useState } from 'react';
import Transaction from './Transaction';
import Balance from './Balance';

const ParentComponent: React.FC = () => {
    
    const [transactions, setTransactions] = useState([
        
        { id: 1, amount: 20000, type: 'Credit', date: '2023-01-02', reason:'Opening Balance' }
    ]);
    const [autoId,setAutoId]=useState(2);

    const addTransaction = (newTransaction: { id: number; amount: number; type: string; date: string; reason:string }) => {
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
