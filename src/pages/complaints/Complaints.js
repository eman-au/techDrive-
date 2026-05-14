import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ShieldOff, XCircle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import SearchBar from '../../components/common/SearchBar';
import { mockComplaints } from '../../data/mockData';
import './Complaints.css';

const severityMap = { high: 'danger', medium: 'warning', low: 'success' };
const statusMap   = { pending: 'warning', resolved: 'success', rejected: 'danger' };

export default function Complaints() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = mockComplaints.filter(c => {
    const m = c.customer.toLowerCase().includes(search.toLowerCase()) ||
              c.provider.toLowerCase().includes(search.toLowerCase());
    return m && (filter === 'all' || c.status === filter);
  });

  return (
    <div className="complaints animate-fade">
      <PageHeader
        title="Complaints"
        subtitle="Review and resolve customer complaints against service providers."
      />

      <div className="providers__toolbar">
        <SearchBar value={search} onChange={setSearch} placeholder="Search complaints..." />
        <div className="providers__filters">
          {['all','pending','resolved'].map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="complaints__grid">
        {filtered.map(c => (
          <div key={c.id} className={`complaint-card complaint-card--${c.severity}`}>
            <div className="complaint-card__header">
              <div className="complaint-card__id">{c.id}</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <Badge label={c.severity}  type={severityMap[c.severity]} />
                <Badge label={c.status}    type={statusMap[c.status]} />
              </div>
            </div>

            <h3 className="complaint-card__type">{c.type}</h3>
            <p className="complaint-card__desc">{c.description}</p>

            <div className="complaint-card__parties">
              <div className="complaint-party">
                <span className="complaint-party__label">Customer</span>
                <span className="complaint-party__name">{c.customer}</span>
              </div>
              <AlertTriangle size={14} color="var(--warning)" />
              <div className="complaint-party">
                <span className="complaint-party__label">Provider</span>
                <span className="complaint-party__name">{c.provider}</span>
              </div>
              <div className="complaint-party complaint-party--right">
                <span className="complaint-party__label">Date</span>
                <span className="complaint-party__name">{c.date}</span>
              </div>
            </div>

            {c.status === 'pending' && (
              <div className="complaint-card__actions">
                <button className="btn btn--success">
                  <CheckCircle size={13} /> Resolve
                </button>
                <button className="btn btn--danger">
                  <XCircle size={13} /> Reject
                </button>
                <button className="btn btn--outline">
                  <ShieldOff size={13} /> Warn Provider
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}