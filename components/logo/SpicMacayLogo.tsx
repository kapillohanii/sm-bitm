import Logo from './SpicMacayLogo.png'
import { Image } from '@mantine/core';

interface LogoProps {
  size: number;
}

const SpicMacayLogo: React.FC<LogoProps> = ({ size }) => {
  return (
    <div>
      <Image
        src={Logo.src}
        alt="spic-macay-logo"
        style={{ width: size, height: 'auto',paddingLeft: 14 }}
      />

    </div>

  );
};

export default SpicMacayLogo;