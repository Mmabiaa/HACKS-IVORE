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
      <span style={{ marginLeft: '0.75rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
        HACKS IVOIRE
      </span>
    </Link>
  );
}
