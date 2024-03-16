import logoIcon from "../../assets/icons/logo.svg";

import Image from 'next/image';

export default function Header() {
    return (
        <header className="py-8 w-full max-w-[1100px] m-auto">
          <Image 
            src={logoIcon}
            alt="Logo do Ignite Shop" 
            title="Logo do Ignite Shop"
            width={129} 
            height={56}
          />
        </header>
    );
}