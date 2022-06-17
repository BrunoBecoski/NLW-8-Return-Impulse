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
  background_500?: string;
  background_900?: string;
  text_900?: string;
  text_500?: string;
}

export function createTheme({
  brand_200,
  brand_500,
  brand_900,
  background_500,
  background_900,
  text_500,
  text_900
}: CreateThemeProps) {

  if(brand_500) {
    return {
      "--brand_200": brand_200,
      "--brand_500": brand_500,
      "--brand_900": brand_900,
    };
  }
  
  if(background_500) {
    return {
      "--background_500": background_500,
      "--background_900": background_900,
      "--text_900": text_900,
      "--text_500": text_500
    };
  }
}