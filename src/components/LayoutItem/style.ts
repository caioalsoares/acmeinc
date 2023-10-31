import styled from "styled-components";

interface TypographyProps {
  fontWeight?: "300" | "600";
  fontSize?: string;
}

export const Typography = styled.span<TypographyProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;
