import ComponentsPage from "./_components/page";

export const dynamic = "force-dynamic"
export default async function Home() {


  const random = Math.random() * 10000;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HomePage
      <p>Random nr: {random}</p>
      <ComponentsPage />
    </main>
  );
}
