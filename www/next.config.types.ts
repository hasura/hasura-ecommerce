// Taken from Canary branch of Next.js at time of writing, before this was officially published
// See: https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L21

import os from "os";
import { Header, Rewrite, Redirect } from "next/dist/lib/load-custom-routes";
import { DomainLocales } from "next/dist/next-server/server/config";

export const VALID_LOADERS = [
  "default",
  "imgix",
  "cloudinary",
  "akamai",
] as const;

export type LoaderValue = typeof VALID_LOADERS[number];

export type ImageConfig = {
  deviceSizes: number[];
  imageSizes: number[];
  loader: LoaderValue;
  path: string;
  domains?: string[];
};

export const imageConfigDefault: ImageConfig = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  path: "/_next/image",
  loader: "default",
  domains: [],
};

export type NextConfig = { [key: string]: any } & {
  i18n?: {
    locales: string[];
    defaultLocale: string;
    domains?: DomainLocales;
    localeDetection?: false;
  } | null;

  headers?: () => Promise<Header[]>;
  rewrites?: () => Promise<Rewrite[]>;
  redirects?: () => Promise<Redirect[]>;

  trailingSlash?: boolean;

  future: {
    strictPostcssConfiguration: boolean;
    excludeDefaultMomentLocales: boolean;
    webpack5: boolean;
  };
};

const defaultConfig: NextConfig = {
  env: [],
  webpack: null,
  webpackDevMiddleware: null,
  distDir: ".next",
  assetPrefix: "",
  configOrigin: "default",
  useFileSystemPublicRoutes: true,
  generateBuildId: () => null,
  generateEtags: true,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  target: "server",
  poweredByHeader: true,
  compress: true,
  analyticsId: process.env.VERCEL_ANALYTICS_ID || "",
  images: imageConfigDefault,
  devIndicators: {
    buildActivity: true,
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 2,
  },
  amp: {
    canonicalBase: "",
  },
  basePath: "",
  sassOptions: {},
  trailingSlash: false,
  i18n: null,
  productionBrowserSourceMaps: false,
  experimental: {
    cpus: Math.max(
      1,
      (Number(process.env.CIRCLE_NODE_TOTAL) ||
        (os.cpus() || { length: 1 }).length) - 1
    ),
    plugins: false,
    profiling: false,
    sprFlushToDisk: true,
    reactMode: "legacy",
    workerThreads: false,
    pageEnv: false,
    optimizeFonts: false,
    optimizeImages: false,
    optimizeCss: false,
    scrollRestoration: false,
    scriptLoader: false,
    stats: !!process.env.VERCEL_ANALYTICS_ID,
  },
  future: {
    strictPostcssConfiguration: false,
    excludeDefaultMomentLocales: false,
    webpack5: Number(process.env.NEXT_PRIVATE_TEST_WEBPACK5_MODE) > 0,
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  reactStrictMode: false,
};

export type NextDefaultConfig = Partial<typeof defaultConfig>;
