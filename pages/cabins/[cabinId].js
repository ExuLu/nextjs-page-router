import { useRouter } from 'next/router';

const Cabin = () => {
  const router = useRouter();

  return <div>Cabin #{router.query.cabinId}</div>;
};

export default Cabin;
