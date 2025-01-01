type EllipseTextProp = { str: string; len: number; id: string };

const EllipseText = ({ str, len, id }: EllipseTextProp) => {
  return str.length > len ? (
    <span
      data-tooltip-content={str}
      data-tooltip-delay-hide={1}
      data-tooltip-id={id}
      style={{wordBreak: 'break-word'}}
    >
      {str
        .split('')
        .splice(0, len)
        .join('')
        .padEnd(len + 3, '.')}
    </span>
  ) : (
    str
  );
};

export default EllipseText;
