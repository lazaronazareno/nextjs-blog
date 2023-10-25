interface Props {
  table: [{ pros: string; cons: string }]
}

export default function TablePost({ table }: Props) {
  return (
    <div className="w-full text-lg">
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="table-fixed w-full text-left">
          <thead className="text-gray-200 uppercase bg-gray-500">
            <tr>
              <td className="py-4 border font-bold p-4">Pros</td>
              <td className="py-4 border font-bold p-4">Contras</td>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr key={index} className="py-2">
                <td className="py-2 border p-4">{item.pros ? '✔' + item.pros : ''}</td>
                <td className="py-2 border p-4">{item.cons ? '❌' + item.cons : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
