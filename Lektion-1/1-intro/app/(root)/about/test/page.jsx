// export const metadata = {
//   title: "Test Page",
//   description: "asdsdasd",
// };


export async function generateMetadata({ params }) {

  // const res = await fetch("https://apiproduct/" + params.id);

  return {
    // title: res.data.title,
    title: "ECOM | product 2",
  };
}

function TestPage() {

  
  return (
    <div>TestPage</div>
  )
}
export default TestPage