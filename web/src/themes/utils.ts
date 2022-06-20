export function applyTheme(theme: any) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  })
}

interface CreateThemeBackgroundProps {
  background_primary: string;
  background_secondary: string;
  headline: string;
  paragraph: string;
}

interface CreateThemeColorProps {
  brand_100: string;
  brand_200: string;
  brand_500: string;
  brand_900: string;
}

export function createThemeBackground({
  background_primary,
  background_secondary,
  paragraph,
  headline
}: CreateThemeBackgroundProps) {
  return {
    "--background_primary": background_primary,
    "--background_secondary": background_secondary,
    "--headline": headline,
    "--paragraph": paragraph
  };
}

export function createThemeColor({
  brand_100,
  brand_200,
  brand_500,
  brand_900
}: CreateThemeColorProps) {
  return {
    "--brand_100": brand_100,
    "--brand_200": brand_200,
    "--brand_500": brand_500,
    "--brand_900": brand_900
  };
}