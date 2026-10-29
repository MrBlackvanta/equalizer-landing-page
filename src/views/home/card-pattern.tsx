export default function CardPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="312"
      height="468"
      viewBox="0 0 312 468"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M234 78c43.078 0 78 34.922 78 78v156h-56c-55.228 0-100-44.772-100-100v-56c0-43.078 34.922-78 78-78Z"
        className="fill-cyan"
      />
      <rect
        x="78"
        y="78"
        width="78"
        height="78"
        rx="39"
        className="fill-white"
      />
      <rect width="78" height="156" rx="39" className="fill-cyan" />
      <rect y="156" width="156" height="156" rx="78" className="fill-yellow" />
      <g fill="none" strokeWidth="2" className="stroke-white">
        <rect x="1" y="313" width="154" height="154" rx="77" />
        <rect x="40" y="391" width="76" height="76" rx="38" />
      </g>
    </svg>
  );
}
