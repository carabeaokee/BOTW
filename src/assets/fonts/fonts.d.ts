declare module "*.otf";
declare module "*.tff";
declare module "*.css";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
  const content: any;
  export default content;
}
declare interface ImportMeta {
  env: Record<string, string>;
}
