import { WhiteCard } from '../../components';
import { usePersonStore } from '../../store/person';

export const PersonPage = () => {
  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const setFirstName = usePersonStore((state) => state.setFistName);
  const setLastName = usePersonStore((state) => state.setLastName);

  return (
    <>
      <h1>Persona</h1>
      <p>
        Información que se compartirá a otro store, Session Storage y Firebase
      </p>
      <hr />

      <WhiteCard className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form>
            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name'
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name'
                  />
                </div>
              </div>
            </div>

            <pre className='bg-gray-200 p-5 rounded-[20px]'>
              {JSON.stringify({ firstName, lastName }, null, 2)}
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
