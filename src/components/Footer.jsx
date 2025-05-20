export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} React Firebase Starter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}