export interface IconProps {
  width: number;
  height: number;
  icon: string;
  className?: string;
  stroke?: string;
  fill?: string;
  linearGradient?: string;
}

const IconJust = ({
  width,
  height,
  icon,
  className,
  stroke,
  fill,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      stroke={stroke}
      fill={fill}
    >
      <use href={`/sprite/sprite.svg#icon-${icon}`} />
    </svg>
  );
};

export default IconJust;
