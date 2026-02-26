import logosRow1 from "@/assets/partners/logos-row1.webp";
import logosRow2 from "@/assets/partners/logos-row2.webp";

interface PartnerLogosProps {
  className?: string;
  variant?: "dark" | "light";
}

const PartnerLogos = ({ className = "", variant = "dark" }: PartnerLogosProps) => {
  const baseClass = variant === "light" 
    ? "opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" 
    : "opacity-90 hover:opacity-100 transition-all duration-300";

  return (
    <div className={`flex flex-col items-center gap-6 px-4 ${className}`}>
      <img src={logosRow1} alt="Zurich, Standard Life, Aviva" className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto ${baseClass}`} />
      <img src={logosRow2} alt="Irish Life, New Ireland Assurance, Royal London" className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto ${baseClass}`} />
    </div>
  );
};

export default PartnerLogos;