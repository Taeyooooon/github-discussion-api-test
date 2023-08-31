import CreateDiscussion from '@/app/components/CreateDiscussion';
import GetDiscussion from '@/app/components/GetDiscussion';
import Test from '@/app/components/Test';

export default function Home() {
  return (
    <main className='p-4'>
      <GetDiscussion />
      <CreateDiscussion />
      <Test />
    </main>
  );
}
