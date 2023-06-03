import { IconMapper } from "../../Constants/Icons";
import "./Icon.scss";

const Icon = ({ iconName = "", showLabel = true }) => {
  const {
    height,
    width,
    path,
    xmlns,
    viewbox,
    iconClass,
    fill = "currentColor",
  } = IconMapper.find((icon) => icon.name === iconName);
  return (
    <div className="Icon">
      <svg
        xmlns={xmlns}
        width={width}
        height={height}
        fill={fill}
        className={iconClass}
        viewBox={viewbox}
      >
        <path d={path} />
      </svg>
      {showLabel && <div className="iconLabel">{iconName}</div>}
    </div>
  );
};

export default Icon;
