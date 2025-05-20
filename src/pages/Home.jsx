import { useAuth } from '../components/Context/Authprovider';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className='font-bold text-black text-5xl'>Homepage</h1>
    </div>
  );
}