import { useState } from 'react'

export default function AddOrder() {
    const [customerId, setCustomerId] = useState('')
    const [productId, setProductId] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const order = {
            customer_id: customerId,
            product_id: productId,
            quantity: quantity
        }
        /**add an order to railway app deployment and postgressql database **/

        fetch('containers-us-west-208.railway.app', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h1>Add Order</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer ID:
                    <input
                    type="text"
                    value={customerId}
                    onChange={event => setCustomerId(event.target.value)}
                />
                </label>
                <label>
                    Product ID:
                    <input
                        type="text"
                        value={productId}
                        onChange={event => setProductId(event.target.value)}
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={event => setQuantity(event.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}