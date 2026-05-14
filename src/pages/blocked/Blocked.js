import React from 'react';
import { ShieldOff, RefreshCw, AlertTriangle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import { mockBlocked } from '../../data/mockData';
import './Blocked.css';

export default function Blocked() {
  return (
    <div className="blocked animate-fade">
      <PageHeader
        title="Blocked Accounts"
        subtitle="Accounts blocked manually or automatically by the system."
      />

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Blocked On</th>
              <th>Auto-Blocked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockBlocked.map(b => (
              <tr key={b.id}>
                <td>
                  <div className="provider-name">
                    <div className="provider-avatar" style={{ background: 'var(--danger)' }}>
                      {b.name.charAt(0)}
                    </div>
                    <span className="fw-600">{b.name}</span>
                  </div>
                </td>
                <td>
                  <Badge label={b.type} type={b.type === 'provider' ? 'info' : 'primary'} />
                </td>
                <td style={{ maxWidth: '240px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {b.reason}
                </td>
                <td>{b.date}</td>
                <td>
                  {b.autoBlocked ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--danger)', fontSize: '12px', fontWeight: '600' }}>
                      <AlertTriangle size={13} /> Auto
                    </span>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Manual</span>
                  )}
                </td>
                <td>
                  <button className="btn btn--outline" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <RefreshCw size={12} /> Unblock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}