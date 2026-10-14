import Card from './Card';
import Icon from './Icon';

export default function TaskStats({ total, completed, remaining }) {
  const stats = [
    { label: 'Total tasks', value: total, icon: 'list', color: 'blue', note: 'Everything on your list' },
    { label: 'Completed', value: completed, icon: 'check', color: 'green', note: 'Small wins, added up' },
    { label: 'Remaining', value: remaining, icon: 'clock', color: 'amber', note: 'One step at a time' },
  ];

  return (
    <section className="stats-grid" aria-label="Task statistics">
      {stats.map((stat) => (
        <Card className="stat-card" key={stat.label}>
          <div className="stat-top">
            <span className="stat-label">{stat.label}</span>
            <span className={`stat-icon ${stat.color}`}><Icon name={stat.icon} /></span>
          </div>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-note">{stat.note}</p>
        </Card>
      ))}
    </section>
  );
}
