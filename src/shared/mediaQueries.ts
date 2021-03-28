const MEDIA_QUERIES: { [key: string]: string } = {
  // ultra small
  us: "@media screen and (max-width: 280px)",
  // extra small
  xs: "@media screen and (max-width: 320px)",
  // small
  sm: "@media screen and (max-width: 576px)",
  // medium
  md: "@media screen and (max-width: 767px)",
  // wide medium
  wm: "@media screen and (max-width: 870px)",
  // large
  lg: "@media screen and (max-width: 991px)",
  // extra large
  xl: "@media screen and (max-width: 1200px)",
  // extra extra large
  xxl: "@media screen and (max-width: 1520px)",
};

export { MEDIA_QUERIES };
