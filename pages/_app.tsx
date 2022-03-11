import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/general.scss';
import styled from 'styled-components';
import { Layout, Menu, Switch } from 'antd';
import useTranslation from "next-translate/useTranslation";

const { Header, Footer } = Layout;

const StyledLogo = styled.div`
  float: left;
  margin-right: 50px;
  display: flex;
`

const StyledTitleLogo = styled.h2`
  color: #ffffff;
  margin-bottom: 0px;
  font-size: 18px;
`

const StyledSwitch = styled.div`
  float: right;
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
`

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
      router.push(router.asPath, router.asPath, { locale: 'en-US' })
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
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <StyledSwitch>
            <Switch checkedChildren="EN" unCheckedChildren="ID" defaultChecked onClick={(e) => { changeLanguage(e) }} />
          </StyledSwitch>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item onClick={() => router.push('/')} className={router.pathname == '/' ? 'ant-menu-item-selected':'ant-menu-item-unselected'} key="1">{t("common:header-movie-list")}</Menu.Item>
            <Menu.Item onClick={() => router.push('/favourite')} className={router.pathname == '/favourite' ? 'ant-menu-item-selected':'ant-menu-item-unselected'} key="2">{t("common:header-favourite-list")}</Menu.Item>
          </Menu>
        </Header>
        <Component {...pageProps} />
        <Footer style={{ textAlign: 'center' }}>BNC Movie ©{dateVar} Created by Web Developer</Footer>
      </Layout>
    </>
  )
}

export default MyApp