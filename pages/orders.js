import { useState, useEffect } from 'react'

export default function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        /**retrieve orders from railway app deployment **/
        fetch('containers-us-west-208.railway.app/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h1>Orders</h1>
            <table>
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
                    <th>Product ID</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer_id}</td>
                        <td>{order.product_id}</td>
                        <td>{order.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}