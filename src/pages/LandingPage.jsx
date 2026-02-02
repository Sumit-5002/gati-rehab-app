import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-4">
      {/* Hero Section */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-blue-500">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Welcome Back, Rajesh</h2>
        <p className="text-gray-500 mb-6">Your recovery journey continues today.</p>

        {/* Daily Task Card */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left border border-blue-100">
          <h3 className="font-bold text-blue-800">Today's Routine</h3>
          <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
            <li>Knee Bends (3 Sets)</li>
            <li>Leg Raises (10 Reps)</li>
          </ul>
        </div>

        {/* The Big Action Button */}
        <button 
          onClick={() => navigate('/workout')}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xl shadow-lg transition-transform transform active:scale-95 flex items-center justify-center gap-2"
        >
          <span>▶</span> Start Session
        </button>

        <p className="mt-4 text-xs text-gray-400">
          * AI functionality works offline
        </p>
      </div>
    </div>
  );
};

export default LandingPage;