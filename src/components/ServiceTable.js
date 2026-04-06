const data = [
  {
    type: "Structural Barrier",
    severity: "Critical/Long-term",
    technique: "Soil Infusion & Injection",
    guarantee: "5-Year Warranty",
  },
  {
    type: "Clinical Exclusion",
    severity: "Preventative/Moderate",
    technique: "Physical Barrier & Sealing",
    guarantee: "Annual Renewal",
  },
  {
    type: "Aerosol Neutralization",
    severity: "Immediate/High",
    technique: "ULV Cold Fogging",
    guarantee: "Season-Specific",
  },
];

export default function ServiceTable() {
  return (
    <section className="bg-[#eef2f1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Service Selection Guide
        </h2>
        <p className="text-gray-600 mt-2 mb-10">
          Compare our most frequently requested protocols.
        </p>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-left">
            
            {/* Head */}
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4">Protocol Type</th>
                <th className="px-6 py-4">Severity Focus</th>
                <th className="px-6 py-4">Technique</th>
                <th className="px-6 py-4">Guarantee</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-t transition duration-200 hover:bg-gray-100 cursor-pointer"
                >
                  <td className="px-6 py-5 font-semibold text-gray-900">
                    {row.type}
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {row.severity}
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {row.technique}
                  </td>
                  <td className="px-6 py-5 text-gray-700">
                    {row.guarantee}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}