import Image from "next/image";
import { getOptimizedImageProps } from "@/utils/imageOptimization";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className,
  sizes 
}: OptimizedImageProps) => {
  const optimizedProps = getOptimizedImageProps(src, alt, priority);
  
  return (
    <Image
      {...optimizedProps}
      width={width}
      height={height}
      className={className}
      sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
      alt={alt}
    />
  );
};

export default OptimizedImage;