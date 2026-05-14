import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import './MainLayout.css';

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="main-layout">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(prev => !prev)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div
        className={`main-layout__content ${collapsed ? 'main-layout__content--collapsed' : ''}`}
      >
        <Navbar
          onMenuClick={() => setMobileOpen(prev => !prev)}
          sidebarCollapsed={collapsed}
        />

        <main className="main-layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}