import '../styles/index.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
// import Footer from '@/ui-kit/footer'
// import Header from '@/ui-kit/header'
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const location = useRouter();
  console.log(location.pathname);
  let isDark = location.pathname !== '/home';
  let isNotMain = location.pathname !== '/';
  return (
    <>
      {isNotMain && <Header {...pageProps} isDark={isDark} />}
      <Component {...pageProps} />
      {isNotMain && <Footer />}
    </>
  );
};

export default MyApp;
