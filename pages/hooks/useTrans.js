import en from '../../public/lang/en.js'
import vi from '../../public/lang/vi.js'
import fr from '../../public/lang/fr.js'
import { useRouter } from 'next/router.js'

const useTrans = () => {
    console.log('>>>useTrans runned');
    const router = useRouter();
    const locales = {en, vi, fr};
    return locales[router.locale];
}

export default useTrans;
