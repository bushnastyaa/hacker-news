import { Oval } from 'react-loader-spinner';

const ContentLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Oval color="#00B5B8" secondaryColor="#009193" height={80} width={80} />
    </div>
  );
};

export default ContentLoader;
