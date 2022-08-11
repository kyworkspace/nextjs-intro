/*
 URL ==> /movies/:id
*/
import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/SEO";

function MovieDetail({ params }) {
    //라우터 속의 quert객체에 있는 값의 키는 파일이름의 [] 안에 들어있는 내용과 동일하다.
    const router = useRouter();
    //페이지가 백엔드에서 프리랜더 되기 때문에 URL로 직접접근하면 에러가 발생한다.
    const [title, id] = params || [];

    return (
        <div>
            <SEO title={title} />
            <h4>{title || "Loading"}</h4>
        </div>
    );
}

export default MovieDetail;


export function getServerSideProps({ params: { params } }) {
    // URL에 정보를 보충해주기 위해서 이번에는 사용함
    return {
        props: {
            params
        }
    }
}