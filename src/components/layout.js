import React from "react";
import NavBar from './Nav/NavBar';
import styled, {createGlobalStyle} from 'styled-components';
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from 'gatsby';


const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Avenir Next', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
    background: white;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  // background: #ffffff;
  background-image: linear-gradient(55deg, rgba(70, 130, 180, 1), rgba(70, 130, 180, 1), rgba(70, 130, 180, 1), rgba(70, 130, 180, 1), rgba(70, 130, 180, 1),rgba(128, 0, 0, 0.8), rgba(128, 0, 0, 0.9));
  padding: 1em;
  // margin-top: 25px;
  height: 100vh;
`

const Layout = ({ children }) => (
  <>
    
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
    <NavBar/>
    <GlobalStyles />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
    
  </>
)


export default Layout
