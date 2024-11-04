import { Bullet } from '../bullet';
import { Line } from '../line';

Line;

interface ItemProps {
  title: string;
  subtitle: string;
  text: string;
  urlImage: string;
  alt: string;
}

const Item = ({ title, subtitle, text, urlImage, alt }: ItemProps) => {
  return (
    <>
      <div className="flex md:odd:text-right md:even:flex-row-reverse justify-between gap-y-1 ">
        <Line className="w-[10px] h-auto mr-5 bg-black md:hidden">
          <Bullet />
        </Line>
        <div className="flex flex-col md:hidden">
          <div className="md:w-[40%]  py-5">
            <h2 className=" text-xl font-black">{title}</h2>
            <h3 className="text-lg font-bold">{subtitle}</h3>
            <p>{text}</p>
          </div>

          <Line className="w-[2px] md:wx-[10%] h-auto mx-5 bg-black hidden md:block">
            <Bullet />
          </Line>

          <img className="pb-5 md:w-[40%]" src={urlImage} alt={alt} />
        </div>

        <div className="hidden md:block md:w-[40%]  py-5">
          <h2 className=" text-xl font-black">{title}</h2>
          <h3 className="text-lg font-bold">{subtitle}</h3>
          <p>{text}</p>
        </div>

        <Line className="hidden md:block w-[2px] md:wx-[10%] h-auto mx-5 bg-black">
          <Bullet />
        </Line>

        <img className="hidden md:block pb-5 md:w-[40%]" src={urlImage} alt={alt} />
      </div>
    </>
  );
};

export { Item };
