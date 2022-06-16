export function applyTheme(theme: any) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  })
}

interface CreateThemeProps {
  brand_200?: string;
  brand_500?: string;
  brand_900?: string;
  background?: string;
  headline?: string;
  paragraph?: string;
}

export function createTheme({
  brand_200,
  brand_500,
  brand_900,
  background,
  headline,
  paragraph
}: CreateThemeProps) {

  if(brand_500) {
    return {
      "--brand_200": brand_200,
      "--brand_500": brand_500,
      "--brand_900": brand_900,
    };
  }
  
  if(background) {
    return {
      "--background": background,
      "--headline": headline,
      "--paragraph": paragraph
    };
  }
}