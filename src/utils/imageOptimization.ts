export const imageConfig = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ["image/webp", "image/avif"],
  quality: 80,
  minimumCacheTTL: 31536000, // 1 year
};

export const getOptimizedImageProps = (
  src: string,
  alt: string,
  priority = false
) => ({
  src,
  alt,
  quality: 80,
  loading: priority ? ("eager" as const) : ("lazy" as const),
  priority,
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
});

export const logoImages = {
  digir: "/digirlogo.png",
  kira: "/kirastorelogo.png",
  travel: "/travellogo.png",
  ohshakes: "/ohshakeslogo.png",
  geto: "/getologo.png",
  zoland: "/zolandlogo.png",
};

export const projectImages = {
  digir: "/digir.png",
  zoland: "/zoland_store_project.png",
  ohshakes: "/oh-shakes.png",
  inspired: "/inspired_events_and_tours_project.png",
  kirastore: "/kirastore.png",
  getotopup: "/getotopup.png",
  likeflames: "/likeflames_project.png",
  winwintopup: "/winwintopup.png",
  // mastertopik: "/mastertopik.png",
};
