import React from "react";


interface Transaction {
    id: number;
    amount: number; // The amount for the transaction
    type: string; // Type of the transaction
    date:string;
    reason: string;
}

interface BalanceProps {
    transactions: Transaction[];
}

const Balance:React.FC<BalanceProps> =({transactions})=>{
    const totalBalance = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Credit' 
            ? acc + transaction.amount 
            : acc - transaction.amount;
    }, 0);

    return (
        <div>
            <h2>Total Available Balance: {totalBalance.toFixed(2)}</h2>
        </div>
    );
}

export default Balance;