import ModuleTabs from '@/components/ModuleTabs';
import { redirect } from 'next/navigation';

const tabs = [
  { id: '13', name: 'Ex 13: Dropdowns', path: '/module-4/exercise-13' },
  { id: '14', name: 'Ex 14: Checkboxes/Radio', path: '/module-4/exercise-14' },
  { id: '15', name: 'Ex 15: Date Picker', path: '/module-4/exercise-15' },
  { id: '16', name: 'Ex 16: Modals', path: '/module-4/exercise-16' },
  { id: '17', name: 'Ex 17: Dialogs', path: '/module-4/exercise-17' },
  { id: '18', name: 'Ex 18: Drag & Drop', path: '/module-4/exercise-18' },
  { id: '19', name: 'Ex 19: Upload File', path: '/module-4/exercise-19' },
  { id: '20', name: 'Ex 20: Download File', path: '/module-4/exercise-20' },
];

export default function Module4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="page-title">Module 4: Advanced UI Components</h1>
      <p className="page-subtitle">Practice interacting with complex elements like date pickers, drag & drop, file uploads.</p>
      
      <ModuleTabs tabs={tabs} />
      
      <div className="card">
        {children}
      </div>
    </div>
  );
}
