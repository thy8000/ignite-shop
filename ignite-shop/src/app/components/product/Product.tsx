import styles from './Product.module.css';
import Image from 'next/image';

export default function Product(args: any) {
    return(
        <a className={styles.card + ' group relative flex items-center justify-center p-1 rounded-lg cursor-pointer overflow-hidden'}>
            <Image 
                src={args.image}
                className='object-cover'
                width={520}
                height={480}
                alt={args.title}
            />

            <footer className="absolute bottom-1 left-1 right-1 flex items-center justify-between p-8 rounded-md bg-[rgba(0,0,0,0.6)] 
            translate-y-[110%] opacity-0 transition-all duration-[0.2s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <strong className="text-lg">{args.title}</strong>

                <span className="text-xl font-bold text-green-300">R$ {args.price}</span>
            </footer>
        </a>
    );
}