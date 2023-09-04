import CreateDiscussion from '@/app/components/CreateDiscussion';
import GetDiscussion from '@/app/components/GetDiscussion';
import RateLimit from '@/app/components/RateLimit';
export default function Home() {
  return (
    <main className='p-4'>
      <RateLimit />
      <GetDiscussion />
      <CreateDiscussion />
    </main>
  );
}
