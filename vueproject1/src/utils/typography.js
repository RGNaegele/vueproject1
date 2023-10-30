import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerWeight: '700',
  bodyWeight: '300',
  headerFontFamily: ['Work Sans', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'Helvetica', 'sans-serif'],
  googleFonts: [
    { name: 'Work Sans', styles: ['700', '900'] },
    { name: 'Open Sans', styles: ['300', '400', '700'] },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;
