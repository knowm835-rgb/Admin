
import { User, Booking, Campaign, UserRole, ApprovalStatus, BookingStatus, VehicleType } from './types';

export const MOCK_USERS: User[] = [
  { id: 'usr_001', name: 'Anisul Islam', avatarUrl: 'https://picsum.photos/seed/anisul/200', role: UserRole.Customer, status: ApprovalStatus.Approved, joinDate: '2023-10-01', totalBookings: 25, rank: 'Gold' },
  { id: 'usr_002', name: 'Fatima Begum', avatarUrl: 'https://picsum.photos/seed/fatima/200', role: UserRole.Customer, status: ApprovalStatus.Approved, joinDate: '2023-11-15', totalBookings: 12, rank: 'Silver' },
  { id: 'usr_003', name: 'Kamal Hossain', avatarUrl: 'https://picsum.photos/seed/kamal/200', role: UserRole.Driver, status: ApprovalStatus.Approved, joinDate: '2023-09-20', totalBookings: 45, rank: 'Gold' },
  { id: 'usr_004', name: 'Jamila Khatun', avatarUrl: 'https://picsum.photos/seed/jamila/200', role: UserRole.Driver, status: ApprovalStatus.Approved, joinDate: '2023-12-05', totalBookings: 8, rank: 'Bronze' },
  { id: 'usr_005', name: 'Rahim Sheikh', avatarUrl: 'https://picsum.photos/seed/rahim/200', role: UserRole.Customer, status: ApprovalStatus.Pending, joinDate: '2024-01-10', totalBookings: 0, rank: 'New' },
  { id: 'usr_006', name: 'Sultana Ahmed', avatarUrl: 'https://picsum.photos/seed/sultana/200', role: UserRole.Driver, status: ApprovalStatus.Pending, joinDate: '2024-01-11', totalBookings: 0, rank: 'New' },
  { id: 'usr_007', name: 'David Barman', avatarUrl: 'https://picsum.photos/seed/david/200', role: UserRole.Customer, status: ApprovalStatus.Approved, joinDate: '2023-11-21', totalBookings: 5, rank: 'Bronze' },
];

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'bk_001',
    customer: MOCK_USERS[0],
    driver: MOCK_USERS[2],
    pickupLocation: 'Dhaka, Bangladesh',
    deliveryLocation: 'Chittagong, Bangladesh',
    dateTime: '2024-01-15T10:00:00Z',
    vehicleType: VehicleType.Truck,
    offeredPrice: 15000,
    contactNumber: '01712345678',
    shipmentPhotos: ['https://picsum.photos/seed/ship1/400/300', 'https://picsum.photos/seed/ship2/400/300'],
    status: BookingStatus.Completed,
    duration: '2 days'
  },
  {
    id: 'bk_002',
    customer: MOCK_USERS[1],
    driver: MOCK_USERS[3],
    pickupLocation: 'Sylhet, Bangladesh',
    deliveryLocation: 'Dhaka, Bangladesh',
    dateTime: '2024-01-18T14:30:00Z',
    vehicleType: VehicleType.Pickup,
    offeredPrice: 5000,
    contactNumber: '01812345678',
    shipmentPhotos: ['https://picsum.photos/seed/ship3/400/300', 'https://picsum.photos/seed/ship4/400/300', 'https://picsum.photos/seed/ship5/400/300'],
    status: BookingStatus.InProgress
  },
  {
    id: 'bk_003',
    customer: MOCK_USERS[6],
    driver: null,
    pickupLocation: 'Gazipur, Bangladesh',
    deliveryLocation: 'Narayanganj, Bangladesh',
    dateTime: '2024-01-20T09:00:00Z',
    vehicleType: VehicleType.Motorcycle,
    offeredPrice: 800,
    contactNumber: '01912345678',
    shipmentPhotos: ['https://picsum.photos/seed/ship6/400/300'],
    status: BookingStatus.Posted
  },
  {
    id: 'bk_004',
    customer: MOCK_USERS[0],
    driver: MOCK_USERS[2],
    pickupLocation: 'Khulna, Bangladesh',
    deliveryLocation: 'Barisal, Bangladesh',
    dateTime: '2023-12-25T11:00:00Z',
    vehicleType: VehicleType.Truck,
    offeredPrice: 2500,
    contactNumber: '01712345678',
    shipmentPhotos: ['https://picsum.photos/seed/ship7/400/300', 'https://picsum.photos/seed/ship8/400/300'],
    status: BookingStatus.Completed,
    duration: '1 day'
  },
];

export const MOCK_CAMPAIGNS: Campaign[] = [
    {
        id: 'camp_001',
        name: 'Mystery Gift Campaign',
        description: 'Customers who complete a ride of ৳2000 or more are eligible for a mystery gift. The campaign is active for the first 15 days of launch.',
        isActive: true,
    },
    {
        id: 'camp_002',
        name: 'Referral Reward',
        description: 'Invite friends to TruckBhai and earn ৳50 credit on their first completed ride.',
        isActive: false,
    },
    {
        id: 'camp_003',
        name: 'Launch Offer: Zero Commission',
        description: 'For the first 1000 rides on the platform, TruckBhai will take zero commission.',
        isActive: true,
    }
];

export const I18N_TEXT = {
  en: {
    appTitle: 'TruckBhai Admin',
    dashboard: 'Dashboard',
    userApprovals: 'User Approvals',
    manageBookings: 'Manage Bookings',
    broadcasts: 'Broadcast Messages',
    campaigns: 'Campaign Settings',
    leaderboards: 'Leaderboards',
    logout: 'Logout',
    // ... add more translations
  },
  bn: {
    appTitle: 'ট্রাকভাই অ্যাডমিন',
    dashboard: 'ড্যাশবোর্ড',
    userApprovals: 'ব্যবহারকারী অনুমোদন',
    manageBookings: 'বুকিং পরিচালনা',
    broadcasts: 'ব্রডকাস্ট বার্তা',
    campaigns: 'ক্যাম্পেইন সেটিংস',
    leaderboards: 'লিডারবোর্ড',
    logout: 'প্রস্থান',
    // ... add more translations
  }
};
