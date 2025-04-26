import styled, { css } from "styled-components";

export const NotesList = styled.ul`
  list-style: none;
  overflow: hidden;
`;

export const NoteItem = styled.li`
  margin: 1em;
`;

export const NoteLink = styled.a<{ index: number }>`
  text-decoration: none;
  color: #000;
  background: #ffc;
  display: block;
  height: 13em;
  width: 13em;
  padding: 2em;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transition: transform 0.15s linear;
  transform: rotate(-6deg);

  position: relative;
  ${({ index }) => {
    if ((index + 1) % 2 === 0) {
      return css`
        transform: rotate(4deg);
        top: 5px;
        background: #cfc;
      `;
    }
    if ((index + 1) % 3 === 0) {
      return css`
        transform: rotate(-3deg);
        top: -5px;
        background: #ccf;
      `;
    }
    if ((index + 1) % 5 === 0) {
      return css`
        transform: rotate(5deg);
        top: -10px;
      `;
    }
  }}

  &:hover,
  &:focus {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    z-index: 5;
  }
`;

export const NoteTitle = styled.h2`
  font-size: 1.4em;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 2px solid #333;
`;

export const NoteText = styled.p`
  font-family: "Reenie Beanie", Arial, sans-serif;
  font-size: 1.2em;
  margin-top: 5px;
`;
