import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard      from '../pages/dashboard/Dashboard';
import Providers      from '../pages/providers/Providers';
import Verification   from '../pages/verification/Verification';
import Bookings       from '../pages/bookings/Bookings';
import ProviderProfile from '../pages/admin/ProviderProfile/ProviderProfile';
import ComplaintsAndRatings from '../pages/ComplaintsAndRatings';
import Analytics      from '../pages/analytics/Analytics';
import Categories     from '../pages/admin/Categories/Categories';
import Notifications  from '../pages/notifications/Notifications';
import Blocked        from '../pages/blocked/Blocked';
import Settings       from '../pages/settings/Settings';
import PlaceholderPage from '../pages/PlaceholderPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index            element={<Dashboard />} />
        <Route path="providers" element={<Providers />} />
        <Route path="reviews/:id" element={<ProviderProfile />} />
        <Route path="verification" element={<Verification />} />
        <Route path="bookings"  element={<Bookings />} />
        <Route path="complaints" element={<ComplaintsAndRatings />} />
        <Route path="categories" element={<Categories />} />
        <Route path="admin/categories" element={<Categories />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="blocked"   element={<Blocked />} />
        <Route path="settings"  element={<Settings />} />
        <Route path="profile"   element={<PlaceholderPage title="Admin Profile" />} />
      </Route>
    </Routes>
  );
}