import { AddPageForm } from "./_components/add-page-form"

function PageDetailsPage({ params }) {
  return (
    <div className="px-10 pt-10">
      <h1 className="text-center mb-10 text-4xl font-bold capitalize">{params.slug}</h1>
      <AddPageForm name={params.slug} />
    </div>
  )
}
export default PageDetailsPage