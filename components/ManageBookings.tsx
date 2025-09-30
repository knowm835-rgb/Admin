
import React from 'react';
import { useAuth } from '../contexts/AppContext';
import { Booking, BookingStatus } from '../types';

const getStatusColor = (status: BookingStatus) => {
    switch(status) {
        case BookingStatus.Completed: return 'bg-green-100 text-green-800';
        case BookingStatus.InProgress: return 'bg-blue-100 text-blue-800';
        case BookingStatus.Posted: return 'bg-yellow-100 text-yellow-800';
        case BookingStatus.Accepted: return 'bg-indigo-100 text-indigo-800';
        case BookingStatus.Cancelled: return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}


const ManageBookings: React.FC = () => {
  const { bookings } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Manage Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Booking ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer / Driver</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Route</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price (৳)</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {bookings.map((booking: Booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500 dark:text-gray-400">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{booking.customer.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{booking.driver?.name || 'Unassigned'}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{booking.pickupLocation}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">to {booking.deliveryLocation}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{booking.offeredPrice.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                    </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
