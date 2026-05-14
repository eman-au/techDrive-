// ── Mock Users ──
export const mockUsers = [
  { id: 1, name: 'Ayesha Khan',    email: 'ayesha@email.com', phone: '0300-1234567', status: 'active',   joined: '2024-01-15', bookings: 12 },
  { id: 2, name: 'Bilal Ahmed',    email: 'bilal@email.com',  phone: '0311-9876543', status: 'active',   joined: '2024-02-20', bookings: 7  },
  { id: 3, name: 'Sara Malik',     email: 'sara@email.com',   phone: '0321-5555555', status: 'inactive', joined: '2024-03-05', bookings: 3  },
  { id: 4, name: 'Usman Tariq',    email: 'usman@email.com',  phone: '0333-1111222', status: 'active',   joined: '2024-04-10', bookings: 19 },
  { id: 5, name: 'Fatima Zahra',   email: 'fatima@email.com', phone: '0345-9999000', status: 'blocked',  joined: '2024-05-01', bookings: 1  },
];

// ── Mock Providers ──
export const mockProviders = [
  { id: 1, name: 'Ali Raza',       type: 'Electrician', phone: '0300-2222333', city: 'Rawalpindi', status: 'approved', quizScore: 87, attempts: 1, rating: 4.8, completedJobs: 34 },
  { id: 2, name: 'Hassan Qureshi', type: 'Plumber',     phone: '0311-4444555', city: 'Islamabad',  status: 'pending',  quizScore: null, attempts: 0, rating: null, completedJobs: 0 },
  { id: 3, name: 'Imran Butt',     type: 'Electrician', phone: '0321-6666777', city: 'Lahore',     status: 'approved', quizScore: 72, attempts: 2, rating: 4.2, completedJobs: 21 },
  { id: 4, name: 'Nadeem Shah',    type: 'Plumber',     phone: '0333-8888999', city: 'Rawalpindi', status: 'blocked',  quizScore: 41, attempts: 3, rating: 2.1, completedJobs: 5  },
  { id: 5, name: 'Tariq Mehmood',  type: 'Electrician', phone: '0345-0000111', city: 'Islamabad',  status: 'pending',  quizScore: 65, attempts: 1, rating: null, completedJobs: 0 },
  { id: 6, name: 'Kamran Iqbal',   type: 'Plumber',     phone: '0300-3333444', city: 'Karachi',    status: 'approved', quizScore: 91, attempts: 1, rating: 4.9, completedJobs: 58 },
];

// ── Mock Bookings ──
export const mockBookings = [
  { id: 'BK001', customer: 'Ayesha Khan',  provider: 'Ali Raza',       service: 'Electrical Wiring',  date: '2024-06-01', time: '10:00 AM', status: 'completed', amount: 2500 },
  { id: 'BK002', customer: 'Usman Tariq',  provider: 'Kamran Iqbal',   service: 'Pipe Repair',        date: '2024-06-02', time: '02:00 PM', status: 'active',    amount: 1800 },
  { id: 'BK003', customer: 'Bilal Ahmed',  provider: 'Imran Butt',     service: 'Fan Installation',   date: '2024-06-03', time: '11:00 AM', status: 'pending',   amount: 1200 },
  { id: 'BK004', customer: 'Sara Malik',   provider: 'Ali Raza',       service: 'Switchboard Repair', date: '2024-06-04', time: '03:00 PM', status: 'completed', amount: 800  },
  { id: 'BK005', customer: 'Fatima Zahra', provider: 'Kamran Iqbal',   service: 'Bathroom Fitting',   date: '2024-06-05', time: '09:00 AM', status: 'cancelled', amount: 3200 },
];

// ── Mock Complaints ──
export const mockComplaints = [
  { id: 'CP001', customer: 'Ayesha Khan',  provider: 'Nadeem Shah',  type: 'Poor workmanship', date: '2024-06-01', status: 'pending',  severity: 'high',   description: 'Work done was not up to standard. Pipe started leaking again next day.' },
  { id: 'CP002', customer: 'Bilal Ahmed',  provider: 'Imran Butt',   type: 'Late arrival',     date: '2024-06-02', status: 'resolved', severity: 'low',    description: 'Provider arrived 2 hours late without notification.' },
  { id: 'CP003', customer: 'Usman Tariq',  provider: 'Ali Raza',     type: 'Overcharging',     date: '2024-06-03', status: 'pending',  severity: 'medium', description: 'Charged more than the agreed amount after job completion.' },
  { id: 'CP004', customer: 'Sara Malik',   provider: 'Nadeem Shah',  type: 'Rude behavior',    date: '2024-06-04', status: 'pending',  severity: 'high',   description: 'Provider was disrespectful and used inappropriate language.' },
];

// ── Mock Blocked Accounts ──
export const mockBlocked = [
  { id: 1, name: 'Nadeem Shah',  type: 'provider', reason: 'Failed quiz 3 times + multiple complaints', date: '2024-05-30', autoBlocked: true },
  { id: 2, name: 'Fatima Zahra', type: 'customer', reason: 'Repeated fraudulent booking cancellations',   date: '2024-06-01', autoBlocked: false },
];

// ── Chart Data ──
export const weeklyBookings = [
  { day: 'Mon', bookings: 12, completed: 10, cancelled: 2 },
  { day: 'Tue', bookings: 19, completed: 16, cancelled: 3 },
  { day: 'Wed', bookings: 14, completed: 12, cancelled: 2 },
  { day: 'Thu', bookings: 22, completed: 18, cancelled: 4 },
  { day: 'Fri', bookings: 31, completed: 27, cancelled: 4 },
  { day: 'Sat', bookings: 28, completed: 24, cancelled: 4 },
  { day: 'Sun', bookings: 16, completed: 14, cancelled: 2 },
];

export const providerGrowth = [
  { month: 'Jan', electricians: 12, plumbers: 8  },
  { month: 'Feb', electricians: 18, plumbers: 11 },
  { month: 'Mar', electricians: 25, plumbers: 16 },
  { month: 'Apr', electricians: 31, plumbers: 22 },
  { month: 'May', electricians: 38, plumbers: 28 },
  { month: 'Jun', electricians: 44, plumbers: 33 },
];

export const serviceCategories = [
  { name: 'Electrical', value: 45 },
  { name: 'Plumbing',   value: 55 },
];

export const complaintTrend = [
  { month: 'Jan', complaints: 4, resolved: 3 },
  { month: 'Feb', complaints: 7, resolved: 6 },
  { month: 'Mar', complaints: 5, resolved: 5 },
  { month: 'Apr', complaints: 9, resolved: 7 },
  { month: 'May', complaints: 6, resolved: 5 },
  { month: 'Jun', complaints: 4, resolved: 4 },
];