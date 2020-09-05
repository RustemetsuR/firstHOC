import React, { useState, useEffect } from 'react';
import axiosOrders from '../../axios-orders';
import OrderItem from '../../components/OrderItem/OrderItem';
import withLoader from '../../hoc/withLoader';

const Orders = () => {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/orders.json');
            const fetchedResponse = Object.keys(response.data).map(id => {
                return { ...response.data[id], id };
            });

            setOrders(fetchedResponse);
            console.log(fetchedResponse);
        }

        fetchData();
    },[]);

    return (
        <div>
            {orders.map(order =>(
                <OrderItem 
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}/>
            ))}
        </div>
    );
};

export default withLoader(Orders,axiosOrders);