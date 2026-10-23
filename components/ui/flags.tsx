type FlagProps = { className?: string };

export function BrazilFlag({ className = "" }: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true" focusable="false">
      <rect width="28" height="20" fill="#009c3b" />
      <path d="M14 2.4 26 10 14 17.6 2 10Z" fill="#ffdf00" />
      <circle cx="14" cy="10" r="4.7" fill="#002776" />
      <path d="M9.6 8.7c2.6 1.6 6.2 2.2 8.7 1.7" fill="none" stroke="#fff" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function UnitedStatesFlag({ className = "" }: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true" focusable="false">
      <rect width="28" height="20" fill="#fff" />
      {[0, 3.08, 6.15, 9.23, 12.31, 15.38, 18.46].map((y) => (
        <rect key={y} y={y} width="28" height="1.54" fill="#b22234" />
      ))}
      <rect width="11.2" height="10.77" fill="#3c3b6e" />
      {[1.3, 3.3, 5.3, 7.3, 9.3].map((y) =>
        [1.25, 3.5, 5.75, 8, 10.25].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.42" fill="#fff" />),
      )}
    </svg>
  );
}
