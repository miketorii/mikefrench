import Image from 'next/image';

import EiffelImg from '../images/eiffel.jpg';

export default function Home() {
  return (
    <div className="mk-container mk-center mk-light-grey">
	<Image src={EiffelImg} alt="Eiffel" width={400} height={300} />
    </div>
  );
}
