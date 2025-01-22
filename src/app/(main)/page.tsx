import HomeComponent from '@/components/pages/home';

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-4xl font-bold text-center">You made it!</h1>
      <HomeComponent />
    </div>
  );
}
