import  { useState } from 'react'
import FileUpload from './components/FileUpload'
import Loader from './components/Loader';
import ScoreCard from './components/ScoreCard';
import Suggestions from './components/Suggestions';
import { analyzeResume } from '../utils/mockAnalysis';
import KeywordAnalysis from './components/KeywordAnalysis';

const App = () => {

  const handleUpload = () => {
    setLoading(true);

    setTimeout(() => {
const res = analyzeResume();
setResult(res);
setLoading(false);
}, 1500);
};
    

const [loading, setLoading] = useState(false);
const [result , setResult] = useState(null);



  return (
    <div className='min-h-screen flex  bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 items-center justify-center p-4'>
     <div className='bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-5'>
      <h1 className='text-2xl font-bold text-center text-gray-800'>
        Resume Analyzer
      </h1>

      <p className='text-center text-sm text-gray-500'>
        This is mock analysis (no real parsing)
      </p>

      <FileUpload onFileUpload={handleUpload}/>

      {loading && <Loader/>}

      {result && !loading && (
  <div className="space-y-4">
    <ScoreCard score={result.score} />

    <KeywordAnalysis
      found={result.found}
      missing={result.missing}
    />

    <Suggestions suggestions={result.suggestions} />

    <button
      onClick={() => setResult(null)}
      className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition"
    >
      Upload Another Resume
    </button>
  </div>
)}
      

       
     </div>
    </div>
  )
}

export default App