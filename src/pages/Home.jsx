import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to React Firebase Starter
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600 text-center mb-4">
          {user ? `Welcome back, ${user.email}!` : 'Please login to get started'}
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Features</h2>
            <ul className="list-disc list-inside text-blue-600 space-y-2">
              <li>Authentication with Firebase</li>
              <li>Responsive Design with Tailwind CSS</li>
              <li>Protected Routes</li>
              <li>User Profile Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}