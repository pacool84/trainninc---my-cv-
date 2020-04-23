import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="demo-big-content" >
    <Layout>
        <Header style={{display: 'flex'}} className="header-nav" title="Francsico Lopez Campos" scroll>
            <Navigation>
                <Link to="/">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
                <a to="/">Link</a>
            </Navigation>

            
        </Header>

        <Drawer title="@babasyop">
            <Navigation style={{color: 'white'}}>
                <Link to="/">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="contact">Contact</Link>
                <a to="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
