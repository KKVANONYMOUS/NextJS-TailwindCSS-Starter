import Link from 'next/link';

import Header from '@/components/header';

export default function Home() {
    return (
        <>
            <div className="text-center">
                <Header />
                <div className="bg-purple-500 m-3 p-8 rounded shadow-lg">
                    <ul className="text-white">
                        <li>
                            NextJS starter with TypeScript
                            <span role="img" aria-label="emoji">
                                ✨
                            </span>
                            and TailwindCSS🎨 configuration
                        </li>
                        <li>
                            Configured with ESLint
                            <span role="img" aria-label="emoji">
                                ⚡
                            </span>
                            , Prettier{' '}
                            <span role="img" aria-label="emoji">
                                🌈
                            </span>{' '}
                            and Husky{' '}
                            <span role="img" aria-label="emoji">
                                ✅
                            </span>{' '}
                            for providing linting and formatting features along with pre-commit
                            checks
                        </li>
                    </ul>
                    <div className="mt-5 bg-purple-800 p-8 rounded">
                        <h2 className="text-lg text-white font-bold">Kunal Kumar Verma</h2>
                        <Link href="https://github.com/KKVANONYMOUS">
                            <a className="text-gray-200 font-semibold hover:text-purple-300">
                                @kkvanonymous
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="text-base pt-4 mb-4">
                    <Link href="https://github.com/KKVANONYMOUS/NextJS-TailwindCSS-Starter">
                        <a className="bg-purple-900 text-white p-3 rounded no-underline hover:bg-purple-700 ml-2">
                            Source on Github
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}
