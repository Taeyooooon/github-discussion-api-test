import CreateDiscussion from '@/app/components/CreateDiscussion';
import GetDiscussion from '@/app/components/GetDiscussion';
export default function Home() {
  return (
    <main className='p-4'>
      <GetDiscussion />
      <CreateDiscussion />
    </main>
  );
}
