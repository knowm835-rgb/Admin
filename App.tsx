
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider, useAuth } from './contexts/AppContext';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserApprovals from './components/UserApprovals';
import ManageBookings from './components/ManageBookings';
import Broadcasts from './components/Broadcasts';
import Campaigns from './components/Campaigns';
import Leaderboard from './components/Leaderboard';

const AdminLayout: React.FC = () => {
  const { broadcastMessage } = useAuth();
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {broadcastMessage && (
          <div className="bg-truckbhai-primary text-white text-center p-2 animate-pulse">
            📢 {broadcastMessage}
          </div>
        )}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/approvals" element={<UserApprovals />} />
            <Route path="/bookings" element={<ManageBookings />} />
            <Route path="/broadcasts" element={<Broadcasts />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};


const AppContent: React.FC = () => {
    const { isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
        return <Login />;
    }

    return <AdminLayout />;
}

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </AppProvider>
  );
};

export default App;
