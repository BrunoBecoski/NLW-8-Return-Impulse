interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onSurface?: boolean;
}

export function PrimaryButton({ 
  onSurface = false, 
  children,
  className,
  ...rest
}: PrimaryButtonProps) {
  if(onSurface) {
    return (
      <button
        className={`
          py-4 px-8 rounded-full
          font-bold text-lg uppercase 
        bg-brand-50 text-brand-500 border-[1px] border-brand-500 
        hover:bg-brand-500 hover:text-brand-50 hover:border-brand-50 transition-colors
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
          flex items-center justify-center gap-4 py-4 px-8 rounded-full 
          font-bold text-sm uppercase 
        bg-brand-500 text-brand-50 
        hover:bg-brand-900 transition-colors
          ${className}
        `}
        {...rest}
      >
        {children}
      </button>
    );
  }
}