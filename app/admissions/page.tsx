// app/admissions/page.tsx

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Admissions & Fee Policy
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Admission Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-primary px-6 py-4">
            <h2 className="text-xl font-bold text-white tracking-wide">ADMISSION</h2>
          </div>
          <div className="p-6 md:p-8">
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">♦</span>
                <span>Admissions depend strictly on available vacancies, and all decisions are final.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">♦</span>
                <span>School management holds the final right to admit or retain any student.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">♦</span>
                <span>Admission is confirmed only upon payment of a strictly non-refundable admission fee.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">♦</span>
                <span>For Standard I, students must be at least 5.5 years old by August 31st of the admission year.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">♦</span>
                <span>New students must submit an official Municipal Birth Certificate to verify their age.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">♦</span>
                <span>Please submit the original previous report card along with one clear photocopy.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">♦</span>
                <span>Out-of-state Transfer Certificates must be countersigned by that state's Education Inspector.</span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Fee Policy & School Fees Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-primary px-6 py-4">
            <h2 className="text-xl font-bold text-white tracking-wide">SCHOOL FEES & FEE POLICY</h2>
          </div>
          <div className="p-6 md:p-8 space-y-8">
            
            {/* School Fees Rules */}
            <ol className="list-decimal list-inside space-y-2 text-text-muted font-medium">
              <li>Parents are Instructed to pay the school fee without Late.</li>
              <li>After due date, school fees will be collected at school office along with fine amount in favour of <strong className="text-primary">"GBR EDUCATIONAL INSTITUTIONS"</strong></li>
            </ol>

            {/* Fee Policy Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-center text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-50 font-bold text-primary">
                    <th className="border border-gray-300 p-3" rowSpan={2}>CAMPUS</th>
                    <th className="border border-gray-300 p-3" colSpan={3}>TUITION FEE</th>
                    <th className="border border-gray-300 p-3" colSpan={2}>TRANSPORT FEE SCHEDULE</th>
                  </tr>
                  <tr className="bg-gray-100 font-semibold text-primary text-xs md:text-sm">
                    <th className="border border-gray-300 p-2">1st INSTALLMENT</th>
                    <th className="border border-gray-300 p-2">2nd INSTALLMENT</th>
                    <th className="border border-gray-300 p-2">3rd INSTALLMENT</th>
                    <th className="border border-gray-300 p-2">1st INSTALLMENT</th>
                    <th className="border border-gray-300 p-2">2nd INSTALLMENT</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted font-medium">
                  <tr>
                    <td className="border border-gray-300 p-4 font-bold text-[#b91c1c]">E.M.S</td>
                    <td className="border border-gray-300 p-3">
                      40%<br/><span className="text-xs md:text-sm">(JUN 1st to 10th)</span>
                    </td>
                    <td className="border border-gray-300 p-3">
                      30%<br/><span className="text-xs md:text-sm">(SEPT 1st to 10th)</span>
                    </td>
                    <td className="border border-gray-300 p-3">
                      30%<br/><span className="text-xs md:text-sm">(DEC 1st to 10th)</span>
                    </td>
                    <td className="border border-gray-300 p-3">
                      50%<br/><span className="text-xs md:text-sm">(JUN 1st to 10th)</span>
                    </td>
                    <td className="border border-gray-300 p-3">
                      50%<br/><span className="text-xs md:text-sm">(SEP 1st to 10th)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-bold text-[#b91c1c]">A.C.CAMPUS</td>
                    <td className="border border-gray-300 p-3">
                      50%<br/><span className="text-xs md:text-sm">(JUN 1st to 10th)</span>
                    </td>
                    <td className="border border-gray-300 p-3">
                      50%<br/><span className="text-xs md:text-sm">(OCT 1st to 10th)</span>
                    </td>
                    <td className="border border-gray-300 p-3 tracking-widest text-gray-400">
                      ---------
                    </td>
                    <td className="border border-gray-300 p-3">
                      50%<br/><span className="text-xs md:text-sm">(JUN 1st to 10th)</span>
                    </td>
                    <td className="border border-gray-300 p-3">
                      50%<br/><span className="text-xs md:text-sm">(OCT 1st to 10th)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Note Section */}
            <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-500">
              <h4 className="font-bold text-[#b91c1c] mb-2">NOTE:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-800">
                <li>All monetary dues related to academic & transport should be cleared on or before the due dates failing which the school management is authorised to impose a penaltyof Rs.50/- per day.</li>
                <li>Payment must be made at school premise in the form of cash.</li>
              </ol>
            </div>
            
          </div>
        </section>

        {/* Withdrawal & Leaving Certificate Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Withdrawal */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-xl font-bold text-white tracking-wide">WITHDRAWAL</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">♦</span>
                  <span>One calendar week's notice is required to be given for the withdrawal of the student before the payment schedule else fees for the month will be charged.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">♦</span>
                  <span>School leaving certificate will not be issued until the school dues have been paid in full.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Rules for TC */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
            <div className="bg-[#4a7c59] px-6 py-4">
              <h2 className="text-xl font-bold text-white tracking-wide">RULES FOR ISSUE OF LEAVING CERTIFICATE</h2>
            </div>
            <div className="p-6">
              <p className="font-bold text-[#a63a3a] mb-4">Parents are requested to note the following</p>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start">
                  <span className="text-[#4a7c59] mr-3 mt-1">♦</span>
                  <span>Parent / Guardian should approach office and should fill T.C form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4a7c59] mr-3 mt-1">♦</span>
                  <span>After Applying for T.C it takes 7 working days to process</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}