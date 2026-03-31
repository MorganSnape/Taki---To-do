import checkIcon from '../assets/check.svg';
import deleteIcon from '../assets/close.svg';

const iconOptions = {
  "check": <img src={checkIcon} alt="Check icon" width={20} />,
  "delete": <img src={deleteIcon} alt="Delet icon" width={20} />
};

type IconType = keyof typeof iconOptions; 
interface Props {
  type: IconType
}


export default function Icon({ type }: Props) {
  return (
    <span className='h-full flex items-center justify-center'>
      {iconOptions[type] ?? null}
    </span>
  )
}