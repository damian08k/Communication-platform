import styled, { css } from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  fontSize,
  margin,
  padding,
  breakpoints: { mobileSmall, mobileXMedium, mobileLarge },
  colors: { black, white },
  headings: { h2, h3 },
} = defaultStylesValues;

export const SectionTitle = styled.h2`
  width: 100%;
  margin ${margin * 2}px 0;
  font-size: ${h2}rem;
  text-align: center;
`;

export const InfoText = styled.p`
  padding: ${padding}px 0;
  font-size: ${fontSize}rem;
  text-align: center;

  ${props =>
    props.practices &&
    css`
      font-weight: bold;
    `}

  ${props =>
    props.noPrivileges &&
    css`
      font-weight: bold;
      color: #fc0303;
    `}
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .welcome-img-container {
    display: none;
    flex-basis: 20%;

    .welcome-img {
      height: 5rem;

      @media ${mobileLarge} {
        height: 7rem;
      }
    }
  }

  .welcome-txt-container {
    flex-basis: 100%;

    .welcome-title {
      margin-bottom: ${margin}px;
    }
  }

  @media ${mobileXMedium} {
    justify-content: space-around;

    .welcome-img-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .welcome-txt-container {
      flex-basis: 70%;
    }
  }
`;

export const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .news-section-article {
    flex-wrap: wrap;
    margin: ${margin * 2}px 0;
  }

  .news-section-news-title {
    flex-basis: 100%;
    text-align: center;
    font-size: ${h3}rem;
  }

  .news-section-images {
    width: 100%;
    max-width: 300px;
    margin: ${margin}px 0;
  }

  .news-section-short-desc {
    flex-basis: 100%;
    text-align: center;
    font-size: ${fontSize}rem;

    .news-section-anchor {
      padding-left: ${padding / 3}px;
    }
  }

  @media ${mobileXMedium} {
    .news-section-news-title {
      text-align: left;
    }

    .news-section-short-desc {
      text-align: left;
    }
  }

  ${props =>
    props.faculty &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;

      .page-list {
        display: flex;
        justify-content: center;
        width: 100%;
        list-style-type: none;

        .page-number {
          margin: ${margin}px;
          font-size: ${fontSize}rem;
          color: rgb(0, 0, 238);
          text-decoration: underline;
          cursor: pointer;
        }
      }
    `}
`;

export const SingupSection = styled.section`
  text-align: center;
  align-self: center;

  .sing-up-button {
    display: block;
    width: 150px;
    margin: ${margin}px auto;
    padding: ${padding}px ${padding * 2}px;
    border: 2px solid ${black};
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${black};

    transition: 0.3s background-color linear, 0.3s color linear;
    cursor: pointer;

    &:hover {
      background-color: ${black};
      color: ${white};
    }
  }
`;

export const HelpSection = styled.section`
  .mobile-help-list {
    list-style-type: none;

    .mobile-help-list-element {
      border-bottom: 2px solid ${black};

      &:first-child {
        border-top: 2px solid ${black};
      }
      &:last-child {
        border-bottom: none;
      }

      .mobile-help-list-category {
        padding-top: ${padding}px;
        font-size: ${h3}rem;
        text-align: center;
      }

      .mobile-help-list-answer {
        padding: ${padding}px 0;
        font-size: ${fontSize}rem;
      }
    }
  }

  .desktop-help-table {
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
    border: 1px solid ${black};
    border-collapse: collapse;

    .help-heading,
    .help-row,
    .help-cell {
      border: 1px solid ${black};
    }

    .help-heading {
      background-color: #e0e7f1;
    }

    .help-heading,
    .help-cell {
      padding: ${padding}px;
      font-size: ${fontSize}rem;
    }

    .help-cell:first-child {
      text-align: center;
    }
  }
`;

export const AuthoritiesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .authority-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background-color: #c9c7c7;

    .authority-img-temporary-text {
      font-size: ${fontSize}rem;
      text-align: center;
    }
  }

  .authority-role,
  .authority-info {
    padding: ${padding / 4}px 0;
    text-align: center;
  }

  .authority-role {
    font-size: ${h3}rem;
  }

  .authority-info {
    font-size: 1.5rem;
  }

  @media ${mobileSmall} {
    flex-direction: row;
    justify-content: flex-start;

    .authority-role,
    .authority-info {
      padding-left: ${padding}px;
      text-align: left;
    }
  }
`;

export const DeanerySection = styled.section`
  min-height: 600px;

  .one-office-info-container {
    margin: ${margin}px 0;

    .office-name {
      font-size: ${h3}rem;
    }

    .office-info {
      font-size: 1.5rem;
      font-weight: bold;
      white-space: pre-line;

      .office-info-value {
        padding-left: ${padding / 2}px;
        font-weight: normal;

        .office-days {
          display: block;
          padding: ${padding / 2}px 0;
        }
      }

      .office-special-info {
        display: block;
        margin-top: ${margin}px;
        max-width: 450px;
      }
    }
  }
`;

export const PlansSection = styled.section`
  text-align: center;

  .plan {
    padding: ${padding}px 0;
  }

  .major-name {
    padding-bottom: ${padding / 2}px;
    font-size: ${h3}rem;
  }

  .studies-type-button {
    display: block;
    margin: ${margin}px 0;
    padding: ${padding}px ${padding * 2}px;
    border: 2px solid ${black};
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${black};

    transition: 0.3s background-color linear, 0.3s color linear;
    cursor: pointer;

    &:hover {
      background-color: ${black};
      color: ${white};
    }
  }
