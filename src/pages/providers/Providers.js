import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, ShieldOff, CheckCircle, XCircle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import SearchBar from '../../components/common/SearchBar';
import Badge from '../../components/common/Badge';
import EmptyState from '../../components/common/EmptyState';
import { mockProviders } from '../../data/mockData';
import './Providers.css';

const statusMap = {
  approved: 'success',
  pending:  'warning',
  blocked:  'danger',
};

export default function Providers() {
  const [search, setSearch]     = useState('');
  const [filter, setFilter]     = useState('all');
  const navigate = useNavigate();

  const filtered = mockProviders.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.type.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="providers animate-fade">
      <PageHeader
        title="Service Providers"
        subtitle="Manage and monitor all registered electricians and plumbers."
      />

      {/* Filters bar */}
      <div className="providers__toolbar">
        <SearchBar value={search} onChange={setSearch} placeholder="Search providers..." />
        <div className="providers__filters">
          {['all','approved','pending','blocked'].map(f => (
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

      {/* Table */}
      <div className="table-card">
        {filtered.length === 0 ? (
          <EmptyState title="No providers found" subtitle="Try adjusting your search or filter." />
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Type</th>
                <th>City</th>
                <th>Quiz Score</th>
                <th>Attempts</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} onClick={() => navigate(`/reviews/${p.id}`)} style={{ cursor: 'pointer' }}>
                  <td>
                    <div className="provider-name">
                      <div className="provider-avatar">{p.name.charAt(0)}</div>
                      <div>
                        <p className="fw-600">{p.name}</p>
                        <p className="text-muted text-sm">{p.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Badge label={p.type} type={p.type === 'Electrician' ? 'info' : 'primary'} />
                  </td>
                  <td>{p.city}</td>
                  <td>
                    {p.quizScore !== null ? (
                      <span className={`score ${p.quizScore >= 70 ? 'score--pass' : 'score--fail'}`}>
                        {p.quizScore}%
                      </span>
                    ) : '—'}
                  </td>
                  <td>
                    <span className={`attempts ${p.attempts >= 3 ? 'attempts--max' : ''}`}>
                      {p.attempts}/3
                    </span>
                  </td>
                  <td>{p.rating ? `⭐ ${p.rating}` : '—'}</td>
                  <td><Badge label={p.status} type={statusMap[p.status]} /></td>
                  <td>
                    <div className="table-actions">
                      <button className="icon-btn icon-btn--info" title="View" onClick={(e) => { e.stopPropagation(); navigate(`/reviews/${p.id}`); }}>
                        <Eye size={15} />
                      </button>
                      {p.status !== 'approved' && p.status !== 'blocked' && (
                        <button className="icon-btn icon-btn--success" title="Approve" onClick={(e) => e.stopPropagation()}>
                          <CheckCircle size={15} />
                        </button>
                      )}
                      {p.status !== 'blocked' && (
                        <button className="icon-btn icon-btn--danger" title="Block" onClick={(e) => e.stopPropagation()}>
                          <ShieldOff size={15} />
                        </button>
                      )}
                      {p.status === 'blocked' && (
                        <button className="icon-btn icon-btn--success" title="Unblock" onClick={(e) => e.stopPropagation()}>
                          <XCircle size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal Removed */}
    </div>
  );
}