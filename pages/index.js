
import Head from 'next/head'; //웹 헤드
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';





export default function Home({ results }) {

    const router = useRouter();
    const onClick = (id, title) => {
        //as 부분에 원하는 URL을 사용하면 해당 URL형태로 마스킹되어 쿼리정보가 보이지 않도록 한다.
        router.push({
            pathname: `/movies/${title}/${id}`,
        })
    }


    return (
        <div className='container'>
            <SEO title={"Home"} />

            {results?.map(movie => (
                <div onClick={() => onClick(movie.id, movie.original_title)} className='movie' key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>
                        <Link href={{
                            pathname: `/movies/${movie.original_title}/${movie.id}`,
                        }}
                        >
                            <a>
                                {movie.original_title}
                            </a>
                        </Link>
                    </h4>
                </div>
            ))}
            <style jsx>{`
            .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
            }
            .movie{
                cursor : pointer
            }
            .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
            transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
            font-size: 18px;
            text-align: center;
            }
        `}</style>
        </div>
    )
}


export async function getServerSideProps() {
    /**
     * 함수명은 고정이다. 
     * 무엇을 실행하던지 이 함수 내에서 실행되는 내용은 서버에서 실행된다.
     * 백엔드에서만 실행되는 내용이다.
     * */
    //주소를 사용할때는 절대주소를 넣어야 한다. 백단에서 실행되기 때문이다.
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    //아래와 같이 실행하면 실행컴포넌트에서 props로 가져올수 있다.
    return {
        props: {
            results
        }
    }

}