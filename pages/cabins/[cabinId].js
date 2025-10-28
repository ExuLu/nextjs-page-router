import Head from 'next/head';
import { useRouter } from 'next/router';

import { getCabin } from '@/lib/data-service';
import CabinView from '@/components/CabinView';

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);

  return { props: { cabin } };
}

const Cabin = ({ cabin }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cabin {router.query.cabinId} | The Wild Oasis</title>
      </Head>

      <div className='max-w-6xl mx-auto mt-8'>
        <CabinView cabin={cabin} />
      </div>
    </>
  );
};

export default Cabin;
