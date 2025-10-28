import Head from 'next/head';
import { useRouter } from 'next/router';

import { getCabin } from '@/lib/data-service';

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

      <div>Cabin #{router.query.cabinId}</div>
    </>
  );
};

export default Cabin;
