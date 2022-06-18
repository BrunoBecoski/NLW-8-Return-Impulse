interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onSurface?: boolean;
  }
  
  export function SecondaryButton({ 
    onSurface = false, 
    children,
    className,
    ...rest
  }: SecondaryButtonProps) {
    if(onSurface) {
      return (
        <button
          className={`
            py-2 px-6 rounded-full
            font-bold text-sm uppercase 
          bg-brand-500 text-onSurface border-[1px] border-onSurface 
          hover:bg-onSurface hover:text-brand-500 transition-colors
            ${className}
          `}
          {...rest}
        >
          {children}
        </button>
      );
    } else {
      return (
        <button
          className={`
            py-2 px-6 rounded-full 
            font-bold text-sm uppercase 
          bg-brand-200 text-brand-500 border-[1px] border-brand-500
          hover:bg-brand-500 hover:text-onSurface transition-colors
            ${className}
          `}
          {...rest}
        >
          {children}
        </button>
      );
    }
  }