function CatchAllPage({ params}) {
  // console.log(params)
  return (
    <div>{params?.slug?.map((param, i) => <p key={i}>{param}</p>)} SOP</div>
  )
}
export default CatchAllPage