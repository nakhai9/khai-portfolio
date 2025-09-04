import { APP_DATA } from '../../data/data';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }
  return (
    <div className="flex items-center mt-10 border-slate-600 border-t h-12 font-medium">
      <p>&copy; {APP_DATA.me.name} {getCurrentYear()}. All rights reserved.</p>
    </div>
  );
};

export default Footer;
