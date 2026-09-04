import { Link } from "@tanstack/react-router";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="HACKS IVOIRE home">
      <img 
        src="/logo.jpg" 
        alt="HACKS IVOIRE" 
        className="brand-logo"
        style={{ height: '50px', width: 'auto' }}
      />
    </Link>
  );
}
