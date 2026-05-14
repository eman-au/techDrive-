import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Badge from '../../components/common/Badge';
import { mockProviders } from '../../data/mockData';
import './Verification.css';

export default function Verification() {
  const applicants = mockProviders.filter(p => p.status !== 'approved');

  return (
    <div className="verification animate-fade">
      <PageHeader
        title="Verification Tests"
        subtitle="Review applicant quiz scores and manage approvals."
      />

      <div className="verification__grid">
        {applicants.map(p => (
          <div key={p.id} className={`verif-card verif-card--${p.status}`}>
            <div className="verif-card__top">
              <div className="provider-avatar">{p.name.charAt(0)}</div>
              <div>
                <h3 className="verif-card__name">{p.name}</h3>
                <p className="verif-card__type">{p.type} · {p.city}</p>
              </div>
              <Badge
                label={p.status}
                type={p.status === 'blocked' ? 'danger' : 'warning'}
              />
            </div>

            {/* Score section */}
            <div className="verif-card__score-section">
              <div className="verif-score-item">
                <span className="verif-score-label">Quiz Score</span>
                <span className={`verif-score-value ${p.quizScore !== null ? (p.quizScore >= 70 ? 'pass' : 'fail') : ''}`}>
                  {p.quizScore !== null ? `${p.quizScore}%` : 'Not taken'}
                </span>
              </div>
              <div className="verif-score-item">
                <span className="verif-score-label">Attempts</span>
                <div className="attempt-dots">
                  {[0,1,2].map(i => (
                    <span key={i} className={`attempt-dot ${i < p.attempts ? 'attempt-dot--used' : ''}`} />
                  ))}
                  <span className="attempt-count">{p.attempts}/3</span>
                </div>
              </div>
            </div>

            {/* Auto-blocked warning */}
            {p.attempts >= 3 && (
              <div className="verif-card__blocked-notice">
                <AlertTriangle size={14} />
                Auto-blocked: Exceeded maximum attempts
              </div>
            )}

            {/* Actions */}
            <div className="verif-card__actions">
              {p.status !== 'blocked' && p.quizScore !== null && (
                <>
                  <button className="btn btn--success">
                    <CheckCircle size={14} /> Approve
                  </button>
                  <button className="btn btn--danger">
                    <XCircle size={14} /> Reject
                  </button>
                </>
              )}
              {p.status === 'blocked' && (
                <button className="btn btn--outline">Unblock Account</button>
              )}
              {p.quizScore === null && p.status !== 'blocked' && (
                <p className="verif-card__pending-text">Waiting for quiz attempt</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}