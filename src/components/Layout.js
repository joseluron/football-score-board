import styled from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';

const SiteBorderStyles = styled.div`
    max-width: 1000px;
    margin: 10rem auto 4rem auto;
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <SiteBorderStyles>
                {children}
            </SiteBorderStyles>
        </>
    )
}

export default Layout;