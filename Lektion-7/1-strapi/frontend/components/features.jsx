export const Features = ({ data }) => {
  // console.log(data)
  return (
    <div className="px-10">
      <h2 className="text-4xl text-center font-semibold my-10">{data.heading}</h2>
      <div className="grid grid-cols-3 gap-4">
        {
          data.features.map(feature => (
            <div key={feature.id} className="border rounded h-20 flex items-center justify-center">
              {feature.text}
            </div>
          ))
        }
      </div>
    </div>
  )
}