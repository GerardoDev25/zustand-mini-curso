import { WhiteCard } from '../../components';
import { useBearStore } from '../../store/bears';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {/* <WhiteCard centered>
          <h2>Osos Polares</h2>

          <div className='flex flex-col md:flex-row'>
            <button> +1</button>
            <span className='text-3xl mx-2 lg:mx-10'> 0 </span>
            <button>-1</button>
          </div>
        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Pandas</h2>

          <div className='flex flex-col md:flex-row'>
            <button> +1</button>
            <span className='text-3xl mx-2 lg:mx-10'> 0 </span>
            <button>-1</button>
          </div>
        </WhiteCard> */}

        <BlackBear />
        <PolarBear />
        <PandaBear />
      </div>
    </>
  );
};

function BlackBear() {
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears);

  return (
    <WhiteCard centered>
      <h2>Black Bears</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increaseBlackBears(1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {blackBears} </span>
        <button onClick={() => increaseBlackBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
}

function PolarBear() {
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Polar Bears</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increasePolarBears(1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {polarBears} </span>
        <button onClick={() => increasePolarBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
}

function PandaBear() {
  const PandaBears = useBearStore((state) => state.pandaBears);
  const increasePandaBears = useBearStore((state) => state.increasePandaBears);

  return (
    <WhiteCard centered>
      <h2>Panda Bears</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increasePandaBears(1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {PandaBears} </span>
        <button onClick={() => increasePandaBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
}
