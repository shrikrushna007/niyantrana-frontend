import { useUser } from '@clerk/clerk-react';
import LogoutButton from '../auth/LogoutButton';

export default function ProfileHeader() {
  const { user } = useUser();

  return (
    <div className="card flex items-center gap-5">
      <div className="h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center text-xl font-semibold text-white overflow-hidden">
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt={user.fullName}
            className="w-full h-full object-cover"
          />
        ) : (
          user?.fullName?.charAt(0)?.toUpperCase() || 'U'
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-secondary-900">{user?.fullName || 'Demo User'}</h3>
        <p className="text-sm text-secondary-600">
          {user?.primaryEmailAddress?.emailAddress || 'Age: 28 · Gender: Male'}
        </p>
        <p className="text-sm text-secondary-600">
          Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Jan 2026'}
        </p>
      </div>

      <LogoutButton />
    </div>
  );
}
