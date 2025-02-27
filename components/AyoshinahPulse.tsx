type AyoshinahPulseProps = {
  size?: "small" | "medium" | "large";
  color?: "purple" | "green" | "blue" | "black";
};

const AyoshinahPulse = ({
  size = "medium",
  color = "black",
}: AyoshinahPulseProps) => {
  const sizeClass = {
    small: "w-4 h-4",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const colorClass = {
    black: "bg-black text-white shadow-[0_0_0_8px_4px_rgba(0,0,0,0.5)]",
    green: "bg-green-500 text-white shadow-[0_0_0_8px_4px_rgba(34,197,94,0.5)]",
    blue: "bg-blue-500 text-white shadow-[0_0_0_8px_4px_rgba(59,130,246,0.5)]",
    purple:
      "bg-purple-500 text-white shadow-[0_0_0_8px_4px_rgba(168,85,247,0.5)]",
  };
  return (
    <div
      className={`${sizeClass[size]} ${colorClass[color]} rounded-full animate-pulse`}
    />
  );
};

export default AyoshinahPulse;
