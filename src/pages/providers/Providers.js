import React, { useState } from 'react';
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
  const [selected, setSelected] = useState(null);

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
                <tr key={p.id}>
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
                      <button className="icon-btn icon-btn--info" title="View" onClick={() => setSelected(p)}>
                        <Eye size={15} />
                      </button>
                      {p.status !== 'approved' && p.status !== 'blocked' && (
                        <button className="icon-btn icon-btn--success" title="Approve">
                          <CheckCircle size={15} />
                        </button>
                      )}
                      {p.status !== 'blocked' && (
                        <button className="icon-btn icon-btn--danger" title="Block">
                          <ShieldOff size={15} />
                        </button>
                      )}
                      {p.status === 'blocked' && (
                        <button className="icon-btn icon-btn--success" title="Unblock">
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

      {/* Provider Detail Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal__header">
              <h2 className="modal__title">{selected.name}</h2>
              <button className="modal__close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="modal__body">
              <div className="modal-grid">
                <div className="modal-field"><label>Type</label><p>{selected.type}</p></div>
                <div className="modal-field"><label>City</label><p>{selected.city}</p></div>
                <div className="modal-field"><label>Phone</label><p>{selected.phone}</p></div>
                <div className="modal-field"><label>Status</label><Badge label={selected.status} type={statusMap[selected.status]} /></div>
                <div className="modal-field"><label>Quiz Score</label><p>{selected.quizScore ?? 'Not attempted'}%</p></div>
                <div className="modal-field"><label>Attempts</label><p>{selected.attempts} of 3</p></div>
                <div className="modal-field"><label>Rating</label><p>{selected.rating ?? 'No ratings yet'}</p></div>
                <div className="modal-field"><label>Completed Jobs</label><p>{selected.completedJobs}</p></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}