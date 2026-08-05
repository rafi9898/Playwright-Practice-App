import ModuleTabs from '@/components/ModuleTabs';
import { redirect } from 'next/navigation';

const tabs = [
  { id: '6', name: 'Ex 6: Filter', path: '/module-3/exercise-6' },
  { id: '7', name: 'Ex 7: Sort', path: '/module-3/exercise-7' },
  { id: '8', name: 'Ex 8: Add to Cart', path: '/module-3/exercise-8' },
  { id: '9', name: 'Ex 9: Quantity', path: '/module-3/exercise-9' },
  { id: '10', name: 'Ex 10: Remove', path: '/module-3/exercise-10' },
  { id: '11', name: 'Ex 11: Checkout', path: '/module-3/exercise-11' },
  { id: '12', name: 'Ex 12: Summary', path: '/module-3/exercise-12' },
];

export default function Module3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="page-title">Module 3: E-Commerce Automation</h1>
      <p className="page-subtitle">Practice with product lists, filtering, sorting, and cart management.</p>
      
      <ModuleTabs tabs={tabs} />
      
      <div className="card">
        {children}
      </div>
    </div>
  );
}
