import { Link } from "@tanstack/react-router";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Hacks Ivore home">
      <span className="brand-mark">HI</span>
      <span>
        <strong>HACKS IVORE</strong>
        <small>DRILLING & MINING</small>
      </span>
    </Link>
  );
}
