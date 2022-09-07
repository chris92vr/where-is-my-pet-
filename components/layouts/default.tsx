import SiteHeader from '../SiteHeader';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
};

export default DefaultLayout;
