
export enum UserRole {
  Customer = 'Customer',
  Driver = 'Driver',
}

export enum ApprovalStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Declined = 'Declined',
}

export enum BookingStatus {
  Posted = 'Posted',
  Accepted = 'Accepted',
  InProgress = 'In Progress',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export enum VehicleType {
    Truck = 'Truck',
    Pickup = 'Pickup',
    Motorcycle = 'Motorcycle',
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  role: UserRole;
  status: ApprovalStatus;
  joinDate: string;
  totalBookings: number;
  rank: 'Gold' | 'Silver' | 'Bronze' | 'New';
}

export interface Booking {
  id: string;
  customer: User;
  driver: User | null;
  pickupLocation: string;
  deliveryLocation: string;
  dateTime: string;
  vehicleType: VehicleType;
  offeredPrice: number;
  contactNumber: string;
  shipmentPhotos: string[];
  status: BookingStatus;
  duration?: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}
