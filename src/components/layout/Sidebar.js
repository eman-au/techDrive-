import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, Briefcase, ClipboardCheck, Clock,
  MapPin, BookOpen, AlertCircle, Star, Tag, Bell,
  BarChart2, ShieldOff, Settings, UserCircle, ChevronLeft,
  ChevronRight, Zap
} from 'lucide-react';
import './Sidebar.css';

const menuItems = [
  { label: 'Dashboard',         icon: LayoutDashboard, path: '/' },
  { label: 'Service Providers', icon: Briefcase,        path: '/providers' },
  { label: 'Verification Tests',icon: ClipboardCheck,   path: '/verification' },
  { label: 'Active Bookings',   icon: BookOpen,          path: '/bookings' },
  { label: 'Complaints',        icon: AlertCircle,       path: '/complaints' },
  { label: 'Categories',        icon: Tag,               path: '/categories' },
  { label: 'Notifications',     icon: Bell,              path: '/notifications' },
  { label: 'Reports & Analytics',icon: BarChart2,        path: '/analytics' },
  { label: 'Blocked Accounts',  icon: ShieldOff,         path: '/blocked' },
  { label: 'Settings',          icon: Settings,          path: '/settings' },
  { label: 'Admin Profile',     icon: UserCircle,        path: '/profile' },
];

export default function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={onMobileClose} />
      )}

      <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''} ${mobileOpen ? 'sidebar--mobile-open' : ''}`}>
        {/* Logo */}
        <div className="sidebar__logo">
          <div className="sidebar__logo-icon">
            <Zap size={20} />
          </div>
          {!collapsed && (
            <span className="sidebar__logo-text">Tech Drive</span>
          )}
          <button className="sidebar__toggle" onClick={onToggle}>
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="sidebar__nav">
          {menuItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`
              }
              title={collapsed ? label : ''}
              onClick={onMobileClose}
            >
              <Icon size={18} className="sidebar__item-icon" />
              {!collapsed && <span className="sidebar__item-label">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom user card */}
        {!collapsed && (
          <div className="sidebar__user">
            <div className="sidebar__user-avatar">A</div>
            <div>
              <p className="sidebar__user-name">Admin User</p>
              <p className="sidebar__user-role">Super Admin</p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}