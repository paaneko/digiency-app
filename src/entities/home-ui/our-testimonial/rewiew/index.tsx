import Image from 'next/image';

export function Rewiew() {
  return (
    <div className="w-[370px] h-[270px] p-[25px] bg-white rounded-lg">
      <div className="flex space-x-2">
        <Image width={20} height={20} src="/star.svg" alt="star" />
        <Image width={20} height={20} src="/star.svg" alt="star" />
        <Image width={20} height={20} src="/star.svg" alt="star" />
        <Image width={20} height={20} src="/star.svg" alt="star" />
        <Image width={20} height={20} src="/star.svg" alt="star" />
      </div>
      <div className="my-[25px] text-gray-pg">
        Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum
        odio justo. Rhoncus.
      </div>
      <div className="flex justify-between">
        <Image width={60} height={60} src="/rewiew-awatar-1.png" alt="rewiew-awatar" />
        <div className="">
          <div className="font-medium text-xl text-orange-main">Phillip Levin</div>
          <div className="text-sm text-gray-pg font-light">CEO / Creative IT</div>
        </div>
        <Image width={44} height={35} src="/rewiew-commas.svg" alt="rewiew-commas" />
      </div>
    </div>
  );
}

export default Rewiew;
