import React, { useState } from 'react';
import { 
  User, Mail, Phone, Shield, Lock, Eye, EyeOff, Save, 
  Key, Calendar, ShieldCheck, Smartphone, CheckCircle, Clock 
} from 'lucide-react';
import PageHeader from '../../../components/common/PageHeader';
import './AdminProfile.css';

export default function AdminProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [isSaved, setIsSaved] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@techdrive.pk',
    phone: '+92-300-0000000',
    role: 'Super Admin',
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const loginSessions = [
    { device: 'MacBook Pro · Chrome', location: 'Karachi, PK', status: 'Active Now', time: 'Current Session', current: true },
    { device: 'iPhone 14 · Safari', location: 'Lahore, PK', status: 'Approved', time: '2 hours ago', current: false },
    { device: 'Windows PC · Edge', location: 'Islamabad, PK', status: 'Approved', time: 'Yesterday at 4:15 PM', current: false }
  ];

  const adminPermissions = [
    'Full system configuration',
    'Manage service providers (Approve/Block)',
    'View financial analytics & transaction logs',
    'Resolve service complaints & ratings',
    'Configure system-wide notifications'
  ];

  return (
    <div className="ap-container animate-fade">
      <div className="ap-header">
        <PageHeader 
          title="Admin Profile" 
          subtitle="Manage your administrative credentials, security configurations, and system access rights." 
        />
        <div className="ap-status-pill">
          <ShieldCheck size={16} className="ap-text-success" />
          <span>System Protected (SSL Active)</span>
        </div>
      </div>

      <div className="ap-grid">
        {/* Left Column: Security Status & Details */}
        <div className="ap-left-col">
          {/* Profile Overview Card */}
          <div className="ap-card ap-profile-card">
            <div className="ap-avatar-wrapper">
              <div className="ap-avatar-large">A</div>
              <div className="ap-avatar-overlay">
                <Smartphone size={14} />
                <span>Super Admin</span>
              </div>
            </div>
            <h2 className="ap-profile-name">{profileData.name}</h2>
            <p className="ap-profile-email">{profileData.email}</p>
            <span className="ap-role-tag">{profileData.role}</span>

            <div className="ap-security-meter">
              <div className="ap-meter-header">
                <span className="ap-meter-label">Security Health</span>
                <span className="ap-meter-value">98% Secure</span>
              </div>
              <div className="ap-meter-bar">
                <div className="ap-meter-fill" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>

          {/* Session Security Log */}
          <div className="ap-card">
            <h3 className="ap-card-title">
              <Clock size={16} /> Active Sessions
            </h3>
            <div className="ap-session-list">
              {loginSessions.map((session, index) => (
                <div key={index} className={`ap-session-item ${session.current ? 'ap-session-item--current' : ''}`}>
                  <div className="ap-session-details">
                    <span className="ap-session-device">{session.device}</span>
                    <span className="ap-session-meta">{session.location} · {session.time}</span>
                  </div>
                  <span className={`ap-session-status ${session.current ? 'active' : ''}`}>
                    {session.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form Tabs */}
        <div className="ap-right-col">
          {/* Settings Card */}
          <div className="ap-card ap-settings-card">
            <div className="ap-tabs">
              <button 
                className={`ap-tab-btn ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                <User size={16} /> General Details
              </button>
              <button 
                className={`ap-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                <Lock size={16} /> Password & Security
              </button>
              <button 
                className={`ap-tab-btn ${activeTab === 'permissions' ? 'active' : ''}`}
                onClick={() => setActiveTab('permissions')}
              >
                <Shield size={16} /> Permissions & Access
              </button>
            </div>

            <div className="ap-tab-content">
              {/* Tab 1: General Details */}
              {activeTab === 'general' && (
                <form onSubmit={handleSave} className="ap-form">
                  <div className="ap-form-grid">
                    <div className="ap-form-group">
                      <label>Full Admin Name</label>
                      <div className="ap-input-wrapper">
                        <User className="ap-input-icon" size={16} />
                        <input 
                          type="text" 
                          value={profileData.name} 
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          className="ap-input" 
                        />
                      </div>
                    </div>

                    <div className="ap-form-group">
                      <label>System Email Address</label>
                      <div className="ap-input-wrapper">
                        <Mail className="ap-input-icon" size={16} />
                        <input 
                          type="email" 
                          value={profileData.email} 
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="ap-input" 
                        />
                      </div>
                    </div>

                    <div className="ap-form-group">
                      <label>Registered Phone Number</label>
                      <div className="ap-input-wrapper">
                        <Phone className="ap-input-icon" size={16} />
                        <input 
                          type="text" 
                          value={profileData.phone} 
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="ap-input" 
                        />
                      </div>
                    </div>

                    <div className="ap-form-group">
                      <label>Assigned Access Role</label>
                      <div className="ap-input-wrapper disabled">
                        <Shield className="ap-input-icon" size={16} />
                        <input 
                          type="text" 
                          value={profileData.role} 
                          disabled 
                          className="ap-input" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="ap-form-footer">
                    <button type="submit" className="ap-btn-save">
                      <Save size={16} /> Save Settings
                    </button>
                    {isSaved && (
                      <span className="ap-success-toast">
                        <CheckCircle size={16} /> Settings updated successfully!
                      </span>
                    )}
                  </div>
                </form>
              )}

              {/* Tab 2: Security & Password */}
              {activeTab === 'security' && (
                <form onSubmit={handleSave} className="ap-form">
                  <div className="ap-form-grid ap-form-grid--single">
                    <div className="ap-form-group">
                      <label>Current Secure Password</label>
                      <div className="ap-input-wrapper">
                        <Key className="ap-input-icon" size={16} />
                        <input 
                          type={showPassword ? 'text' : 'password'} 
                          placeholder="••••••••••••"
                          className="ap-input" 
                        />
                        <button 
                          type="button" 
                          className="ap-password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="ap-form-group">
                      <label>New Secure Password</label>
                      <div className="ap-input-wrapper">
                        <Lock className="ap-input-icon" size={16} />
                        <input 
                          type={showPassword ? 'text' : 'password'} 
                          placeholder="Enter new password"
                          className="ap-input" 
                        />
                      </div>
                    </div>

                    <div className="ap-form-group">
                      <label>Confirm New Secure Password</label>
                      <div className="ap-input-wrapper">
                        <Lock className="ap-input-icon" size={16} />
                        <input 
                          type={showPassword ? 'text' : 'password'} 
                          placeholder="Re-enter new password"
                          className="ap-input" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="ap-form-footer">
                    <button type="submit" className="ap-btn-save">
                      <Save size={16} /> Update Password
                    </button>
                    {isSaved && (
                      <span className="ap-success-toast">
                        <CheckCircle size={16} /> Security credentials updated!
                      </span>
                    )}
                  </div>
                </form>
              )}

              {/* Tab 3: Permissions & Access Rights */}
              {activeTab === 'permissions' && (
                <div className="ap-permissions-section">
                  <div className="ap-permissions-header">
                    <ShieldCheck size={24} className="ap-text-success" />
                    <div>
                      <h4 className="ap-perm-title">Access Level: Maximum Security (Super Admin)</h4>
                      <p className="ap-perm-desc">Your profile is configured with system owner access. You hold all administrative authorizations.</p>
                    </div>
                  </div>

                  <hr className="ap-perm-divider" />

                  <div className="ap-perm-list">
                    {adminPermissions.map((permission, index) => (
                      <div key={index} className="ap-perm-item">
                        <CheckCircle size={16} className="ap-text-success" />
                        <span>{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
