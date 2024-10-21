import React, { useState } from 'react';

interface TransactionProps {
    transactions: {
        id: number;
        amount: number;
        type: string;
        date: string;
    }[];
    onAddTransaction: (transaction: { id: number; amount: number; type: string; date: string; }) => void;
}

const Transaction: React.FC<TransactionProps> = ({ transactions, onAddTransaction }) => {
    const [formData, setFormData] = useState({
        // id: '',
        amount: '',
        type: 'Debit',
        date: ''
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
        };
        onAddTransaction(newTransaction); // Send new transaction to parent
        setFormData({  amount: '', type: 'Debit', date: '' }); // Reset form
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
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Amount"
                    required
                />
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                >
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                </select>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Transaction</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Debit/Credit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transaction;
