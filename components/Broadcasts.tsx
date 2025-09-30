
import React, { useState } from 'react';
import { useAuth } from '../contexts/AppContext';

const Broadcasts: React.FC = () => {
    const { setBroadcastMessage, broadcastMessage } = useAuth();
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSendBroadcast = () => {
        if (message.trim()) {
            setBroadcastMessage(message.trim());
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            setMessage('');
        }
    };

    const handleClearBroadcast = () => {
        setBroadcastMessage(null);
    }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Broadcast a Message</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">This message will be displayed as a banner to all logged-in users.</p>
      
      <div className="mb-4">
        <label htmlFor="broadcast-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="broadcast-message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-truckbhai-primary focus:ring-truckbhai-primary sm:text-sm dark:bg-gray-700 dark:text-white"
          placeholder="e.g., Mystery Gift Campaign is now live!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      
      <div className="flex items-center justify-between">
        <button
          onClick={handleSendBroadcast}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-truckbhai-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Broadcast
        </button>
        {sent && <span className="text-green-500">Message sent successfully!</span>}
      </div>

        {broadcastMessage && (
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">Current Active Broadcast:</h3>
                <p className="mt-2 text-blue-700 dark:text-blue-300">"{broadcastMessage}"</p>
                <button onClick={handleClearBroadcast} className="mt-3 text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">Clear Broadcast</button>
            </div>
        )}
    </div>
  );
};

export default Broadcasts;
