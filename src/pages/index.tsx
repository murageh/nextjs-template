import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {decrement, increment, incrementByAmount, selectCount} from "../features/counter";
import {useState} from "react";

const Home: NextPage = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState<number>(0);

    return (
        <div className={styles.container}>
            <Head>
                <title>Next.js redux boilerplate</title>
                <meta name="description" content="Prepared by Fedelis MURAGE" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome
                    <br />
                    This is a project template with redux.
                </h1>

                <p className={styles.description}>
                    The current number is
                    {count}
                </p>
                <div>
                    <input
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(Number(e.target.value))}
                        type="number"
                    />
                    <button
                        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
                    >
                        Increment by amount
                    </button>
                </div>
                <div>
                    <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
                    <button onClick={() => dispatch(increment())}>Increment by 1</button>
                </div>
            </main>

            <footer className={styles.footer}>
                This is the footer.
            </footer>
        </div>
    )
}

export default Home