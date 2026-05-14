import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard      from '../pages/dashboard/Dashboard';
import Providers      from '../pages/providers/Providers';
import Verification   from '../pages/verification/Verification';
import Bookings       from '../pages/bookings/Bookings';
import Complaints     from '../pages/complaints/Complaints';
import Analytics      from '../pages/analytics/Analytics';
import Notifications  from '../pages/notifications/Notifications';
import Blocked        from '../pages/blocked/Blocked';
import Settings       from '../pages/settings/Settings';
import PlaceholderPage from '../pages/PlaceholderPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index            element={<Dashboard />} />
        <Route path="users"     element={<PlaceholderPage title="Users" />} />
        <Route path="providers" element={<Providers />} />
        <Route path="verification" element={<Verification />} />
        <Route path="pending"   element={<PlaceholderPage title="Pending Approvals" />} />
        <Route path="tracking"  element={<PlaceholderPage title="Live Tracking" />} />
        <Route path="bookings"  element={<Bookings />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="reviews"   element={<PlaceholderPage title="Reviews & Ratings" />} />
        <Route path="categories" element={<PlaceholderPage title="Categories" />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="blocked"   element={<Blocked />} />
        <Route path="settings"  element={<Settings />} />
        <Route path="profile"   element={<PlaceholderPage title="Admin Profile" />} />
      </Route>
    </Routes>
  );
}