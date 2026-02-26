import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Set the worker source using Vite's import.meta.url for proper bundling
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

interface PDFThumbnailProps {
  pdfUrl: string;
  alt: string;
  className?: string;
}

const PDFThumbnail = ({ pdfUrl, alt, className = "" }: PDFThumbnailProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadPDF = async () => {
      if (!canvasRef.current) return;

      try {
        setIsLoading(true);
        setHasError(false);

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Calculate scale to fit nicely
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(400 / viewport.width, 300 / viewport.height);
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        await page.render({
          canvasContext: context,
          viewport: scaledViewport,
        }).promise;

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading PDF thumbnail:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl]);

  if (hasError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">PDF Preview</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Loading...</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity`}
        aria-label={alt}
      />
    </div>
  );
};

export default PDFThumbnail;