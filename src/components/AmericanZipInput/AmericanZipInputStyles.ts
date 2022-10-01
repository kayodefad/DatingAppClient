import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
`;

export const Wrapper = styled.div`
  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    display: block;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 35px;
    padding: 0 10px;
    width: 90vw;
    max-width: 300px;
    outline: none;

    &:focus {
      border: 1px solid #0c3738;
    }
  }

  button {
    border: 1px solid transparent;
    background: green;
    color: #fff;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover:not([disabled]) {
      color: green;
      border: 1px solid green;
      background-color: #fff;
    }

    &:disabled {
      opacity: 70%;
      cursor: not-allowed;
    }
  }
`;
