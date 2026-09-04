import { Link } from "@tanstack/react-router";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="HACKS IVOIRE home">
      <span className="brand-mark">HI</span>
      <span>
        <strong>HACKS IVOIRE</strong>
        <small>DRILLING & MINING</small>
      </span>
    </Link>
  );
}
