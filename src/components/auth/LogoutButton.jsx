import { LogOut } from 'lucide-react';
import { useClerk } from '@clerk/clerk-react';

const LogoutButton = () => {
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut({ redirectUrl: '/' });
  };

  return (
    <button
      onClick={handleLogout}
      className="btn-secondary flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  );
};

export default LogoutButton;