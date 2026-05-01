import { useEffect, useState, type ImgHTMLAttributes } from "react";
import type { Asset } from "../data/portfolioContent";

type FallbackImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "alt" | "onError" | "src"> & {
  asset: Asset;
  fallbackClassName?: string;
  fallbackLabel?: string;
};

export function FallbackImage({
  asset,
  className = "",
  fallbackClassName = "",
  fallbackLabel,
  ...imageProps
}: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(asset.src);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(asset.src);
    setHasFailed(false);
  }, [asset.src]);

  if (hasFailed) {
    if (asset.decorative) {
      return null;
    }

    const label = fallbackLabel ?? asset.fallbackLabel ?? "";

    return (
      <span
        aria-label={asset.alt}
        className={`asset-fallback ${fallbackClassName}`}
        role={asset.alt ? "img" : undefined}
      >
        {label}
      </span>
    );
  }

  return (
    <img
      {...imageProps}
      alt={asset.decorative ? "" : asset.alt}
      aria-hidden={asset.decorative ? true : imageProps["aria-hidden"]}
      className={className}
      src={currentSrc}
      onError={() => {
        if (asset.fallbackSrc && currentSrc !== asset.fallbackSrc) {
          setCurrentSrc(asset.fallbackSrc);
          return;
        }

        setHasFailed(true);
      }}
    />
  );
}
