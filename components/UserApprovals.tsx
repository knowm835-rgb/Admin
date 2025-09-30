
import React from 'react';
import { useAuth } from '../contexts/AppContext';
import { User, ApprovalStatus, UserRole } from '../types';

const UserApprovals: React.FC = () => {
  const { users, updateUserStatus } = useAuth();
  const pendingUsers = users.filter(user => user.status === ApprovalStatus.Pending);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">User Approval Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Join Date</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {pendingUsers.length > 0 ? pendingUsers.map((user: User) => (
              <tr key={user.id}>
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
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === UserRole.Driver ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {user.role}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{new Date(user.joinDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button onClick={() => updateUserStatus(user.id, ApprovalStatus.Approved)} className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md transition-colors">Approve</button>
                  <button onClick={() => updateUserStatus(user.id, ApprovalStatus.Declined)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md transition-colors">Decline</button>
                </td>
              </tr>
            )) : (
                <tr>
                    <td colSpan={4} className="text-center py-10 text-gray-500 dark:text-gray-400">No pending approvals.</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserApprovals;
