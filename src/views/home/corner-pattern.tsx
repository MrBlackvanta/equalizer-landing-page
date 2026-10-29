export default function CornerPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="312" height="468" viewBox="0 0 312 468" {...props}>
      <path
        d="M78 0c43.078 0 78 34.922 78 78v234h-56C44.772 312 0 267.228 0 212V78C0 34.922 34.922 0 78 0Z"
        className="fill-cyan"
      />
      <path
        d="M156 312h78c43.078 0 78 34.922 78 78s-34.922 78-78 78-78-34.922-78-78v-78Z"
        className="fill-slate"
      />
      <rect
        x="234"
        y="78"
        width="78"
        height="78"
        rx="39"
        className="fill-yellow"
      />
      <rect x="234" width="78" height="78" rx="39" className="fill-orange" />
      <rect y="312" width="156" height="156" rx="78" className="fill-orange" />
      <rect x="156" width="78" height="156" rx="39" className="fill-slate" />
      <g fill="none" strokeWidth="2" className="stroke-slate">
        <rect x="157" y="157" width="154" height="154" rx="77" />
        <rect x="157" y="196" width="76" height="76" rx="38" />
      </g>
    </svg>
  );
}
