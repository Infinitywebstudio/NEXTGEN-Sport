export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar: string;
  sport: string;
  position: string;
  level: string;
  bio: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  tags: string[];
}

export interface Media {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  views: number;
  likes: number;
  date: string;
  type: 'video' | 'image';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  online: boolean;
}
