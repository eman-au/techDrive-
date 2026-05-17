import React from 'react';
import {
  Users, Briefcase, CheckCircle, Clock,
  BookOpen, AlertCircle, ShieldOff
} from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';
import StatCard from '../../components/common/StatCard';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import {
  weeklyBookings, providerGrowth, complaintTrend,
  serviceCategories, mockBookings, mockComplaints, mockProviders
} from '../../data/mockData';
import './Dashboard.css';

const PIE_COLORS = ['#2563EB', '#06B6D4'];

const recentApprovals = mockProviders.filter(p => p.status === 'approved').slice(0, 4);

export default function Dashboard() {
  return (
    <div className="dashboard animate-fade">
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening on Tech Drive."
      />

      {/* Stats Grid */}
      <div className="dashboard__stats">
        <StatCard title="Total Users"           value="1,248" icon={Users}       color="blue"   change={12} changeLabel="vs last month" />
        <StatCard title="Total Providers"       value="186"   icon={Briefcase}   color="cyan"   change={8}  changeLabel="vs last month" />
        <StatCard title="Active Providers"      value="142"   icon={CheckCircle} color="green"  change={5}  changeLabel="online today" />
        <StatCard title="Pending Verifications" value="24"    icon={Clock}       color="yellow" change={-3} changeLabel="vs last week" />
        <StatCard title="Active Bookings"       value="37"    icon={BookOpen}    color="blue"   change={18} changeLabel="vs yesterday" />
        <StatCard title="Complaints"            value="12"    icon={AlertCircle} color="red"    change={-8} changeLabel="vs last week" />
        <StatCard title="Blocked Accounts"      value="9"     icon={ShieldOff}   color="red"    />
      </div>

      {/* Charts Row 1 */}
      <div className="dashboard__charts">
        {/* Weekly Bookings */}
        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Weekly Bookings</h3>
            <span className="chart-card__badge">This Week</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={weeklyBookings} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card-bg)', 
                  borderColor: 'var(--border)', 
                  borderRadius: '12px', 
                  boxShadow: 'var(--shadow-lg)',
                  color: 'var(--text-primary)'
                }}
                itemStyle={{ color: 'var(--text-primary)' }}
                labelStyle={{ color: 'var(--text-secondary)', fontWeight: 600 }}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Bar dataKey="completed" name="Completed" fill="var(--primary)" radius={[4,4,0,0]} />
              <Bar dataKey="cancelled" name="Cancelled"  fill="var(--danger)" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Provider Growth */}
        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Provider Growth</h3>
            <span className="chart-card__badge">6 Months</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={providerGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card-bg)', 
                  borderColor: 'var(--border)', 
                  borderRadius: '12px', 
                  boxShadow: 'var(--shadow-lg)',
                  color: 'var(--text-primary)'
                }}
                itemStyle={{ color: 'var(--text-primary)' }}
                labelStyle={{ color: 'var(--text-secondary)', fontWeight: 600 }}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Line type="monotone" dataKey="electricians" name="Electricians" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, stroke: 'var(--card-bg)', fill: 'var(--primary)' }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="plumbers"     name="Plumbers"     stroke="var(--cyan)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, stroke: 'var(--card-bg)', fill: 'var(--cyan)' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="dashboard__charts dashboard__charts--small">
        {/* Service Distribution */}
        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Service Distribution</h3>
          </div>
          <div className="chart-card__pie-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={serviceCategories} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                  {serviceCategories.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? 'var(--primary)' : 'var(--cyan)'} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card-bg)', 
                    borderColor: 'var(--border)', 
                    borderRadius: '12px', 
                    boxShadow: 'var(--shadow-lg)',
                    color: 'var(--text-primary)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Complaints Trend */}
        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Complaints Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={complaintTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card-bg)', 
                  borderColor: 'var(--border)', 
                  borderRadius: '12px', 
                  boxShadow: 'var(--shadow-lg)',
                  color: 'var(--text-primary)'
                }}
                itemStyle={{ color: 'var(--text-primary)' }}
                labelStyle={{ color: 'var(--text-secondary)', fontWeight: 600 }}
              />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Bar dataKey="complaints" name="Submitted" fill="var(--danger)" radius={[4,4,0,0]} />
              <Bar dataKey="resolved"   name="Resolved"  fill="var(--success)" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Live Activity */}
      <div className="dashboard__activity">
        {/* Recent Bookings */}
        <div className="activity-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Recent Bookings</h3>
          </div>
          <div className="activity-list">
            {mockBookings.slice(0, 4).map(b => (
              <div key={b.id} className="activity-item">
                <div>
                  <p className="activity-item__primary">{b.customer} → {b.provider}</p>
                  <p className="activity-item__secondary">{b.service} · {b.date}</p>
                </div>
                <Badge
                  label={b.status}
                  type={b.status === 'completed' ? 'success' : b.status === 'cancelled' ? 'danger' : b.status === 'active' ? 'info' : 'warning'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Complaints */}
        <div className="activity-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Recent Complaints</h3>
          </div>
          <div className="activity-list">
            {mockComplaints.slice(0, 4).map(c => (
              <div key={c.id} className="activity-item">
                <div>
                  <p className="activity-item__primary">{c.customer} vs {c.provider}</p>
                  <p className="activity-item__secondary">{c.type} · {c.date}</p>
                </div>
                <Badge
                  label={c.severity}
                  type={c.severity === 'high' ? 'danger' : c.severity === 'medium' ? 'warning' : 'success'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recently Approved */}
        <div className="activity-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Recently Approved</h3>
          </div>
          <div className="activity-list">
            {recentApprovals.map(p => (
              <div key={p.id} className="activity-item">
                <div className="activity-item__avatar">{p.name.charAt(0)}</div>
                <div>
                  <p className="activity-item__primary">{p.name}</p>
                  <p className="activity-item__secondary">{p.type} · {p.city} · ⭐ {p.rating}</p>
                </div>
                <Badge label={p.type === 'Electrician' ? 'Elec' : 'Plmb'} type="primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}