import {Dimensions} from 'react-native';

export const vw = Dimensions.get('window').width / 100;
export const vh = Dimensions.get('window').height / 100;

export const theme: DefaultTheme = {
  color: {
    black: '#231b16',
    tableBlack: '#695f57',
    tableGray: '#b1a396',
    light: '#f5f3e8',
    bgColor: '#fff8f2',
    carrot: '#ff9140',
    vegetable: '#11f0a3',
    citrus: '#ffe839',
    white: '#ffffff',
    deepOrange: '#e78034',
    deepGreen: '#83ba9e',
    deepYellow: '#fae01e',
  },
  text: {
    xlarge: '24px',
    large: '20px',
    medium: '16px',
    small: '12px',
  },
  lineHeight: {
    xlarge: '32px',
    large: '27px',
    medium: '22px',
    small: '16px',
    none: '0',
  },
};

interface DefaultTheme {
  color: {
    [key: string]: string;
    black: string;
    tableBlack: string;
    tableGray: string;
    light: string;
    bgColor: string;
    carrot: string;
    vegetable: string;
    citrus: string;
    white: string;
    deepOrange: string;
    deepGreen: string;
    deepYellow: string;
  };

  text: {
    [key: string]: string;
    xlarge: string;
    large: string;
    medium: string;
    small: string;
  };
  lineHeight: {
    [key: string]: string;
    xlarge: string;
    large: string;
    medium: string;
    small: string;
  };
}
