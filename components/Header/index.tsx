interface HeaderProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function Header(props: HeaderProps): React.ReactElement {
  const { title, subtitle, children } = props;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
