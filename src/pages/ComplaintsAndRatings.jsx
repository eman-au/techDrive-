import React from 'react';
import ComplaintHistory from '../components/complaints/ComplaintHistory';
import './ComplaintsAndRatings.css';

const ComplaintsAndRatings = () => {
  return (
    <div className="cr-page animate-fade">
      <div className="cr-header">
        <div className="cr-header-content">
          <h1 className="cr-title">Complaints</h1>
          <p className="cr-subtitle">Manage user feedback, track issues, and monitor service satisfaction</p>
        </div>
        <div className="cr-header-stats">
          <div className="cr-stat-pill">
            <i className="ti ti-clock"></i>
            <span>Avg. response: 24h</span>
          </div>
          <div className="cr-stat-pill cr-stat-success">
            <i className="ti ti-check"></i>
            <span>94% resolved</span>
          </div>
        </div>
      </div>

      <div className="cr-bottom-section">
        <ComplaintHistory />
      </div>
    </div>
  );
};

export default ComplaintsAndRatings;
