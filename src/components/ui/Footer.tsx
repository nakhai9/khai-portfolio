import { APP_DATA } from "../../data/data";

type FooterProps = {
  classNames?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer: React.FC<FooterProps> = ({ classNames }) => {
  return (
    <div className="flex items-center mt-10 border-slate-600 border-t h-12 text-xs">
      <p>&copy; {APP_DATA.me.name} 2025</p>
    </div>
  );
};

export default Footer;
