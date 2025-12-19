import React from 'react';

export const Section = ({ children, className = "", title = "", subtitle = "" }: any) => (
  <section className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    {title && (
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gummer-navy dark:text-white">{title}</h2>
        {subtitle && <p className="mt-4 text-gummer-steel">{subtitle}</p>}
      </div>
    )}
    {children}
  </section>
);

export const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white dark:bg-gummer-dark rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 transition-all hover:shadow-md ${className}`}>
    {children}
  </div>
);

export const Button = ({ children, variant = "primary", ...props }: any) => {
  const styles = {
    primary: "bg-gummer-blue hover:bg-gummer-navy text-white",
    secondary: "bg-gummer-steel hover:bg-gummer-blue text-white",
    outline: "border-2 border-gummer-blue text-gummer-blue hover:bg-gummer-blue hover:text-white"
  };
  return (
    <button 
      className={`px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 ${styles[variant as keyof typeof styles]}`} 
      {...props}
    >
      {children}
    </button>
  );
};