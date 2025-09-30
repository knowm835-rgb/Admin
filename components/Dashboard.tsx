
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AppContext';
import { ApprovalStatus, BookingStatus } from '../types';

interface StatCardProps {
    title: string;
    value: number | string;
    icon: string;
    linkTo: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, linkTo }) => (
  <Link to={linkTo} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4">
    <div className="text-4xl">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">{title}</p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </Link>
);


const Dashboard: React.FC = () => {
    const { users, bookings, campaigns } = useAuth();

    const pendingApprovals = users.filter(u => u.status === ApprovalStatus.Pending).length;
    const ongoingBookings = bookings.filter(b => b.status === BookingStatus.InProgress || b.status === BookingStatus.Accepted).length;
    const activeCampaigns = campaigns.filter(c => c.isActive).length;
    const totalBookings = bookings.length;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Pending Approvals" value={pendingApprovals} icon="⏳" linkTo="/approvals" />
        <StatCard title="Ongoing Bookings" value={ongoingBookings} icon="🚛" linkTo="/bookings" />
        <StatCard title="Active Campaigns" value={activeCampaigns} icon="🎁" linkTo="/campaigns" />
        <StatCard title="Total Bookings" value={totalBookings} icon="📦" linkTo="/bookings" />
      </div>
    </div>
  );
};

export default Dashboard;
