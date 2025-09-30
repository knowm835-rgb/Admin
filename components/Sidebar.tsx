
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AppContext';
import { I18N_TEXT } from '../constants';

const Sidebar: React.FC = () => {
  const { language } = useAuth();
  const text = I18N_TEXT[language];

  const commonClasses = "flex items-center px-4 py-2 text-gray-300 hover:bg-blue-700 hover:text-white rounded-md transition-colors duration-200";
  const activeClasses = "bg-blue-700 text-white";

  const navItems = [
    { to: "/", icon: "🏠", label: text.dashboard },
    { to: "/approvals", icon: "👥", label: text.userApprovals },
    { to: "/bookings", icon: "📦", label: text.manageBookings },
    { to: "/broadcasts", icon: "📢", label: text.broadcasts },
    { to: "/campaigns", icon: "🎁", label: text.campaigns },
    { to: "/leaderboard", icon: "🏆", label: text.leaderboards },
  ];

  return (
    <div className="flex flex-col w-64 bg-truckbhai-secondary text-white">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <span className="text-3xl mr-2">🚛</span>
        <span className="text-white text-2xl font-bold">TruckBhai</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => `${commonClasses} ${isActive ? activeClasses : ''}`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
