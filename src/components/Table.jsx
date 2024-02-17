import { calculateInvestmentResults, formatter } from "@/util/investment";

const Table = ({ userInput, handleChange }) => {
  const tableData = calculateInvestmentResults(userInput);

  const initialInvestment =
    tableData[0].valueEndOfYear -
    tableData[0].interest -
    tableData[0].annualInvestment;

  return (
    <div className="relative overflow-x-auto w-full h-[700px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Investment Value
            </th>
            <th scope="col" className="px-6 py-3">
              Interest (Year)
            </th>
            <th scope="col" className="px-6 py-3">
              Total Interest
            </th>
            <th scope="col" className="px-6 py-3">
              Invested Capital
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            const totalInterest =
              data.valueEndOfYear -
              data.annualInvestment * data.year -
              initialInvestment;
            const totalAmountInvested = data.valueEndOfYear - totalInterest;
            return (
              <tr
                key={data.year}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.year}
                </td>
                <td className="px-6 py-4">
                    {formatter.format(data.valueEndOfYear)}
                    </td>
                <td className="px-6 py-4">{formatter.format(data.interest)}</td>
                <td className="px-6 py-4">{formatter.format(totalInterest)}</td>
                <td className="px-6 py-4">
                  {formatter.format(totalAmountInvested)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
