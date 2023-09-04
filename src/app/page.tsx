import CreateDiscussion from '@/app/components/CreateDiscussion';
import Discussion from '@/app/components/Discussion';
import RateLimit from '@/app/components/RateLimit';
export default function Home() {
  return (
    <main className='p-4'>
      <RateLimit />
      <Discussion />
      <CreateDiscussion />
    </main>
  );
}
