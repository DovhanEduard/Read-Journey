import Dashboard from 'components/Common/Dashboard/Dashboard';
import FunctionalityDescription from 'components/RecommendedPage/FunctionalityDescription/FunctionalityDescription';
import RecommendedFilterForm from 'components/RecommendedPage/RecommendedFilterForm/RecommendedFilterForm';

const RecommendedPage = () => {
  return (
    <div className="container">
      <Dashboard>
        <RecommendedFilterForm />
        <FunctionalityDescription />
      </Dashboard>
    </div>
  );
};

export default RecommendedPage;
