import { useState } from 'react';
import { useAuth } from '../components/Context/Authprovider';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, updateUserProfile, logOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const navigate = useNavigate();

  function handleUpdateProfile(e) {
    e.preventDefault();

    setError('');
    setLoading(true);
    setSuccess('');

    updateUserProfile(displayName, user.photoURL)
      .then(() => {
        setSuccess('Profile updated successfully!');
      })
      .catch((err) => {
        setError('Failed to update profile: ' + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleLogout() {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        setError('Failed to log out: ' + err.message);
      });
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">
                    {user?.displayName ? user.displayName[0].toUpperCase() :
                     user?.email ? user.email[0].toUpperCase() : "U"}
                  </span>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                {user?.displayName || 'No name set'}
              </h3>
              <p className="text-gray-500">{user?.email}</p>
              <p className="text-gray-500 text-sm">
                Member since: {new Date(user?.metadata?.creationTime).toLocaleDateString()}
              </p>
            </div>
          </div>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? 'Updating...' : 'Update Profile'}
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}