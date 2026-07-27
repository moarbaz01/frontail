import { useCallback, useEffect, useRef, useState } from "react";

export function useObjectUrl(): [string | null, (file: File | null) => void] {
  const [url, setUrl] = useState<string | null>(null);
  const urlRef = useRef<string | null>(null);

  const setFile = useCallback((file: File | null) => {
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
    }

    const nextUrl = file ? URL.createObjectURL(file) : null;
    urlRef.current = nextUrl;
    setUrl(nextUrl);
  }, []);

  useEffect(() => {
    return () => {
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
      }
    };
  }, []);

  return [url, setFile];
}
