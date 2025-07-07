type SkillIconProps = {
  icon: React.ElementType;
  hoverColor?: string;
  isDark?: boolean;
};

export function SkillIcon({ icon: Icon, hoverColor, isDark }: SkillIconProps) {
  const baseClasses =
    "size-11 md:size-17 p-2 duration-300 ease-in-out transition-all hover:scale-110 hover:-translate-y-[1px] opacity-80 hover:opacity-100";

  const colorClasses = [
    hoverColor ? `hover:text-[${hoverColor}]` : "",
    isDark ? "dark:hover:text-white" : "",
  ].join(" ");

  return (
    <div className="rounded-4 border-2 border-accent text-gray-300 cursor-pointer transition-all hover:shadow-[0_0_10px_#d1d5db]">
      <Icon className={`${baseClasses} ${colorClasses}`} />
    </div>
  );
}
