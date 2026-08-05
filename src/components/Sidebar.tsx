'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  MousePointer2, 
  ShoppingCart, 
  Layers, 
  Globe2, 
  Network, 
  Workflow,
  Settings
} from 'lucide-react';

const modules = [
  { id: 'module-1', name: 'M1: PW Essentials', path: '/module-1', icon: BookOpen },
  { id: 'module-2', name: 'M2: Locators & UI', path: '/module-2', icon: MousePointer2 },
  { id: 'module-3', name: 'M3: E-Commerce', path: '/module-3', icon: ShoppingCart },
  { id: 'module-4', name: 'M4: Advanced UI', path: '/module-4', icon: Layers },
  { id: 'module-5', name: 'M5: Browser Context', path: '/module-5', icon: Globe2 },
  { id: 'module-6', name: 'M6: API & Network', path: '/module-6', icon: Network },
  { id: 'module-7', name: 'M7: E2E Scenario', path: '/module-7', icon: Workflow },
  { id: 'module-8', name: 'M8: Improving Suite', path: '/module-8', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>PW Practice App</h1>
      </div>
      <nav className="sidebar-nav">
        {modules.map((m) => {
          const isActive = pathname.startsWith(m.path);
          const Icon = m.icon;
          return (
            <Link
              key={m.id}
              href={m.path}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} className="sidebar-icon" />
              <span>{m.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
