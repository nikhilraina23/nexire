import logoImage from "C:/Users/Hp/Downloads/project (1)/dist/assets/1763805206079.jpg-removebg-preview.png";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="Nexire"
      className={`block object-contain ${className ?? ''}`}
    />
  )
}

