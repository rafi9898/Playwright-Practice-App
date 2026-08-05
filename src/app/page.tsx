import Link from 'next/link';

export default function Home() {
  return (
    <div className="card">
      <h1 className="page-title">Welcome to Playwright Practice</h1>
      <p className="page-subtitle">Master your test automation skills with 30 real-world exercises.</p>
      
      <div style={{ marginTop: '24px' }}>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
          This application is designed specifically as a playground for the Playwright Automation Course.
          Select a module from the sidebar to begin your practice.
        </p>
        <Link href="/module-2">
          <button className="btn-primary">Start Practicing</button>
        </Link>
      </div>
    </div>
  );
}
