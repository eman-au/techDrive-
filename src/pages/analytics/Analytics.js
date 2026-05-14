import React from 'react';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, AreaChart, Area
} from 'recharts';
import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';
import { TrendingUp, Users, Star, DollarSign } from 'lucide-react';
import { weeklyBookings, providerGrowth, complaintTrend } from '../../data/mockData';
import '../dashboard/Dashboard.css';

export default function Analytics() {
  return (
    <div className="dashboard animate-fade">
      <PageHeader
        title="Reports & Analytics"
        subtitle="Platform-wide insights and performance metrics."
      />

      <div className="dashboard__stats">
        <StatCard title="Total Bookings"    value="1,842" icon={TrendingUp} color="blue"   change={14} />
        <StatCard title="Total Providers"   value="186"   icon={Users}      color="cyan"   change={8}  />
        <StatCard title="Avg. Rating"       value="4.6"   icon={Star}       color="yellow" change={2}  />
        <StatCard title="Revenue Facilitated" value="₨ 2.4M" icon={DollarSign} color="green" change={22} />
      </div>

      <div className="dashboard__charts">
        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Booking Volume (Weekly)</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={weeklyBookings}>
              <defs>
                <linearGradient id="bookGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#2563EB" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="bookings" fill="url(#bookGrad)" stroke="#2563EB" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Provider Growth (6 Months)</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={providerGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="electricians" stroke="#2563EB" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="plumbers"     stroke="#06B6D4" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-card__header">
          <h3 className="chart-card__title">Complaints vs Resolutions</h3>
        </div>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={complaintTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="complaints" name="Complaints" fill="#EF4444" radius={[4,4,0,0]} />
            <Bar dataKey="resolved"   name="Resolved"   fill="#10B981" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}