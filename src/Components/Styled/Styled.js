import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
`

export const Separator = styled.hr`
  ${({theme}) => theme.margin.my[4]}
  border: none;
  background: #bbb;
  height: 1px;
`;

export const PaddedLink = styled.a`
  display: inline-block;
  padding-right: .5em;
`;

export const DateTime = styled.time`
  color: ${ ({theme}) => theme.colours.charcoal.lightest };
  display: inline-block;
  padding: 0 .5rem;
`;