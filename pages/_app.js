// 하나의blueprint라고 본다

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

import "../styles/globals.css"

//프레임워크의 규칙에 따른다.
export default function App({ Component, pageProps }) {
    //페이지가 열리기 전에 해당 페이지(Component) 정보를 위의 Component 정보에 담아서 가져온다.
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}