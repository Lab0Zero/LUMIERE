"use client";

interface LinkHoverProps {
  text: string;
  href: string;
  className?: string;
}

/**
 * GSP-style link hover: text slides up to reveal duplicate.
 * Uses CSS keyframes for the slide-up effect.
 */
export default function LinkHover({ text, href, className = "" }: LinkHoverProps) {
  return (
    <a href={href} className={`link-hover-slide ${className}`}>
      <span className="link-hover-inner">
        <span className="link-hover-text">{text}</span>
        <span className="link-hover-text link-hover-clone">{text}</span>
      </span>
    </a>
  );
}
