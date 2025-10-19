import "@/css/TextButton.css";

interface TextButtonProps {
  text: string;
  onClick?: () => void;
  underline?: boolean;
  bold?: boolean;
  size?: number;
  color?: "primary" | "secondary" | "accent";
  className?: string;
}

function TextButton({
  text,
  onClick,
  underline,
  bold,
  size = 16,
  color = "primary",
  className = "",
}: TextButtonProps) {
  return (
    <button
      className={`text-button ${color}
      ${underline ? "underline" : ""} 
      ${bold ? "bold" : ""}
      ${className}`}
      style={size ? { fontSize: `${size}px` } : {}}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default TextButton;
