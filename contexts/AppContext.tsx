
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { User, Booking, Campaign, ApprovalStatus } from '../types';
import { MOCK_USERS, MOCK_BOOKINGS, MOCK_CAMPAIGNS } from '../constants';

type Language = 'en' | 'bn';

interface AppContextType {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
  users: User[];
  bookings: Booking[];
  campaigns: Campaign[];
  updateUserStatus: (userId: string, status: ApprovalStatus) => void;
  updateCampaignStatus: (campaignId: string, isActive: boolean) => void;
  language: Language;
  toggleLanguage: () => void;
  broadcastMessage: string | null;
  setBroadcastMessage: (message: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [campaigns, setCampaigns] = useState<Campaign[]>(MOCK_CAMPAIGNS);
  const [language, setLanguage] = useState<Language>('en');
  const [broadcastMessage, setBroadcastMessage] = useState<string | null>(null);

  const login = (user: string, pass: string) => {
    if (user === 'Jack' && pass === 'Admin@123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const updateUserStatus = useCallback((userId: string, status: ApprovalStatus) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, status } : user
      )
    );
  }, []);

  const updateCampaignStatus = useCallback((campaignId: string, isActive: boolean) => {
    setCampaigns(prevCampaigns =>
      prevCampaigns.map(campaign =>
        campaign.id === campaignId ? { ...campaign, isActive } : campaign
      )
    );
  }, []);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'bn' : 'en'));
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        users,
        bookings,
        campaigns,
        updateUserStatus,
        updateCampaignStatus,
        language,
        toggleLanguage,
        broadcastMessage,
        setBroadcastMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAuth must be used within an AppProvider');
  }
  return context;
};
