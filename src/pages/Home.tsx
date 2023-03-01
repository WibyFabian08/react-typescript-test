import React, { useCallback, useEffect, useState } from 'react';
import { Layout, Menu, theme, List, Card, Skeleton, Button } from 'antd';
import type { MenuProps } from 'antd';

import navMenu from '../constants/navMenu';
import { getNews } from '../api';
import { ArticleType } from '../services/data-types';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState<string>("sport")
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items: MenuProps["items"] = navMenu.map((value, _) => {
        return {
            key: `${value.value}`,
            label: `${value.name}`
        }
    });

    const onClick: MenuProps['onClick'] = (e) => {
        setCategory(e.key)
    };

    const getData = useCallback(() => {
        setIsLoading(true)
        getNews(category).then((res) => {
            setArticles(res.data.articles)
            setIsLoading(false)
        })
    }, [category])

    useEffect(() => {
        getData()
    }, [category, getData])

    return (
        <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    onClick={onClick}
                    mode="horizontal"
                    defaultSelectedKeys={[navMenu[0].value]}
                    items={items}
                />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: colorBgContainer, minHeight: "80vh", padding: "24px" }}>
                    {
                        isLoading ? <List grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 4,
                            xl: 4,
                            xxl: 3,
                        }}
                            dataSource={navMenu}
                            renderItem={_ => (
                                <List.Item>
                                    <Skeleton active />
                                </List.Item>

                            )}
                        >
                        </List> : <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 3,
                                lg: 4,
                                xl: 4,
                                xxl: 3,
                            }}
                            dataSource={articles}
                            renderItem={(item: ArticleType) => (
                                <List.Item>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={item.urlToImage || "https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg"}
                                            />
                                        }
                                        actions={[
                                            <Button>Detail</Button>
                                            //   <SettingOutlined key="setting" />,
                                            //   <EditOutlined key="edit" />,
                                            //   <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                            title={item.author}
                                            description={item.title}
                                        />
                                    </Card>
                                </List.Item>
                            )}
                        />
                    }




                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>News App</Footer>
        </Layout>
    );
};

export default Home;