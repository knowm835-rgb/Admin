
import React from 'react';
import { useAuth } from '../contexts/AppContext';
import { User, UserRole } from '../types';

const LeaderboardTable: React.FC<{ title: string; users: User[] }> = ({ title, users }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rank</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Bookings/Rides</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tier</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap text-lg font-bold">{index < 3 ? ['🥇', '🥈', '🥉'][index] : index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white font-semibold">{user.totalBookings}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.rank === 'Gold' ? 'bg-yellow-200 text-yellow-800' : 
                  user.rank === 'Silver' ? 'bg-gray-200 text-gray-800' :
                  user.rank === 'Bronze' ? 'bg-orange-200 text-orange-800' : 'bg-blue-200 text-blue-800'
                }`}>
                  {user.rank}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


const Leaderboard: React.FC = () => {
  const { users } = useAuth();
  
  const customers = users
    .filter(u => u.role === UserRole.Customer)
    .sort((a, b) => b.totalBookings - a.totalBookings);
    
  const drivers = users
    .filter(u => u.role === UserRole.Driver)
    .sort((a, b) => b.totalBookings - a.totalBookings);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Leaderboards</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeaderboardTable title="Top Customers" users={customers} />
        <LeaderboardTable title="Top Drivers" users={drivers} />
      </div>
    </div>
  );
};

export default Leaderboard;
