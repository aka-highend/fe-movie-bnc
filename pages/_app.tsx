import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/general.scss';
import { Layout, Menu, Switch } from 'antd';
import useTranslation from "next-translate/useTranslation";

import { StyledHeader, StyledSwitch, StyledFooter } from './app.style';

const { Header, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [showChild, setShowChild] = useState(false);

  const { t } = useTranslation();

  const currentTime = new Date();
  let dateVar = currentTime.getFullYear();
  
  useEffect(() => {
    setShowChild(true);
  }, []);
  
  if (!showChild) {
    return null;
  }

  const changeLanguage = (event: boolean) => {
    if (event) {
      router.push(router.asPath, router.asPath, { locale: 'en' })
    } else {
      router.push(router.asPath, router.asPath, { locale: 'id' })
    }
  }


  return (
    <>
      <Head>
        <title>BNC Movies App</title>
        <meta property="og:title" content="BNC Neo Movies" key="title" />
          <meta
            name="description"
            content="Platform untuk menonton film."
          />
          <meta
            property="og:description"
            content="Platform untuk menonton film."
            key="description"
          />
          <meta
            name="keywords"
            content="menonton film dengan enak tenang dan nyaman. "
          />
      </Head>
      <Layout>
        <StyledHeader>
          <Header>
            <StyledSwitch>
              <Switch checkedChildren="EN" unCheckedChildren="ID" defaultChecked onClick={(e) => { changeLanguage(e) }} />
            </StyledSwitch>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item onClick={() => router.push('/')} className={router.pathname == '/' ? 'ant-menu-item-selected':'ant-menu-item-unselected'} key="1">
                {t("common:header-movie-list")}
              </Menu.Item>
              <Menu.Item onClick={() => router.push('/favourite')} className={router.pathname == '/favourite' ? 'ant-menu-item-selected':'ant-menu-item-unselected'} key="2">
                {t("common:header-favourite-list")}
              </Menu.Item>
            </Menu>
          </Header>
        </StyledHeader>
        <Component {...pageProps} />
        <StyledFooter>
          <Footer>BNC Movie ©{dateVar} Created by Web Developer</Footer>
        </StyledFooter>
      </Layout>
    </>
  )
}

export default MyApp