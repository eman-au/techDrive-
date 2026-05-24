import React, { useState } from 'react';
import { User, Mail, Phone, Shield, Calendar, Camera, Save, Activity } from 'lucide-react';
import PageHeader from '../../../components/common/PageHeader';
import './AdminProfile.css';

export default function AdminProfile() {
  const [isSaved, setIsSaved] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@techdrive.pk',
    phone: '+92-300-0000000',
    role: 'Super Admin',
    joinedDate: 'May 12, 2025',
    status: 'Active',
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="ap-container">

      <div className="ap-header">
        <PageHeader
          title="Admin Profile"
          subtitle="Manage your personal admin identity and information."
        />

        <div className="ap-status-pill">
          <span className="ap-pulse-dot"></span>
          System Admin Active
        </div>
      </div>

      <div className="ap-grid">

        {/* LEFT PROFILE */}
        <div className="ap-card ap-profile-card">

          <div className="ap-avatar-wrapper">
            <div className="ap-avatar-large">A</div>
            <button className="ap-avatar-overlay">
              <Camera size={14} />
            </button>
          </div>

          <h2 className="ap-profile-name">{profileData.name}</h2>
          <p className="ap-profile-email">{profileData.email}</p>
          <span className="ap-role-tag">{profileData.role}</span>

          <div className="ap-details-list">
            <div className="ap-detail-item">
              <Shield size={16} />
              <span>{profileData.role}</span>
            </div>

            <div className="ap-detail-item">
              <Calendar size={16} />
              <span>{profileData.joinedDate}</span>
            </div>

            <div className="ap-detail-item">
              <Activity size={16} />
              <span className="ap-text-success">{profileData.status}</span>
            </div>
          </div>
        </div>

        {/* RIGHT EDIT */}
        <div className="ap-card">

          <h3 className="ap-card-title">
            <User size={16} />
            Edit Profile
          </h3>

          <form onSubmit={handleSave} className="ap-form">

            <div className="ap-form-grid">

              <div className="ap-form-group">
                <label>Name</label>
                <input
                  className="ap-input"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                />
              </div>

              <div className="ap-form-group">
                <label>Email</label>
                <input
                  className="ap-input"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                />
              </div>

              <div className="ap-form-group">
                <label>Phone</label>
                <input
                  className="ap-input"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                />
              </div>

              <div className="ap-form-group">
                <label>Role</label>
                <input
                  className="ap-input"
                  value={profileData.role}
                  disabled
                />
              </div>

            </div>

            <div className="ap-form-footer">

              <button type="submit" className="ap-btn-save">
                <Save size={16} />
                Save Changes
              </button>

              {isSaved && (
                <span className="ap-success-toast">
                  Saved successfully
                </span>
              )}

            </div>

          </form>
        </div>

      </div>
    </div>
  );
}