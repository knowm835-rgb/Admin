
import React from 'react';
import { useAuth } from '../contexts/AppContext';
import { Campaign } from '../types';

const CampaignToggle: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
    const { updateCampaignStatus } = useAuth();

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{campaign.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{campaign.description}</p>
            </div>
            <label htmlFor={`toggle-${campaign.id}`} className="flex items-center cursor-pointer">
                <div className="relative">
                    <input 
                        type="checkbox" 
                        id={`toggle-${campaign.id}`} 
                        className="sr-only"
                        checked={campaign.isActive}
                        onChange={(e) => updateCampaignStatus(campaign.id, e.target.checked)}
                    />
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${campaign.isActive ? 'translate-x-full bg-green-400' : ''}`}></div>
                </div>
                <div className="ml-3 text-gray-700 dark:text-gray-300 font-medium">
                    {campaign.isActive ? 'Active' : 'Inactive'}
                </div>
            </label>
        </div>
    );
};

const Campaigns: React.FC = () => {
    const { campaigns } = useAuth();

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Campaign Settings</h2>
            <div className="space-y-4">
                {campaigns.map(campaign => (
                    <CampaignToggle key={campaign.id} campaign={campaign} />
                ))}
            </div>
        </div>
    );
};

export default Campaigns;
