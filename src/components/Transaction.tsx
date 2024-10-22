import React, { useState } from 'react';

interface TransactionProps {
    transactions: {
        id: number;
        amount: number;
        type: string;
        date: string;
        reason: string
    }[];
    onAddTransaction: (transaction: { id: number; amount: number; type: string; date: string; reason:string}) => void;
}

const Transaction: React.FC<TransactionProps> = ({ transactions, onAddTransaction }) => {
    const [formData, setFormData] = useState({
        // id: '',
        amount: '',
        type: 'Debit',
        date: '',
        reason: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTransaction = {
            id: 0,
            amount: Number(formData.amount),
            type: formData.type,
            date: formData.date,
            reason: formData.reason
        };
        onAddTransaction(newTransaction); // Send new transaction to parent
        setFormData({  amount: '', type: 'Debit', date: '' ,reason: ''}); // Reset form
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                    placeholder="Transaction ID"
                    required
                /> */}
                <p> Amount: </p>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Amount"
                    required
                />
                <br />
                <p>Transaction Type: </p>
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                >
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                </select>
                <br />
                <p>Date:  </p>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <p>Reason</p>
                <input 
                    type='text' 
                    name='reason' 
                    value={formData.reason} 
                    onChange={handleInputChange} 
                    required 
                />
                <br />
                <button type="submit">Add Transaction</button>
                <p></p>
            </form>
            <table align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Transaction Type</th>
                        <th>Date</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transaction;
