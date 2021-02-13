import styled from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';

const SiteBorderStyles = styled.div`
    max-width: 1000px;
    margin: 10rem auto 4rem auto;

    @media (max-width: 999px) {
        margin: 1rem;
    }
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