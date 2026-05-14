import React, { useState } from 'react';
import { Save, Eye, EyeOff } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import './Settings.css';

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    newProvider: true,
    complaint: true,
    bookings: false,
    blocked: true,
  });

  return (
    <div className="settings animate-fade">
      <PageHeader title="Settings" subtitle="Manage your admin account and platform preferences." />

      <div className="settings__grid">
        {/* Profile Section */}
        <div className="settings-card">
          <h3 className="settings-card__title">Admin Profile</h3>
          <div className="settings-card__body">
            <div className="settings__avatar-section">
              <div className="settings__avatar">A</div>
              <div>
                <h4 style={{ fontWeight: 700 }}>Admin User</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>admin@techdrive.pk</p>
              </div>
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label>Full Name</label>
                <input type="text" defaultValue="Admin User" className="form-input" />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input type="email" defaultValue="admin@techdrive.pk" className="form-input" />
              </div>
              <div className="form-field">
                <label>Phone</label>
                <input type="text" defaultValue="+92-300-0000000" className="form-input" />
              </div>
              <div className="form-field">
                <label>Role</label>
                <input type="text" defaultValue="Super Admin" className="form-input" disabled />
              </div>
            </div>
            <button className="btn btn--primary">
              <Save size={14} /> Save Profile
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="settings-card">
          <h3 className="settings-card__title">Security</h3>
          <div className="settings-card__body">
            <div className="form-grid form-grid--single">
              <div className="form-field">
                <label>Current Password</label>
                <div className="input-group">
                  <input type={showPassword ? 'text' : 'password'} className="form-input" placeholder="Enter current password" />
                  <button className="input-group__icon" onClick={() => setShowPassword(p => !p)}>
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
              <div className="form-field">
                <label>New Password</label>
                <input type="password" className="form-input" placeholder="Enter new password" />
              </div>
              <div className="form-field">
                <label>Confirm Password</label>
                <input type="password" className="form-input" placeholder="Confirm new password" />
              </div>
            </div>
            <button className="btn btn--primary"><Save size={14} /> Update Password</button>
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-card">
          <h3 className="settings-card__title">Notification Preferences</h3>
          <div className="settings-card__body">
            {Object.entries({
              newProvider: 'New provider registrations',
              complaint:   'New complaint submissions',
              bookings:    'All booking updates',
              blocked:     'Account auto-blocking events',
            }).map(([key, label]) => (
              <div key={key} className="settings-toggle-row">
                <span>{label}</span>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={notifications[key]}
                    onChange={e => setNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                  />
                  <span className="toggle__slider" />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}