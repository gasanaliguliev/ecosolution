import icons from '../../assest/icons/srprite.svg';

export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width} height={height}>
      <use
        href={`${icons}#${iconName}`}
        stroke={stroke || 'transparent'}
        fill={fill || 'transparent'}
      />
    </svg>
  );
};