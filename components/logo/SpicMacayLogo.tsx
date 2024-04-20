import Logo from './SpicMacayLogo.png'

interface LogoProps {
  size: number;
}

const SpicMacayLogo: React.FC<LogoProps> = ({ size }) => {
  return (
    <img
      src={Logo.src}
      alt="spic-macay-logo"
      style={{ width: size, height: 'auto' }}
    />
  );
};

export default SpicMacayLogo;