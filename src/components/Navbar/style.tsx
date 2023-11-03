import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  width: auto;
  gap: 0.5rem;

  a {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export const CartIcon = styled.span`
  position: relative;
`;

export const CartQuantity = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  border-radius: 50%;
  padding: 2px;
  height: 14px;
  width: 14px;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  font-size: 10px;
`;

export const SearchInput = styled.input`
  width: 150px;
  padding: 0px;
  flex: 1;
  border: 0;
  align-self: auto;

  &:focus {
    outline: none;
  }
`;

interface SearchContainerProps {
  $showsearch: boolean;
}
export const SearchContainer = styled.form<SearchContainerProps>`
  background-color: ${(props) => (props.$showsearch ? "white" : null)};
  display: flex;
  align-items: center;
  padding-left: 8px;
  border-radius: 0.25rem;

  &:focus-within {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
`;
