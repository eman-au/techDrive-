import React, { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import SearchBar from '../../components/common/SearchBar';
import Badge from '../../components/common/Badge';
import EmptyState from '../../components/common/EmptyState';
import { mockBookings } from '../../data/mockData';
import './Bookings.css';

const statusMap = {
  completed: 'success',
  active:    'info',
  pending:   'warning',
  cancelled: 'danger',
};

export default function Bookings() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = mockBookings.filter(b => {
    const matchSearch =
      b.customer.toLowerCase().includes(search.toLowerCase()) ||
      b.provider.toLowerCase().includes(search.toLowerCase()) ||
      b.service.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || b.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="bookings animate-fade">
      <PageHeader
        title="Active Bookings"
        subtitle="Track and manage all service bookings."
      />

      <div className="providers__toolbar">
        <SearchBar value={search} onChange={setSearch} placeholder="Search bookings..." />
        <div className="providers__filters">
          {['all','active','pending','completed','cancelled'].map(f => (
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

      <div className="table-card">
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(b => (
                <tr key={b.id}>
                  <td><span className="booking-id">{b.id}</span></td>
                  <td>{b.customer}</td>
                  <td>{b.provider}</td>
                  <td>{b.service}</td>
                  <td>
                    <span>{b.date}</span>
                    <br />
                    <span className="text-muted text-sm">{b.time}</span>
                  </td>
                  <td><strong>Rs. {b.amount.toLocaleString()}</strong></td>
                  <td><Badge label={b.status} type={statusMap[b.status]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}