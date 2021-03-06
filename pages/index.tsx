import axios from 'axios';
import { SyntheticEvent, useContext, useEffect, useState, useMemo } from 'react';
import type { NextPage } from 'next';
import { ContentProvider, ContentStore } from '../content/content-ctx';
import useTranslation from "next-translate/useTranslation";

import { Layout, Row, Col, Skeleton, message } from 'antd';

import Card from '../components';
import { StyledContent, StyledLayoutBackground, StyledTitleLayout, StyledDescLayout } from './app.style';

const { Content } = Layout;

export type HandleScrollProps = SyntheticEvent<HTMLDivElement>

const PER_PAGE = 30;


const Home: NextPage = () => {
  const { contentState, contentDispatch } = useContext(ContentStore)
  const [ page, setPage ] = useState(1)
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleScroll = (e: HandleScrollProps) => {
    const { currentTarget } = e;
    if (currentTarget.scrollHeight - currentTarget.scrollTop === currentTarget.clientHeight && page < totalPage) {
      setIsLoading(true)
      setTimeout(() => {
        setPage(page+1)
        setIsLoading(false);
      }, 500)
    }
  };

  useEffect(() => {

    if (!localStorage.getItem('like')) {
      const newArr: any[] = []
      localStorage.setItem('like', JSON.stringify(newArr));
    }

    if (!localStorage.getItem('favourite')) {
      const newArr: any[] = []
      localStorage.setItem('favourite', JSON.stringify(newArr));
    }

    setIsLoading(true);
    axios.get('https://private-2fff44-bncfetest.apiary-mock.com/movies').then((res) => {
      setTotalPage(Math.ceil(res.data.data.length / PER_PAGE))
      contentDispatch({
        type: 'SET_CONTENT_LIST',
        payload: {data: res.data.data}
      })
      setIsLoading(false);
    }).catch((err) => {
      message.error(err.response);
      contentDispatch({
        type: 'SET_ERROR_CONTENT_LIST'
      })
      setIsLoading(false);
    })
  }, [])


  const dataList = useMemo(() => {
    const data = [...contentState.data]
    const totalDataLoad = page * PER_PAGE;

    return data.splice(0, totalDataLoad);
  }, [page, contentState.data])
  
  
  return (
    <StyledContent>
      <Content className="site-layout">
        <StyledLayoutBackground>
          <div className="site-layout-background" onScroll={handleScroll}>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
                <StyledTitleLayout>
                  <h2>{t("common:title")}</h2>
                </StyledTitleLayout>
                <StyledDescLayout>
                  <h3>{t("common:desc")}</h3>
                </StyledDescLayout>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              {dataList.map((item, i) => (
                <Col key={i} className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                  <Card id={item.id} title={item.title} year={item.year} rating={item.rating} imageUrl={item.imageUrl} unFavouriteAction={() => { return false }} />
                </Col>
              ))}
            </Row>
            {isLoading && 
              <>
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton className="w-100 skeleton-card" active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                </Row>
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton className="w-100 skeleton-card" active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                </Row>
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton className="w-100 skeleton-card" active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                </Row>
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton className="w-100 skeleton-card" active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <Skeleton active/>
                  </Col>
                </Row>
              </>
            }
          </div>
        </StyledLayoutBackground>
      </Content>
    </StyledContent>
  )
}

const ContentState: NextPage = () => {
  return (
    <ContentProvider>
      <Home />
    </ContentProvider>
  )
}

export default ContentState
