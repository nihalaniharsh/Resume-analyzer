const KeywordAnalysis = ({ found, missing }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border space-y-4">

      <h3 className="text-lg font-semibold text-gray-800">
        Keyword Analysis
      </h3>

      

  {/* founded part */}
      <div>
        <p className="text-sm text-green-600 font-medium">
          Found ({found.length})
        </p>


       {/* loop through found keyword */}
        <div className="flex flex-wrap gap-2 mt-2">
          {found.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* missing part */}
      <div>
        <p className="text-sm text-red-500 font-medium">
          Missing ({missing.length})
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {missing.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full"
            >


              {item}
            </span>
          ))}
        </div>
      </div>




      <p className="text-xs text-gray-400">
        ⓘ This is a simulated keyword analysis for demonstration purposes.
      </p>
    </div>
  );
};

export default KeywordAnalysis;