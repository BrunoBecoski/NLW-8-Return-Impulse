export function applyTheme(theme: any) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  })
}

interface CreateThemeSurfaceProps {
  surface_primary: string;
  surface_secondary: string;
  stroke: string;
  headline: string;
  paragraph: string;
}

interface CreateThemeColorProps {
  brand_100: string;
  brand_200: string;
  brand_500: string;
  brand_900: string;
}

export function createThemeSurface({
  surface_primary,
  surface_secondary,
  stroke,
  paragraph,
  headline
}: CreateThemeSurfaceProps) {
  return {
    "--surface_primary": surface_primary,
    "--surface_secondary": surface_secondary,
    "--stroke": stroke,
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