`;

export const PracticesSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .practices-box {
    display: flex;
    flex-direction: column;
    min-height: 250px;

    .practices-box-heading {
      padding: ${padding}px 0;
      font-size: ${h3}rem;
      text-align: center;
    }

    .document-file,
    .practices-offer {
      padding: ${padding / 1.2}px 0;
      font-size: ${fontSize}rem;
    }

    @media ${mobileXMedium} {
      width: 500px;
    }
  }
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img-container {
    height: 80px;

    .logo-img {
      height: 100%;
    }
  }

  .login-form {
    margin: ${margin * 2}px 0;
    .login-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .login-input {
        margin: ${margin}px 0;
        padding: ${padding / 2}px ${padding}px;
        width: 100%;
        border-radius: 20px;
        order: 2;

        &::placeholder {
          font-family: 'Lato';
        }
      }

      .login-label {
        width: 100%;
        font-size: ${fontSize}rem;
        text-align: center;
        order: 1;
      }

      .checbox-input {
        margin-right: ${margin}px;
      }

      .checkbox-label {
        font-size: 1.5rem;
      }

      .login-button {
        margin: ${margin}px auto;
      }

      .checkbox-label,
      .login-button {
        cursor: pointer;
      }
    }
  }

  .login-info-text {
    .question-sign {
      display: inline-block;
      margin-right: ${margin / 2}px;
      width: 25px;
      height: 25px;
      line-height: 20px;
      border: 2px solid black;
      border-radius: 50%;
      font-weight: bold;
      text-align: center;
    }
  }

  @media ${mobileXMedium} {
    flex-direction: row;
    flex-wrap: wrap;

    .img-container {
      margin-left: ${margin * 5}px;
      flex-basis: 40%;
      order: 2;

      .logo-img {
        display: block;
        margin: 0 auto;
      }
    }

    .login-form {
      flex-basis: 50%;
      order: 1;

      .login-container {
        justify-content: center;
        flex-wrap: no-wrap;

        .login-input {
          width: 80%;
        }

        .login-label {
          width: 20%;
        }
      }
    }

    .login-info-text {
      flex-basis: 100%;
      order: 3;
    }
  }
`;

export const RegisterSection = styled.section`
  max-width: 600px;

  .register-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .register-input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .register-input {
        padding: ${padding / 2}px ${padding}px;
        width: 100%;
        order: 2;

        &::placeholder {
          font-family: 'Lato';
        }
      }

      .register-label {
        margin: ${margin}px 0;
        flex-basis: 100%;
        font-size: ${fontSize}rem;
      }

      @media ${mobileXMedium} {
        flex-direction: row;
        justify-content: center;

        .register-input {
          max-width: 400px;
        }

        .register-label {
          flex-basis: 30%;
          padding-right: ${padding}px;
          text-align: right;
        }
      }
    }

    .register-button {
      margin-top: ${margin + 5}px;
    }
  }
`;

export const MessagesSection = styled.section.attrs(props => ({
  isShowMessage: props.isShowMessage,
}))`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  min-height: 250px;
  border: 2px solid black;

  .messages-left-panel {
    display: ${({ isShowMessage }) => (isShowMessage ? 'none' : 'block')};

    .user-last-messages {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${padding / 2}px ${padding}px;
      border-bottom: 2px solid black;
      cursor: pointer;

      .user-message-info {
        flex-basis: 75%;
        text-align: center;

        .user-message-last-message {
          font-size: 1.4rem;
        }
      }
    }
  }

  .messages-right-panel {
    display: ${({ isShowMessage }) => (isShowMessage ? 'block' : 'none')};
        
    .message {
      display: flex;
      justify-content: space-between;

      &:nth-child(2n) {
        .message-left-panel {
          order: 2;
        }

        .message-right-panel {
          order: 1;
        }
      }

      .message-left-panel {
        display: none;
        margin: ${margin}px;
        width: 20%;
        text-align: center;
      }

      .message-right-panel {
        margin: ${margin}px;
        padding: ${padding / 2}px;
        border: 1px solid black;

        .user-message {
          font-size: ${fontSize}rem;
        }

        .message-author {
          padding-top: ${padding}px;
          font-size: 1.2rem;
          font-weight: bold;
          text-align: right;
        }
      }
    }
  }

  .user-message-user-name {
    padding-bottom: ${padding / 1.5}px;
    font-size: ${fontSize}rem;
    font-weight: bold;
  }

  .panel-title-ico {
    width: 50px;
    height: 50px;
  }

  .panel-heading {
    display: flex;
    justify-content: space-between;
    align-self: center;
    flex-wrap: wrap;
    font-size: 1.5rem;
    border-bottom: 2px solid black;

    .panel-title-ico,
    .panel-title-user-name {
      display: none;
    }

    .panel-title {
      display: flex;
      align-items: center;
      padding: ${padding / 2}px;

      .close-message {
        width: 25px;
        line-height: 25px;
        border: 2px solid black;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
      }
    }
  }

  @media ${mobileXMedium} {
    flex-direction: row;
    border-width: 1px;

    .messages-left-panel {
      display: block;
      border: 1px solid black;

    }

    .messages-right-panel {
      display: block;
      border: 1px solid black;

      .message {
        .message-left-panel {
          display: block;
        }

        .message-right-panel {
          width: 400px;
        }
      }
    }

    .message-author {
      display: none;
    }

    .panel-heading {
      height: 60px;

      .panel-title {
        flex-grow: 1;
        justify-content: center;

        .panel-title-ico,
        .panel-title-user-name {
          display: block;
        }

        .panel-title-ico {
          margin: 0 ${margin}px 0 20%;
        }

        .close-message {
          display: none;
        }
      }
  }
`;
