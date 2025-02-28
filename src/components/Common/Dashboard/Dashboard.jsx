import css from './Dashboard.module.css';

const Dashboard = ({ children }) => {
  return <div className={css.divashboard}>{children}</div>;
};

export default Dashboard;
