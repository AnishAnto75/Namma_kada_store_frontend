import { useSelector } from "react-redux"
import { selectAllAdminOrders } from "../../../slices/AdminOrdersSlice"
import AdminOrderCard from "../../../components/Admin/Admin_orders/AdminOrderCard"

const AdminOrdersPage = () => {

    const orders = useSelector(selectAllAdminOrders).toReversed()

  return (
    <div className='p-2'>
        <div className='shadow text-2xl text-center text-gray-700 text-medium p-2'>Orders</div>

        <div>
            {orders?.map(order => <AdminOrderCard key={order._id} order={order} />)}
        </div>

    </div>
  )
}

export default AdminOrdersPage