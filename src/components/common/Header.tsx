import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      {/* <StyledLink to="/login" isActive={pathname === "/login"}>
        Login
      </StyledLink> */}
      <img src="/musicswap.png" alt="logo" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(73.25deg, #000000 7.24%, #4d4b4b 108.45%);
  padding: 0 16px;
  height: 117px;
  top: 0;
`;

// const Link = ({ isActive, children, ...props }) => {
//   return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
// };

// const StyledLink = styled(Link)`
//   color: #00CC9B;
//   display: block;
//   padding: 4px 8px;
//   text-decoration: none;
//   box-sizing: border-box;
//   text-align: center;
//   margin: auto 0;
// `;
