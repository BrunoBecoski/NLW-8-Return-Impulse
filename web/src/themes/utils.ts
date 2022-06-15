export function applyTheme(theme: any) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  })
}

export function createTheme({
  primary
}) {
  return {
    "--primary": primary
  };
}